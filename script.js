var links = [ "https://open.spotify.com/artist/7iEUKVcv42PUcIS696yadB?si=BwI1MjuqSD64ioaesjrT7g&dl_branch=1&nd=1",
              "https://www.instagram.com/nazzmusic/?hl=en",
              "https://twitter.com/nazzfuckingbest",
              "https://www.snapchat.com/add/nazzmuzic",
              "https://www.facebook.com/people/Nihar-Hodawdekar/100011063224584/"];

// window.open(links[0], "_blank");

function youtubeopen(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.countapi.xyz/hit/nazz/youtube");
  xhr.responseType = "json";
  xhr.send();
  // if(this.response == null){
    window.open("https://nazz.openinapp.co/nazz---narcos");
// }
}

setTimeout(()=>{
  document.getElementById("tips-div").style.opacity = 0}, 2000);

var divs = document.querySelectorAll(".socials");
console.log(divs);

divs.forEach(socials => {
  socials.addEventListener('click', event => {
    const id = socials.id;
    console.log(id);
    const index = id.substring(7) - 1; // Extract the index from the id
    window.open(links[index], '_blank'); // Open the link in a new tab
    console.log(links[index]); // Open the link in a new tab
  });
});

function views(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.countapi.xyz/hit/nazz/views");
  xhr.responseType = "json";
  xhr.send();
}

function youtube(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.countapi.xyz/hit/nazz/youtube");
  xhr.responseType = "json";
  xhr.send();
}

function instagram(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.countapi.xyz/hit/nazz/instagram");
  xhr.responseType = "json";
  xhr.send();
}

function spotify(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.countapi.xyz/hit/nazz/spotify");
  xhr.responseType = "json";
  xhr.send();
}

function twitter(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.countapi.xyz/hit/nazz/twitter");
  xhr.responseType = "json";
  xhr.send();
}

function snapchat(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.countapi.xyz/hit/nazz/snapchat");
  xhr.responseType = "json";
  xhr.send();
}

function facebook(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.countapi.xyz/hit/nazz/facebook");
  xhr.responseType = "json";
  xhr.send();
}

function yash(){
  window.open("https://classicaf.netlify.app");
}