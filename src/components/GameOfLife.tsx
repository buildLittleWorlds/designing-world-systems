'use client';

import React, { useState, useCallback, useRef } from 'react';
const numRows = 25;
const numCols = 25;

const generateEmptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

const GameOfLife: React.FC = () => {
  const [grid, setGrid] = useState(() => generateEmptyGrid());
  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setGrid((g) => {
      const newGrid = g.map((row, i) =>
        row.map((cell, j) => {
          let neighbors = 0;
          for (let I = -1; I < 2; I++) {
            for (let J = -1; J < 2; J++) {
              if (I === 0 && J === 0) continue;
              const x = i + I;
              const y = j + J;
              if (x >= 0 && x < numRows && y >= 0 && y < numCols) {
                neighbors += g[x][y];
              }
            }
          }

          if (neighbors < 2 || neighbors > 3) {
            return 0;
          } else if (cell === 0 && neighbors === 3) {
            return 1;
          } else {
            return cell;
          }
        })
      );
      return newGrid;
    });

    setTimeout(runSimulation, 100);
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setRunning(!running);
          if (!running) {
            runningRef.current = true;
            runSimulation();
          }
        }}
      >
        {running ? 'Stop' : 'Start'}
      </button>
      <button
        onClick={() => {
          setGrid(generateEmptyGrid());
        }}
      >
        Clear
      </button>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${numCols}, 20px)`
      }}>
        {grid.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              onClick={() => {
                const newGrid = [...grid];
                newGrid[i][j] = grid[i][j] ? 0 : 1;
                setGrid(newGrid);
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][j] ? 'black' : undefined,
                border: 'solid 1px black'
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GameOfLife;