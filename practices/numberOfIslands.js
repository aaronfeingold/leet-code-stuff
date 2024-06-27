/**
 * @param {character[][]} grid
 * @return {number}
 */

// definition of a new island is land that we have no yet visited
function numIslands(grid) {
    // establish the base case...
    if (!grid || !grid.length) {
        return 0;
    }

    // establish a loop
    const rows = grid.length;
    const columns = grid[0].length;
    const visitedMatrix = Array.from({length: rows}, () => Array(columns).fill(false));
    let islandCount = 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            // meets definition of a new island, then lets visit its surroundings so we don't count the surround land as a new island
            if (grid[row][col] === '1' && !visitedMatrix[row][col]) {
                bfs(grid, visitedMatrix, row, col);
                islandCount ++;
            }
        }
    }

    return islandCount;
}

// directions to assess:
// same row -> previous and next columns (if exists)
// same column -> previous and next row (if exists)

const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];

function bfs(grid, visitedMatrix, row, col) {
    const queue = [[row, col]];

    while (queue.length) {
        // dequeue and assess
        let [currRow, currCol] = queue.shift();
        for (let i = 0; i < directions.length; i++) {
            const surrRow = currRow + directions[i][0];
            const surrCol = currCol + directions[i][1];
            // assess conditions
            // first, does the coordinate exist in the grid
            // second, is it an island?
            // and last, has this island not yet been visited?
            if (grid[surrRow] !== undefined &&  grid[surrRow][currCol] !== undefined && grid[surrRow][surrCol] === '1' && !visitedMatrix[surrRow][surrCol]) {
                queue.push([surrRow, surrCol]);
                visitedMatrix[surrRow][surrCol] = true;
            }
        }
    }
}
