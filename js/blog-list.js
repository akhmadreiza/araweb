const wpUrl = 'http://localhost/wordpress/wp-json';
const content = document.querySelector('div.content-right');
let postDate;
let strExcerpt;
let subStrExcerpt;
let htmlOutput = ''; //init with empty string to prevent undefined value when concatenate

fetch(wpUrl + '/wp/v2/posts')
  .then(response => response.json())
  .then(data => {
      data.forEach(element => {
          console.log(element.title.rendered)
          postDate = new Date(element.date).toDateString();
          strExcerpt = element.excerpt.rendered;
          let endIndex = strExcerpt.length;
          if (endIndex < 200) {
            subStrExcerpt = strExcerpt.substring(0,strExcerpt.length);
          } else {
            subStrExcerpt = strExcerpt.substring(0,200);
          }
          htmlOutput += `<div class="content-container">
                <h1>
                    ${element.title.rendered}
                </h1>
                <h3>
                    ${postDate}
                </h3>
                ${subStrExcerpt} <br> <a href="./blog.html?id=${element.id}">Selengkapnya</a>
            </div>
            `;
      });
      content.innerHTML = htmlOutput;
  })
  .catch(err => {
    console.log(err)
  })
  ;