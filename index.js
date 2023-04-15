// Create logo
const logo = document.createElement("p");
logo.innerText = "medium alike";
document.body.appendChild(logo);
logo.classList.add('logo');

//Create header
const header = document.createElement("h1");
header.innerText = "Hello, world!";
document.body.appendChild(header);
header.classList.add('header');

// async function getTopStories() {
const getTopStories = async () => {
    const response = await fetch('https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=hc63TLTAw4QwqD4VEV4ceWl5Dr3fA3Uc')
    if(!response.ok && response.status==='404'){
        console.log('запрос составлен неправильно!')
    }
    const articles = await response.json();
    console.log(articles)
    }
      
getTopStories();