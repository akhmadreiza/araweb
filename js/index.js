const wpUrl = 'https://akhmadreiza.com/wp-json';
const contentWexperience = document.querySelector('div#wexperience');
const contentSkills = document.querySelector('div#stack');
const contentRecentWork1 = document.querySelector('div.projectsContainer')
let htmlOutputExp = '';
let htmlOutputStack = '';
let htmlOutputRecentWork = '';

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

fetch(wpUrl + '/wp/v2/pages?slug=recent-work-1')
  .then(response => response.json())
  .then(dataList => {
      data = dataList[0]
      htmlOutputRecentWork += `
      <div class="content-container">
        ${data.content.rendered}
      </div>
      `;
      contentRecentWork1.innerHTML = htmlOutputRecentWork;
  })
  .catch(err => {
    console.log(err)
  })
  ;