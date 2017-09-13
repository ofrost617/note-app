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

	for (i=0; i<saved.length; i++) {
		var displayedList = "<li><a href>" + saved[i] + "</a></li>";
		var previewList = displayedList.substring(0, 32) + "...";
		if (displayedList.length >= 30) {
			previewList;
		} else {
			displayedList;
		}
	}

	listofNotes.insertAdjacentHTML("afterend", previewList);   
}  
