const buttons = document.querySelectorAll('button');
const form = document.querySelector('form')
// const buttonClickHendler = () =>{
//     alert('button was clicked!')
// }

const buttonClickHendler = event =>{
    // event.target.disabled = true;
    console.log(event);
}


const anotherButtonClickHendler = () => {
    console.log('button clicked');
}

// button.onclick = buttonClickHendler;      //--->> this method will overwrite the value 
// button.onclick = anotherButtonClickHendler; 


// best for use 

// button.addEventListener('click',buttonClickHendler)  

// setTimeout(()=>{
//     button.removeEventListener('click',buttonClickHendler)
//     console.log('removed');
// },5000) //after 5 seconsd event will remove

// buttons.forEach(btn =>{
//     btn.addEventListener('mouseenter',buttonClickHendler)
// })

form.addEventListener('submit',event => {
    event.preventDefault()
    console.log(event);
})