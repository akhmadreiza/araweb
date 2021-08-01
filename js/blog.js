const params = new URLSearchParams(window.location.search)
const postId = params.get('id')
const postSlug = params.get('slug')
const wpUrl = 'http://localhost:8000/wp-json';
const contentContainer = document.querySelector('div.content-container');
const hrFooter = document.querySelector('.hr-footer');
const pFooter = document.querySelector('.p-footer');

let postDate;

if (!postId && !postSlug) {
    contentContainer.innerHTML = `
                <h1>
                    Halaman Tidak Ditemukan.
                </h1>
                <p>Telah terjadi kesalahan pada saat permintaan halaman sehingga tidak ditemukan.
                <a href="./index.html">Kembali</a>
                </p>
            `;
}

if (postSlug) {
    fetch(wpUrl + '/wp/v2/posts?slug=' + postSlug)
    .then(response => response.json())
    .then(postList => {
        if (postList.length > 1) throw "slug search return more than one posts";
        data = postList[0]
        postDate = new Date(data.date).toDateString();
        hrFooter.style.display = 'block'
        pFooter.style.display = 'block'
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
        console.log(err)
        hrFooter.style.display = 'block'
        pFooter.style.display = 'block'
        contentContainer.innerHTML = `
                <h1>
                    Halaman Tidak Ditemukan.
                </h1>
                <p>Telah terjadi kesalahan pada saat permintaan halaman sehingga tidak ditemukan.
                <a href="./index.html">Kembali</a>
                </p>
            `;
    });
} else if (postId) {
    fetch(wpUrl + '/wp/v2/posts/' + postId)
    .then(response => response.json())
    .then(data => {
        postDate = new Date(data.date).toDateString();
        hrFooter.style.display = 'block'
        pFooter.style.display = 'block'
        contentContainer.innerHTML = `
                <hr>
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
        hrFooter.style.display = 'block'
        pFooter.style.display = 'block'
        contentContainer.innerHTML = `
                <h1>
                    Halaman Tidak Ditemukan.
                </h1>
                <p>Telah terjadi kesalahan pada saat permintaan halaman sehingga tidak ditemukan.
                <a href="./index.html">Kembali</a>
                </p>
            `;
    });
}
