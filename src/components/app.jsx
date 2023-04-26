import React, { useEffect, useState } from 'react';
import * as immer from 'immer';
import Notelist from './notelist';

function App(props) {
  // assuming our state starts with
  const [notes, setNotes] = useState({});

  const updateNote = (id, updatedFields) => {
    setNotes(
      immer.produce((draftState) => {
        const state = draftState;
        state[id] = { ...draftState.notes[id], ...updatedFields };
      }),
    );
  };

  useEffect(() => {
    setNotes({
      ...notes,

      note1: {
        title: 'notes #1',
        text: 'hello',
        x: 0,
        y: 0,
        zIndex: 0,
      },
      note2: {
        title: 'notes #2',
        text: 'hi',
        x: 0,
        y: 0,
        zIndex: 0,
      },
    });
  }, []);
  console.log(notes);
  return (
    <div>
      <Notelist notes={notes} updateNote={updateNote} />
    </div>
  );
}

export default App;
