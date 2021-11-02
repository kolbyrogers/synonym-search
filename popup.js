var btn = document.createElement("Button"); // Create a <button> element
btn.innerHTML = "Search"; // Insert text
document.querySelector("#main").appendChild(btn);

btn.onclick = function () {
  var search = document.querySelector("#search").value;
  console.log(search);
  const url = "https://www.thesaurus.com/browse/";
  var newUrl = url + search;
  var win = window.open(newUrl);
  win.focus;
};
