
document.addEventListener('DOMContentLoaded', (event) => {
    for (let i = 0; i < 5; i++) {
        createAPost(id = "posts", head = "ABCD", img = "./static/img/WallpaperStudio10-98927.jpg")
    }

    for (let i = 0; i < 5; i++) {
        createAPost(id = "posts", head = "6666", img = "./static/img/WallpaperStudio10-98927.jpg")
    }
})

function createAPost(id, head = "", img = "" ) {
    post_html = `
        <h2>${head}</h2>
        <img src="${img}" alt="" srcset="" style="width: 500px;">
    `   

    var new_post = document.createElement("div");
    new_post.innerHTML = post_html

    posts_node = document.getElementById(id)
    posts_node.appendChild(new_post)
}