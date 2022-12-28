let arr = getNotesFromLocal();
let input = document.getElementById('note')
let root = document.getElementById('root')

function saveNote() {
    const note = input.value
    arr.push(note)
    localStorage.setItem('notes', JSON.stringify(arr))
    createNotes(arr)
}

function createNotes(arr) {
    root.innerHTML = arr.map(note => "<br>" + note)
}

function getNotesFromLocal() {
    return JSON.parse(localStorage.getItem('notes'))
}

createNotes(arr)