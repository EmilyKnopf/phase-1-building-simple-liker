// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// start by defining and grabbing the "like glyph class" from the document 
const likerHearts = document.querySelectorAll('.like-glyphy')

//define event 

function likeEvent(event) {
  const heart = event.target

  //this targets the event then we need to call mimicServer
  mimicServerCall("http://mimicServer.example.com")
  .then(function() {
    // if the heart is full it is read but if it is empty it is blank - dont understand why a terrenary wont work here 
  if (heart.innerText === EMPTY_HEART) {
  heart.innerText === FULL_HEART
  heart.className = "activated-heart"
  } else {
    heart.innerText === EMPTY_HEART
    heart.className = ""
  }
  })

  .catch(function(error) {
    const modal = document.getElementById('modal')
    modal.className = ""
    modal.innerText = error
    // hides hidden modal after 3 seconds 
    setTimeout(() => modal.className = 'hidden', 3000)

  })

}
 
// add click event listener by iterating over 
for (const glyph of likerHearts ) {
  glyph.addEventListener('click', likeEvent)
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
