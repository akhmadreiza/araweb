const wpUrl = 'http://localhost/wordpress/wp-json';
const contentContainer = document.querySelector('div.content-container');
let postDate;

console.log(contentContainer);

fetch(wpUrl + '/wp/v2/posts/1')
  .then(response => response.json())
  .then(data => {
      console.log(data.title.rendered);
      postDate = new Date(data.date).toDateString();
      contentContainer.innerHTML = `
            <h1>
                ${data.title.rendered}
            </h1>
            <h3>
                ${postDate}
            </h3>
            ${data.content.rendered}
        `;
  });