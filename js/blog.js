const params = new URLSearchParams(window.location.search)
const postId = params.get('id')
console.log(postId)
if (!postId) {
    window.location.href = 'index.html';
}
const wpUrl = 'http://localhost/wordpress/wp-json';
const contentContainer = document.querySelector('div.content-container');
let postDate;

fetch(wpUrl + '/wp/v2/posts/' + postId)
  .then(response => response.json())
  .then(data => {
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
  })
  .catch(err => {
    contentContainer.innerHTML = `
            <h1>
                Halaman Tidak Ditemukan.
            </h1>
            <p>Telah terjadi kesalahan pada saat permintaan halaman sehingga tidak ditemukan.
            <a href="./index.html">Kembali</a>
            </p>
            <hr>
        `;
  })
  ;