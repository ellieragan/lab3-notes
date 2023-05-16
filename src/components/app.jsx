import React, { useState, useEffect } from 'react';
// import * as immer from 'immer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Notelist from './notelist';
import * as db from '../services/datastore';

function App(props) {
  const [notes, setNotes] = useState({});
  // const [incrementer, setIncrementer] = useState(0);

  useEffect(() => {
    db.onNotesValueChange((newNotes) => {
      setNotes(newNotes);
    });
  }, []);

  const updateNote = (id, updatedFields) => {
    db.updateNote(id, updatedFields);
    // setNotes(
    //   immer.produce((draftState) => {
    //     const state = draftState;
    //     state[id] = {
    //       ...draftState[id],
    //       ...updatedFields,
    //     };
    //   }),
    // );
  };

  const handleDeleteClick = (id) => {
    db.deleteNote(id);
    // const newNotes = { ...notes };
    // delete newNotes[id];
    // setNotes(newNotes);
  };

  const handleAddNote = () => {
    const newNote = {
      title: '',
      text: '',
      x: 0,
      y: 0,
      zIndex: 0,
    };

    db.createNote(newNote);

    // setNotes(
    //   immer.produce((draft) => {
    //     const deconstruct = draft;
    //     const id = `note${incrementer}`;
    //     deconstruct[id] = newNote;
    //   }),
    // );
    // setIncrementer(incrementer + 1);
  };
  if (notes) {
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
  } else {
    return (
      <div>
        <FontAwesomeIcon icon={faPlus} size="xl" onClick={handleAddNote} />
      </div>
    );
  }
}

export default App;
