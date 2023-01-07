function add(){
    document.addEventListener("click", function(event) {
    if (event.target.className === "pmp") {
        let card = event.target.parentNode.parentNode;
        console.log(card);
        let input = null;
        number = parseInt(card.childNodes[3].innerHTML);
        input = parseInt(card.childNodes[5].value);
        let newnum = number + input;
        console.log(newnum);
        let set = card.getAttribute('data-set');
        var xhr = new XMLHttpRequest();
        xhr.open("GET", `${set}${newnum}`, false);
        xhr.onload = function() {
        var dataresponse = this.response;
        card.childNodes[3].innerHTML = dataresponse.value;
        update();
    }
    xhr.send();
    }
  });
}

function sub(){
  document.addEventListener("click", function(event) {
  if (event.target.className === "pmm") {
      let card = event.target.parentNode.parentNode;
      console.log(card);
      let input = null;
      number = parseInt(card.childNodes[3].innerHTML);
      input = parseInt(card.childNodes[5].value);
      let newnum = number - input;
      console.log(newnum);
      let set = card.getAttribute('data-set');
      var xhr = new XMLHttpRequest();
      xhr.open("GET", `${set}${newnum}`, false);
      xhr.onload = function() {
      var dataresponse = this.response;
      card.childNodes[3].innerHTML = dataresponse.value;
      update();
  }
  xhr.send();
  }
});
}

add();
sub();
function hide(){
  document.body.style.display = "none";
  var pass = prompt("Enter the Password!");
  if(pass == "Nihar005"){
    document.body.style.display = "flex";
  }
  else{
    document.body.style.display = "none";
    hide();
  }
}

hide();


// update(){
// document.addEventListener("click", function(event) {
//   if (event.target.className === "card") {
//     // console.log(event.target);
//     var thr = new XMLHttpRequest();
//     thr.open("GET", event.target.getAttribute('data-get'));
//     thr.responseType = "json";
//     thr.onload = function() {
//       event.target.childNodes[3].innerHTML = `${this.response.value}`;
// }
//     thr.send();    
//   }
// });
// }
var cards = [];

for(i=0; i<7; i++){
  cards.push(document.querySelectorAll(".card")[i]);
}

function update(){
for(i=0; i<7; i++){
  // console.log(cards[i])
  // console.log(cards[i].getAttribute('data-get'));
  var thr = new XMLHttpRequest();
  thr.open("GET", cards[i].getAttribute('data-get') , false);
  thr.onload = function() {
    // this.responseType = "json";
    // console.log(this.response);
    var dataresponse = JSON.parse(this.response);
    // console.log(dataresponse);
    // console.log(i);
    // console.log(cards[i]);
    cards[i].childNodes[3].innerHTML = `${dataresponse.value}`;
}
  thr.send();
}
}

// console.log(document.querySelectorAll(".card")[0]);

// var xhr = new XMLHttpRequest();
//         xhr.open("GET", "https://api.countapi.xyz/get/nazz/views");
//     // xhr.open("GET", "https://api.countapi.xyz/hit/rmsmv.netlify.app/awesomeclick");
//         xhr.responseType = "json";
//         xhr.onload = function() {
//         document.getElementById("wvnum").innerHTML = `${this.response.value}`;
//     //     alert(`This button has been clicked ${this.response.value} times!`);
//     }
//     xhr.send();