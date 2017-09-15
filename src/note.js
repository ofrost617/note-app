var listofNotes = document.getElementById("listOfNotes")
var expansion = document.getElementById("expansion")

var btn = document.getElementById("btn");
var saved = []
btn.addEventListener("click", function() {
    var newNote = document.getElementById("noteForm").value;
    saved.push(newNote)
    renderHTML(saved);
});

function renderHTML() {
    for (i = 0; i < saved.length; i++) {
        var element = saved[i]
        var displayedList = "<p>" + saved[i] + "</p>";
        var previewList = '<a href = # onclick ="show(' + i + ')">' + saved[i].substring(0, 20) + "</a><br><br>";
    }
    linkPreviews.insertAdjacentHTML("afterend", previewList)
    console.log(element)
}

function show(value) {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "hidden");
    document.body.appendChild(x);
    document.getElementById("expansion").innerHTML = saved[value]
}