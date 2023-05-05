import React, { useState } from 'react';
import * as immer from 'immer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Notelist from './notelist';

function App(props) {
  // assuming our state starts with
  const [notes, setNotes] = useState({});
  const [incrementer, setIncrementer] = useState(0);

  const updateNote = (id, updatedFields) => {
    setNotes(
      immer.produce((draftState) => {
        const state = draftState;
        state[id] = {
          ...draftState[id],
          ...updatedFields,
        };
      }),
    );
  };

  const handleDeleteClick = (id) => {
    const newNotes = { ...notes };
    delete newNotes[id];
    setNotes(newNotes);
  };

  const handleAddNote = () => {
    const newNote = {
      title: '',
      text: '',
      x: 0,
      y: 0,
      zIndex: 0,
    };

    setNotes(
      immer.produce((draft) => {
        const deconstruct = draft;
        const id = `note${incrementer}`;
        deconstruct[id] = newNote;
      }),
    );

    //  I previously did not use a setIncrementer function + useState for my incrementer and was
    //  getting errors, asked chatgpt to explain the error and it provided this suggested fix:
    setIncrementer(incrementer + 1);
  };

  // useEffect(() => {
  //   setNotes({
  //     ...notes,

  //     note1: {
  //       title: 'notes #1',
  //       text: 'hello',
  //       x: 0,
  //       y: 0,
  //       zIndex: 0,
  //     },
  //     note2: {
  //       title: 'notes #2',
  //       text: 'hi',
  //       x: 0,
  //       y: 0,
  //       zIndex: 0,
  //     },
  //   });
  // }, []);
  // console.log(notes);

  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faPlus} size="xl" onClick={handleAddNote} />
      </div>
      <div>
        <Notelist notes={notes} updateNote={updateNote} handleDeleteClick={handleDeleteClick} handleAddNote={handleAddNote} />
      </div>
    </div>
  );
}

export default App;
