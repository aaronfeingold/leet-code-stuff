const TRAVEL_TIME = 25;

export enum ElevatorStatus {
  Idle = "Idle",
  Running = "Running",
}

export enum ElevatorDirection {
  Up = "Up",
  Down = "Down",
}

export interface InternalControlEventHandlers {
  // Handler gets called before reaching any floor
  shouldStopAtFloor: (floor: number, direction: ElevatorDirection) => boolean;

  onStop: (floor: number, direction: ElevatorDirection) => void;
}

export interface InternalControl {
  getCurrentStatus(): ElevatorStatus;

  getCurrentDirection(): ElevatorDirection;

  getCurrentFloor(): number;

  // Make elevator starting to go up, it will stop at the floor where shouldStopAtFloor returns true
  // calling this function again while elevator is running will throw an error
  startMoveUp(): void;

  // Make elevator starting to go down, it will stop at the floor where shouldStopAtFloor returns true
  // calling this function again while elevator is running will throw an error
  startMoveDown(): void;
}

export function wait(round: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, round * TRAVEL_TIME);
  });
}

export class InternalControlMock implements InternalControl {
  private status: ElevatorStatus = ElevatorStatus.Idle;
  private direction: ElevatorDirection = ElevatorDirection.Up;
  private floor: number = 0;
  public eventHandlers: InternalControlEventHandlers;

  constructor(
    eventHandlers: InternalControlEventHandlers,
    private minFloor: number,
    private maxFloor: number
  ) {
    this.eventHandlers = eventHandlers;
    return this;
  }

  getCurrentStatus(): ElevatorStatus {
    return this.status;
  }

  getCurrentFloor(): number {
    return this.floor;
  }

  getCurrentDirection(): ElevatorDirection {
    return this.direction;
  }

  private async move(direction: ElevatorDirection): Promise<void> {
    if (this.status === ElevatorStatus.Running) {
      throw new Error("Elevator is already running");
    }

    this.status = ElevatorStatus.Running;
    console.log(`Elevator is moving ${direction}`);

    this.direction = direction;
    const delta = direction === ElevatorDirection.Up ? 1 : -1;

    while (
      direction === ElevatorDirection.Up
        ? this.floor < this.maxFloor
        : this.floor > this.minFloor
    ) {
      let shouldStop = this.eventHandlers.shouldStopAtFloor(
        this.floor + delta,
        direction
      );
      await wait(1);
      this.floor += delta;
      console.log(`Elevator reaching ${this.floor}...`);

      if (shouldStop) {
        break;
      }
    }

    console.log(`Elevator stopped at ${this.floor}`);
    this.status = ElevatorStatus.Idle;
    this.eventHandlers.onStop(this.floor, direction);
  }

  startMoveDown(): void {
    this.move(ElevatorDirection.Down);
  }

  startMoveUp(): void {
    this.move(ElevatorDirection.Up);
  }
}

// CHALLENGE
// Elevator is idle at F0
// User A request DOWN from F9 => Elevator should starting to move up
// Elevator is moving up, currently reaching F3
// User B request UP from F5 => Elevator should stop at F5
// User C request UP from F2 => Elevator should continue go upwards
// Elevator is moving up, currently stopping at F5, User B is in, User B request to F8 => Elevator should stop at F8
// Elevator is moving up, currently stopping at F8, User B is out
// User D request DOWN from F15 => Elevator should skip F9, and go to F15
// Elevator is moving up, curently stopping at F15, User D is in, User D request to F11 => Elevator should stop at F11
// Elevator is moving down, currently stopping at F11, User D is out
// Elevator is moving down, currently stopping at F9, USer A is in, User A request to F0
// Elevator is moving down, currently stopping at F0, User A is out
// Elevator is moving up, currently stopping at F2, User C is in

// track external button requests that couldn't be served immediately
type ExternalButtonRequest = {
  floor: number;
  direction: ElevatorDirection;
};

// a list of pending external requests
const pendingExternalRequests: ExternalButtonRequest[] = [];

class ExternalButton {
  public control: InternalControl;
  private minFloor: number;
  private maxFloor: number;

  constructor(control: InternalControl, minFloor: number, maxFloor: number) {
    this.control = control;
    this.minFloor = minFloor;
    this.maxFloor = maxFloor;
  }

  press(
    callingFloor: number = 0,
    selectedDirection: ElevatorDirection = ElevatorDirection.Up
  ): boolean {
    // consider the range the elevator can actually move
    // in the real world, this shouldn't really happen, but we'll handle it
    if (callingFloor < this.minFloor || callingFloor > this.maxFloor) {
      throw new Error(
        `Floor ${callingFloor} is out of range (${this.minFloor}-${this.maxFloor})`
      );
    }

    const currentFloor = this.control.getCurrentFloor();
    const currentStatus = this.control.getCurrentStatus();
    const currentDirection = this.control.getCurrentDirection();

    // if elevator is already running, determine if it can handle this user's request
    if (currentStatus === ElevatorStatus.Running) {
      // if elevator is moving in the opposite direction, add to pending requests
      if (
        (selectedDirection === ElevatorDirection.Up &&
          currentDirection === ElevatorDirection.Down) ||
        (selectedDirection === ElevatorDirection.Down &&
          currentDirection === ElevatorDirection.Up)
      ) {
        console.log(
          `Elevator moving ${currentDirection}, can't serve ${selectedDirection} request`
        );
        pendingExternalRequests.push({
          floor: callingFloor,
          direction: selectedDirection,
        });
        return false;
      }

      // if elevator is moving in same direction, it will pick up the passenger on its way
      if (
        (selectedDirection === ElevatorDirection.Up &&
          callingFloor > currentFloor) ||
        (selectedDirection === ElevatorDirection.Down &&
          callingFloor < currentFloor)
      ) {
        console.log(
          `Elevator will pick up passenger at ${callingFloor} on its way ${currentDirection}`
        );

        pendingExternalRequests.push({
          floor: callingFloor,
          direction: selectedDirection,
        });
        return true;
      }

      // elevator is moving but can't handle this request now (e.g., already passed the floor)
      // ex: Elevator is moving up, currently reaching F3 when User C request UP from F2 => Elevator should continue go upwards
      console.log(
        `Elevator already passed floor ${callingFloor}. Adding to pending requests.`
      );
      pendingExternalRequests.push({
        floor: callingFloor,
        direction: selectedDirection,
      });

      return false;
    }

    // if elevator is idle, then determine which direction to move
    if (callingFloor > currentFloor) {
      // if calling floor is above, move up
      console.log(
        `Elevator is moving up to pick up passenger at ${callingFloor}`
      );
      this.control.startMoveUp();
      return true;
    } else if (callingFloor < currentFloor) {
      // if calling floor is below, move down
      console.log(
        `Elevator is moving down to pick up passenger at ${callingFloor}`
      );
      this.control.startMoveDown();
      return true;
    } else {
      // or the elevator is already at the requested floor
      console.log(`Elevator is already at floor ${callingFloor}`);
      return true;
    }
  }
}

class InternalButtons {
  public control: InternalControl;
  private minFloor: number;
  private maxFloor: number;
  // a set of floors that the elevator will stop at
  private destinationFloors: Set<number> = new Set();

  constructor(control: InternalControl, minFloor: number, maxFloor: number) {
    this.control = control;
    this.minFloor = minFloor;
    this.maxFloor = maxFloor;
  }

  public shouldStopAtFloor(
    floor: number,
    direction: ElevatorDirection
  ): boolean {
    if (this.destinationFloors.has(floor)) {
      return true;
    }
    return pendingExternalRequests.some(
      (req) => req.floor === floor && req.direction === direction
    );
  }

  public onStop(floor: number, direction: ElevatorDirection): void {
    console.log(`Elevator stopped at floor ${floor}`);
    // remove the floor from the destination floors
    this.destinationFloors.delete(floor);

    // if we have more destinations, keep moving in the appropriate direction
    this.processPendingRequests(direction);
    this.continueJourney();
  }

  private processPendingRequests(direction: ElevatorDirection): void {
    if (this.control.getCurrentStatus() !== ElevatorStatus.Idle) {
      return;
    }

    const currentFloor = this.control.getCurrentFloor();

    if (pendingExternalRequests.length > 0) {
      console.log("Processing pending external requests...");
      const currentFloorRequests = pendingExternalRequests.filter(
        (req) => req.floor === currentFloor && req.direction === direction
      );

      if (currentFloorRequests.length > 0) {
        for (const req of currentFloorRequests) {
          const index = pendingExternalRequests.findIndex(
            (r) => r.floor === req.floor && r.direction === req.direction
          );
          if (index !== -1) {
            pendingExternalRequests.splice(index, 1);
          }
        }
      }
    }
  }

  selectFloor(selectedFloor: number): boolean {
    // is it a valid floor?
    if (selectedFloor < this.minFloor || selectedFloor > this.maxFloor) {
      console.log(`Invalid floor: ${selectedFloor}`);
      return false;
    }

    const currentFloor = this.control.getCurrentFloor();

    if (selectedFloor === currentFloor) {
      console.log(`Already at floor ${selectedFloor}`);
      return true;
    }

    this.destinationFloors.add(selectedFloor);
    console.log(`Added floor ${selectedFloor} to destinations`);

    if (this.control.getCurrentStatus() === ElevatorStatus.Idle) {
      this.moveToNextDestination();
    }

    return true;
  }

  private moveToNextDestination(): void {
    const currentFloor = this.control.getCurrentFloor();

    let nextUp = Number.MAX_SAFE_INTEGER;
    let nextDown = Number.MIN_SAFE_INTEGER;

    for (const floor of this.destinationFloors) {
      if (floor > currentFloor && floor < nextUp) {
        nextUp = floor;
      }
      if (floor < currentFloor && floor > nextDown) {
        nextDown = floor;
      }
    }

    if (nextUp !== Number.MAX_SAFE_INTEGER) {
      console.log(`Moving up to floor ${nextUp}`);
      this.control.startMoveUp();
    } else if (nextDown !== Number.MIN_SAFE_INTEGER) {
      console.log(`Moving down to floor ${nextDown}`);
      this.control.startMoveDown();
    } else {
      console.log("No destinations remaining");
    }
  }

  // after we stop, should the elevator continue?
  private continueJourney(): void {
    // if no more destinations, then no
    if (
      this.destinationFloors.size === 0 &&
      pendingExternalRequests.length === 0
    ) {
      console.log("No more destinations");
      return;
    }

    // if we're already moving, do nothing
    if (this.control.getCurrentStatus() === ElevatorStatus.Running) {
      return;
    }

    // otherwise, if stopped, commence moving to the next destination
    this.moveToNextDestination();
  }
}

// parameters of this theoretical elevator
const MIN_FLOOR = 0;
const MAX_FLOOR = 20;

// initial mock controls
const mockControl = new InternalControlMock(
  {
    shouldStopAtFloor: () => false,
    onStop: () => {},
  },
  MIN_FLOOR,
  MAX_FLOOR
);

const externalButton = new ExternalButton(mockControl, MIN_FLOOR, MAX_FLOOR);
const internalButtons = new InternalButtons(mockControl, MIN_FLOOR, MAX_FLOOR);

// once we have created the buttons, we can set up the respective event handlers
mockControl.eventHandlers = {
  shouldStopAtFloor: (floor: number, direction: ElevatorDirection) => {
    return internalButtons.shouldStopAtFloor(floor, direction);
  },
  onStop: (floor: number, direction: ElevatorDirection) => {
    internalButtons.onStop(floor, direction);
  },
};

async function testElevatorScenario() {
  console.log("Starting elevator scenario test...");

  // Elevator is idle at F0
  console.log("Elevator is idle at F0");

  // User A request DOWN from F9 => Elevator should starting to move up
  console.log("User A requests DOWN from F9");
  externalButton.press(9, ElevatorDirection.Down);

  // wait for elevator to move up to F3
  await wait(3);

  // User B request UP from F5 => Elevator should stop at F5
  console.log("User B requests UP from F5");
  externalButton.press(5, ElevatorDirection.Up);

  // wait for elevator to reach F5
  await wait(2);

  // User C request UP from F2 => Elevator should continue go upwards
  console.log("User C requests UP from F2");
  externalButton.press(2, ElevatorDirection.Up);

  // wait for elevator to reach F5 to stop and pick up User B
  await wait(3);

  // User B is in, User B request to F8 => Elevator should stop at F8
  console.log("User B enters and requests F8");
  internalButtons.selectFloor(8);

  // wait for elevator to reach F8 and drop off User B
  await wait(3);

  // User D request DOWN from F15 => Elevator should skip F9, and go to F15
  console.log("User D requests DOWN from F15");
  externalButton.press(15, ElevatorDirection.Down);

  // wait for elevator to reach F15 and pick up User D
  await wait(10);

  // User D is in, User D request to F11 => Elevator should stop at F11
  console.log("User D enters and requests F11");
  internalButtons.selectFloor(11);

  // wait for elevator to reach F11 and drop off User D
  await wait(4);

  // Elevator is moving down, currently stopping at F9, User A is in, User A request to F0
  console.log("User A enters and requests F0");
  internalButtons.selectFloor(0);

  // wait for elevator to reach F0 and drop off User A
  await wait(9);

  // Elevator is moving up, currently stopping at F2, User C is in
  console.log("User C enters elevator at F2");
  await wait(2);

  console.log("Elevator scenario test completed!");
}

// run the test
testElevatorScenario().catch(console.error);
