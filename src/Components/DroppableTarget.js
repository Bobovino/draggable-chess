import React from 'react';
import { useDrop } from 'react-dnd';

const DroppableTarget = ({ onDrop, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'box',
    drop: onDrop,
    collect: monitor => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        backgroundColor: isOver ? 'lightgreen' : 'white',
        width: '200px',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default DroppableTarget;
