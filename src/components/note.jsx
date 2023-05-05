// import { tsPropertySignature } from '@babel/types';
import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faTrashAlt, faPencil } from '@fortawesome/free-solid-svg-icons';

function Note(props) {
  console.log(props);
  const notestuff = props;
  const [isEditing, editingMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(notestuff.note.title);
  const [editedText, setEditedText] = useState(notestuff.note.text);

  const handleDrag = (e, data) => {
    notestuff.updateNote(notestuff.id, { x: data.x, y: data.y });
  };

  const handleDelete = () => {
    notestuff.handleDeleteClick(notestuff.id);
  };

  const handleEditClick = () => {
    editingMode(true);
  };

  const handleSaveClick = () => {
    notestuff.updateNote(notestuff.id, {
      title: editedTitle,
      text: editedText,
    });
    editingMode(false);
  };

  const handleTitleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setEditedText(event.target.value);
  };

  if (isEditing) {
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
          <div className="inputs">
            <input onChange={handleTitleChange} value={editedTitle} />
            <textarea onChange={handleTextChange} value={editedText} />
          </div>
          <FontAwesomeIcon icon={faSquareCheck} onClick={handleSaveClick} />
        </div>
      </Draggable>
    );
  } else {
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
          <FontAwesomeIcon className="edit" icon={faPencil} onClick={handleEditClick} />
          <FontAwesomeIcon className="delete" icon={faTrashAlt} onClick={handleDelete} />
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
}

export default Note;
