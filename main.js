// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//add hidden class to error modal
const errorModal = document.getElementById('modal')
errorModal.className = 'hidden'

//click event for empty heart
const likeGlyph = document.getElementsByClassName('like-glyph')
Array.from(likeGlyph).forEach(elem => {
    elem.addEventListener('click', (e) => {
      mimicServerCall()
        .then(data => {
          //debugger
          if(elem.textContent === EMPTY_HEART){
            elem.textContent = FULL_HEART
            elem.className = 'activated-heart'
          }else if (elem.textContent === FULL_HEART){
            elem.textContent = EMPTY_HEART
            elem.classList.remove('activated-heart')
          }
        })
        .catch(error => {
          //display error modal by removing .hidden class tag
          errorModal.classList.remove('hidden')
          errorModal.querySelector('#modal-message').textContent = error
          setTimeout(function(){errorModal.className = 'hidden'},3000)
        })
      //debugger
    })
  
}) 

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
