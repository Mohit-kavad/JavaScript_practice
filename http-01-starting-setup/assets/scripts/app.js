const listElement = document.querySelector(".posts");
const postTemplet = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector('ul');


function sendHttpRequest(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.onload = function () {
      resolve(JSON.parse(xhr.response));
      // console.log(xhr.response); //---> we will get only JSON data
    };

    xhr.send(JSON.stringify(data));
  });
  return promise;
}


async function fetchPost() {
  const responseData = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );

  const listOfPosts = responseData;
  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplet.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    postEl.querySelector('li').id = post.id
    listElement.append(postEl);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };
  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}



var clicked = false;
fetchButton.addEventListener("click", ()=>{
    if (!clicked) {
        fetchPost();
        clicked = true; 
    }else{
        return alert('somthing is done')
    }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entereditle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;

    createPost(entereditle,enteredContent)
});

postList.addEventListener('click',event =>{
    if (event.target.tagName === 'BUTTON') {
        const postId = event.target.closest('li').id;
        console.log(postId);
        sendHttpRequest('DELETE',`https://jsonplaceholder.typicode.com/posts/${postId}`)

    }
})