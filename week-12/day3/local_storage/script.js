let notes = getNotesFromLocal();
let input = document.getElementById('note')
let root = document.getElementById('root')

createNotes(notes)


function saveNote() {
    const note = input.value;
    notes.push(note)
    localStorage.setItem('memo',JSON.stringify(notes))
    createNotes(notes)
}

function createNotes(arr) {
    return root.innerHTML = arr.map(note => "<br>" + note)
}

function getNotesFromLocal() {
    return JSON.parse(localStorage.getItem('memo')) || []
}

function clearNote() {
    root.innerHTML = ""
    notes = []
    localStorage.clear()
}