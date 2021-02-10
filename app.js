function storageCheck() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.blogs) {
            //print data
            let obj = JSON.parse(localStorage.getItem('blogs'));
            console.log(obj);
            if (document.getElementById('bloglist')) {
                obj.forEach(e => {
                    showBlogs(e);
                });
            }
        } else {
            let blogs = [];
            localStorage.setItem("blogs", JSON.stringify(blogs));
            let selectedBlog = -1;
            localStorage.setItem("selectedBlog", selectedBlog);
        }
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

const addBlog = () => {
    //get obj from localStorage and save new data
    let obj = JSON.parse(localStorage.getItem('blogs'));
    let newObj = {
        title: document.getElementById('title').value,
        content: document.getElementById('content').value
    }
    obj.push(newObj);
    try {
        localStorage.setItem("blogs", JSON.stringify(obj));
        alert('success');
    } catch (error) {
        alert(error);
    }
}

const showBlogs = obj => {
    //print blogs from json
    let blogList = document.getElementById('bloglist');
    let lastBlog = document.createElement('li');

    blogList.appendChild(lastBlog);

    let blogLink = document.createElement('button');

    blogLink.innerHTML = obj.title;
    blogLink.onClick = 'pickBlog()';
    //store the clicked index to localstorage and use it to delete and delete
    blogLink.addEventListener('click', function() {
        let list = this.parentNode;
        let nodes = Array.from(blogList.children);
        let index = nodes.indexOf(list);

        let blogIndex = localStorage.getItem('selectedBlog');
        blogIndex = index;

        localStorage.setItem("selectedBlog", blogIndex);
        window.location.href = "editBlog.html";
    })

    lastBlog.appendChild(blogLink);
}





storageCheck();