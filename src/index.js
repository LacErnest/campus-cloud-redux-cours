import store from './store/store';
import { addNote } from './actions/actions';

// ------ HTML references ------
let notesUList = document.getElementById('notes');
let addNoteForm = document.getElementById('add-note');
let addNoteTitle = addNoteForm['title'];
let addNoteContent = addNoteForm['content'];

console.log('Avant:', store.getState());
store.dispatch(addNote('Un', 'Un contenu'));
store.dispatch(addNote('Deux', 'Deux contenu'));
store.dispatch(addNote('Trois', 'Trois contenu'));
console.log('Apres:', store.getState());

// ------ Redux ------
function deleteNote(index) {
  // console.log(index);
}

function renderNotes() {
  setDeleteNoteButtonsEventListeners();
}

// ------ Event Listeners ------
addNoteForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // console.log('Title:', addNoteTitle.value, 'Content:', addNoteContent.value);
});

function setDeleteNoteButtonsEventListeners() {
  let buttons = document.querySelectorAll('ul#notes li button');

  for (let button of buttons) {
    button.addEventListener('click', () => {
      deleteNote(button.dataset.id);
    });
  }
}

// ------ Render the initial Notes ------
renderNotes();