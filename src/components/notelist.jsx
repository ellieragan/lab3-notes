import React from 'react';
import Note from './note';

function Notelist(props) {
  // console.log(props.notes);
  const navigation = props;
  // console.log(navigation);
  const resList = Object.entries(navigation.notes).map(([id, note]) => {
    return (
      <Note key={id} note={note} updateNote={navigation.updateNote} />
    );
  });

  return (
    <div>
      {resList}
    </div>
  );
}
export default Notelist;
