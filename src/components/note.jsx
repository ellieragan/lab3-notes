// import { tsPropertySignature } from '@babel/types';
import React, { Draggable } from 'react';

function handleDrag() {
  console.log('hi');
}

function Note(props) {
  console.log(props);
  const notestuff = props;
  return (
    <Draggable
      handle=".note"
      grid={[25, 25]}
      defaultPosition={{ x: 20, y: 20 }}
      position={{
        x: notestuff.note.x,
        y: notestuff.note.y,
        width: 200,
        height: 200,
      }}
      // onStart={handleStartDrag}
      onDrag={handleDrag}
      // onStop={handleStopDrag}
    >
      <div className="note">
        <div className="title">
          {notestuff.note.title}
        </div>
        <div className="text">
          {notestuff.note.text}
        </div>
      </div>
    </Draggable>
  );
}

export default Note;
