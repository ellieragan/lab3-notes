import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
// import { initializeApp } from 'firebase/app';

// Set the configuration for your app
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAEle6H3-U7VcCmSHIH5TCcvo0M1pX5h6E',
  authDomain: 'lab3-f249b.firebaseapp.com',
  databaseURL: 'https://lab3-f249b-default-rtdb.firebaseio.com',
  projectId: 'lab3-f249b',
  storageBucket: 'lab3-f249b.appspot.com',
  messagingSenderId: '550860103859',
  appId: '1:550860103859:web:86065181925c4a31f590c6',
  measurementId: 'G-EFD90WWY5M',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export const createNote = async (note) => {
  await database.ref('notes').push(note);
};

export const updateNote = async (id, updates) => {
  await database.ref('notes').child(`${id}`).update(updates);
};

export const deleteNote = async (id) => {
  await database.ref('notes').child(`${id}`).remove();
};

export function onNotesValueChange(callback) {
  database.ref('notes').on('value', (snapshot) => {
    const newNoteState = snapshot.val();
    callback(newNoteState);
  });
}
