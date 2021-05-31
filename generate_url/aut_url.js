

var tag = document.getElementById("tag");
 var val = tag.replace(/ /g,"_");

var url = window.location+val;
 tag.nextSibling.innerHTML = url;

// ===============================================

/ /g     this regular expresion is used to select (one space or more space)

/\s\./  this regular expresion is used to select (one space or more space with one . or more .......)


