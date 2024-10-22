window.addEventListener('load', () => {
    let savedNote = localStorage.getItem('note');
    if (savedNote) {
        document.querySelector('#noteInput').value = savedNote;
    }
});

document.querySelector('#saveBtn').addEventListener('click', function() {
    let note = document.querySelector('#noteInput').value;
    localStorage.setItem('note', note);
    alert('Note saved!');
});