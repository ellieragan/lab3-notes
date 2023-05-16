import React from 'react';
import Note from './note';

function Notelist(props) {
  const navigation = props;
  const resList = Object.entries(navigation.notes).map(([id, note]) => {
    return (
      <Note key={id} note={note} updateNote={navigation.updateNote} id={id} handleDeleteClick={navigation.handleDeleteClick} handleAddNote={navigation.handleAddNote} />
    );
  });

  return (
    <div>
      {resList}
    </div>
  );
}
export default Notelist;
