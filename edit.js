const updateBlog = () => {
    let obj = JSON.parse(localStorage.getItem('blogs'));
    let blogIndex = localStorage.getItem('selectedBlog');
    let newObj = {
        title: document.getElementById('title').value,
        content: document.getElementById('content').value
    }
    obj[blogIndex] = newObj;
    try {
        localStorage.setItem("blogs", JSON.stringify(obj));
        alert('success');
    } catch (error) {
        alert(error);
    }

}

const editBlogPage = () => {
    let obj = JSON.parse(localStorage.getItem('blogs'));
    let blogIndex = localStorage.getItem('selectedBlog');

    document.getElementById('title').value = obj[blogIndex].title;
    document.getElementById('content').value = obj[blogIndex].content;
}

const deleteBlog = () => {
    let obj = JSON.parse(localStorage.getItem('blogs'));
    let blogIndex = localStorage.getItem('selectedBlog');

    obj.splice(blogIndex, 1);
    localStorage.setItem("blogs", JSON.stringify(obj));
    window.location.href = "index.html";
}

editBlogPage();