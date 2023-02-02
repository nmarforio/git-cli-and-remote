console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const newPost = document.createElement("article");
document.body.append(newPost);
newPost.classList.add("post");

const newContent = document.createElement("p");
const text1 = "Hello everyone! let's try so";
newPost.append(newContent);
newContent.textContent = text1;
newContent.classList.add("post__content");

const newFooter = document.createElement("footer");
newPost.append(newFooter);
newFooter.classList.add("post__footer");

const newSpan = document.createElement("span");
newFooter.append(newSpan);
const text2 = "@Nicole";
newSpan.textContent = text2;
newSpan.classList.add("post__username");

const newButton = document.createElement("button");
newFooter.append(newButton); // newFooter.append(newButton, newSpan) you can append more the one element
newButton.classList.add("post__button");
const text3 = "♥ Like";
newButton.textContent = text3;
newButton.addEventListener("click", handleLikeButtonClick);
