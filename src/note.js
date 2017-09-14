
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
var expansion = document.getElementById("expansion")
var linkPreviews = document.getElementById("linkPreviews")

var btn = document.getElementById("btn");
var saved = []
btn.addEventListener("click", function() {
    var newNote = document.getElementById("noteForm").value;
    saved.push(newNote)
    renderHTML(saved);
});

function renderHTML() {
    for (i=0; i<saved.length; i++) {
    var displayedList = "<p>" + saved[i] + "</p>";
    var previewList = "<p>" + displayedList.substring(0, 23) + "</p>";
    var linkList = "<li><a href=#"+i+">" + saved[i].substring(0, 20)+ "</a></li>"

    console.log(previewList)
    }  

    // listofNotes.insertAdjacentHTML("afterend", previewList);
    linkPreviews.insertAdjacentHTML("afterend", linkList)

}