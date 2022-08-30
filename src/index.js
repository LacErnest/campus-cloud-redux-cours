import store from './store/store';
import { addNote, removeNote } from './actions/actions';

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
  console.log(index);
  store.dispatch(removeNote(index));
}

function renderNotes() {
  let notes = store.getState().notes;

  notesUList.innerHTML = '';
  notes.map((note, index) => {
    let noteItem = `
      <li>
        <b>${note.title}</b>
        <button data-id="${index}">X</button>
        <br />
        <span>${note.content}</span>
      </li>
    `;
    notesUList.innerHTML += noteItem;
  });

  setDeleteNoteButtonsEventListeners();
}

// ------ Event Listeners ------
addNoteForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let title = addNoteTitle.value;
  let content = addNoteContent.value;
  store.dispatch(addNote(title, content));
});

function setDeleteNoteButtonsEventListeners() {
  let buttons = document.querySelectorAll('ul#notes li button');

  for (let button of buttons) {
    button.addEventListener('click', () => {
      deleteNote(button.dataset.id);
    });
  }
}

store.subscribe(() => {
  renderNotes();
});

// ------ Render the initial Notes ------
renderNotes();