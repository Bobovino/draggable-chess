import React from 'react';
import { useDrop } from 'react-dnd';

const ChessCell = ({ children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'chessPiece',
    drop: () => ({ name: 'ChessCell' }),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: isOver ? 'lightgreen' : 'white',
      }}
    >
      {children}
    </div>
  );
};

export default ChessCell;
