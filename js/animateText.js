// Function to animate the text with a typing effect
function typeWriter(element, words, index, interval) {
    const wordList = words.split(', ');
    let currentWord = wordList[index];
    let i = 0;
    
    function type() {
      if (i < currentWord.length) {
        element.textContent += currentWord.charAt(i);
        i++;
        setTimeout(type, 100); // Adjust the typing speed here (100ms per character)
      } else {
        // Move to the next word after a brief pause
        setTimeout(() => {
          index = (index + 1) % wordList.length;
          element.textContent = ''; // Clear the text before typing the next word
          typeWriter(element, words, index, interval);
        }, 1000); // Pause before typing the next word (1000ms)
      }
    }
    type();
  }
  
  // Trigger the animation when the page loads
  window.addEventListener('DOMContentLoaded', (event) => {
    const animatedTextElement = document.querySelector('.animated-text');
    const words = animatedTextElement.getAttribute('data-words');
    typeWriter(animatedTextElement, words, 0, 1000); // Start typing animation
  });
  