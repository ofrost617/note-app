// (function(exports) {
//   function Note() {
//     this.posts = 5;
//   };
//   exports.Note = Note;
// })(this);
// var Note = function(string){
//  this.note = string;
// };
// function makeNote(string) {
//  var note = new Note(string)
//  return note;
// };
var btn = document.getElementById("btn");
var saved = []
btn.addEventListener("click", function() {
    var newNote = document.getElementById("noteForm").value;
    saved.push(newNote)
    // renderHTML
    console.log(saved);
});
var listNote = document.getElementById("listofNotes")
function renderHTML() {
    listNote.insertAdjacentHTML("afterend", newNote);
}