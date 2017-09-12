// (function(exports) {
//   function Note() {
//     this.posts = 5;
//   };

//   exports.Note = Note;
// })(this); 

// var Note = {
//   "note": text
// };

var notes = []

var Note = function(string) {
  
  this.note = string

};


function makeNote(string) {
  var note = new Note(string)
  notes << note

  return note
};

