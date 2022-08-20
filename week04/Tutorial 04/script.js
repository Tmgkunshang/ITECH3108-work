
const button = document.querySelector('button');
const textarea = document.getElementById('json_text');
const output = document.getElementById('output');

button.addEventListener('click', function() {
  output.value = "";
  let jsonObj;

  try {
    jsonObj = JSON.parse(textarea.value);
  } catch(e) {
    output.value = "Error: " + e.message;
    return;
  }
  
  output.value += "Type: " + typeof(jsonObj) + "\n";

  // TODO: Write some queries here
  //importing local json file
  fetch("./food.json")
.then(response => {
   return response.json();
})
.then(products => console.log(products));
  

});