import React, { useState, useEffect } from 'react';
import './InteractiveSection.css';

const InteractiveSection = () => {
  const [ballPosition, setBallPosition] = useState({ x: 0, y: 0 });
  const [pipelineSteps, setPipelineSteps] = useState(0);
  const [mazeLayout] = useState([
    [0, 1, 0, 0, 0], // 0: path, 1: wall, 2: end
    [0, 1, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 0, 1, 0],
    [0, 0, 0, 0, 2],
  ]);

  const handleKeyPress = (e) => {
    const { x, y } = ballPosition;
    let newPos = { x, y };

    switch (e.key) {
      case 'ArrowUp': newPos = { ...newPos, y: y - 1 }; break;
      case 'ArrowDown': newPos = { ...newPos, y: y + 1 }; break;
      case 'ArrowLeft': newPos = { ...newPos, x: x - 1 }; break;
      case 'ArrowRight': newPos = { ...newPos, x: x + 1 }; break;
      default: return;
    }

    if (
      newPos.y >= 0 && newPos.y < mazeLayout.length &&
      newPos.x >= 0 && newPos.x < mazeLayout[0].length &&
      mazeLayout[newPos.y][newPos.x] !== 1
    ) {
      setBallPosition(newPos);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [ballPosition, mazeLayout]);

  useEffect(() => {
    if (mazeLayout[ballPosition.y][ballPosition.x] === 2) {
      alert('Congratulations! You solved the maze!');
      setBallPosition({ x: 0, y: 0 }); // Reset ball position
    }
  }, [ballPosition, mazeLayout]);

  useEffect(() => {
    const pipelineInterval = setInterval(() => {
      setPipelineSteps(prev => (prev >= 7 ? 0 : prev + 1));
    }, 500);
    return () => clearInterval(pipelineInterval);
  }, []);

  return (
    <div className="interactive-section">
      <div className="maze-game">
        <h3>Code Maze Challenge</h3>
        <div className="maze-grid">
          {mazeLayout.map((row, rowIndex) => (
            <div key={rowIndex} className="maze-row">
              {row.map((cell, colIndex) => {
                const cellType =
                  cell === 1 ? 'wall' : cell === 2 ? 'end' : 'path';
                const hasBall =
                  ballPosition.x === colIndex && ballPosition.y === rowIndex;
                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`maze-cell ${cellType} ${
                      hasBall ? 'has-ball' : ''
                    }`}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <p>Use arrow keys to navigate the ball to the end!</p>
      </div>

      {/* <div className="pipeline-visualization">
        <h3>CI/CD Pipeline</h3>
        <div className="pipeline-grid">
          {[...Array(7)].map((_, i) => (
            <div 
              key={i} 
              className={`pipeline-step ${i < pipelineSteps ? 'active' : ''}`}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default InteractiveSection;