const wpUrl = 'http://206.189.86.170:8000/wp-json';
const contentWexperience = document.querySelector('div#wexperience');
const contentSkills = document.querySelector('div#stack');
let htmlOutputExp = '';
let htmlOutputStack = '';

fetch(wpUrl + '/wp/v2/pages/62')
  .then(response => response.json())
  .then(data => {
      htmlOutputExp += `
      <div class="content-container">
        ${data.content.rendered}
      </div>
      `;
      contentWexperience.innerHTML = htmlOutputExp;
  })
  .catch(err => {
    console.log(err)
  })
  ;

fetch(wpUrl + '/wp/v2/pages/70')
  .then(response => response.json())
  .then(data => {
      htmlOutputStack += `
      <div class="content-container">
        ${data.content.rendered}
      </div>
      `;
      contentSkills.innerHTML = htmlOutputStack;
  })
  .catch(err => {
    console.log(err)
  })
  ;