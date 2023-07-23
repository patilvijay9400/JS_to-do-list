// first of all we are going to create close btn and append it to each list

var myList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myList.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00d7");

  span.classList = "close";
  span.appendChild(txt);
  myList[i].appendChild(span);
}

// then onclick of close btn hide current list

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Now add checked symbol on clicking of list

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  },
  false
);

// create new mylist and append it with new li

function newElement() {
  var newList = document.createElement("li");
  var inputValue = document.getElementById("inputValue").value;

  var intpuTxt = document.createTextNode(inputValue);
  newList.appendChild(intpuTxt);

  if (inputValue === "") {
    alert("Please enter title for to do list");
  } else {
    document.getElementById("myUL").appendChild(newList);
  }
  document.getElementById("inputValue").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  newList.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
