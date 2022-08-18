const h1 = document.querySelector("#main-title");
const toggleBtn = document.querySelector("button");
const sec = document.querySelector('section')

h1.textContent = "some new title!";
h1.style.color = "yellow";
h1.style.backgroundColor = "red";

const li = document.querySelector("li:last-of-type");
li.textContent = li.textContent + "(added!)";

const listElements = document.getElementsByTagName("li");
for (const listitemEl of listElements) {
  console.log(listitemEl);
}

toggleBtn.addEventListener("click", () => {
  // if(sec.className === 'red-bg visible'){
  //   sec.className = 'red-bg invisible'
  // }else{
  //   sec.className = 'red-bg visible'
  // }

  sec.classList.toggle('invisible')  //short
});
