const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

const result = document.getElementById('result');

const sound = document.getElementById('sound');

const btn = document.getElementById('search-btn');


btn.addEventListener('click', () => {
  let wordInput = document.getElementById('word-input').value;
  
  fetch(`${url}${wordInput}`)
  .then((response) => response.json())
  .then((data) => {
    result.innerHTML = `<div class="word">
        <h3>${wordInput}</h3>
        
      </div>
      
      <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>/${data[0].phonetic}/</p>
      </div>
      
      <p class="word-meaning">
        ${data[0].meanings[0].definitions[0].definition}
      </p>
      <p class="word-example">
        ${data[0].meanings[0].definitions[0].example || ""}
      </p>`;
      sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
  })
  .catch(() => {
    result.innerHTML = `<h2 class="error">word not found</h2>`;
  });
});

function playSound() {
  sound.play();
}


