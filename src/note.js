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
var listofNotes = document.getElementById("listOfNotes")

var btn = document.getElementById("btn");
var saved = []
btn.addEventListener("click", function() {
    var newNote = document.getElementById("noteForm").value;
    saved.push(newNote)
    renderHTML(saved);
    // console.log(saved[2])
    // console.log(saved);
});

function renderHTML() {

    for (i = 0; i < saved.length; i++) {
    var displayedList = saved[i] + "<br><br>";
    }

listofNotes.insertAdjacentHTML("afterend", displayedList );
    
}  
