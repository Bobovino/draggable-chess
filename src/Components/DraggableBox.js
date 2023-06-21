import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableBox = ({ name }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'box', name },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
      }}
    >
      {name}
    </div>
  );
};

export default DraggableBox;
