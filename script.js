window.onload = () => {
  const submitButton = document.getElementById("submit");
  const comment = document.getElementById("comment");
  const names = document.getElementById("names");

  submitButton.onclick = function () {
    var heading = document.createElement("p");
    var heading_text = document.createTextNode('\"' + comment.value + '\"' + ' By \"' + names.value + '\"');
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
  };
  
};
