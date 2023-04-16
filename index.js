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

//Create topics placeholder
const topics = document.createElement("div");
document.body.appendChild(topics);
topics.classList.add('popular-topics'); 

// async function getTopStories() 
// url = 'https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=hc63TLTAw4QwqD4VEV4ceWl5Dr3fA3Uc';

async function getTopStories() {
    try {
        const response = await fetch('https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=hc63TLTAw4QwqD4VEV4ceWl5Dr3fA3Uc');
        if (!response.ok) {
            console.log('Error!')
        }
        const data = await response.json();
        console.log(data);
        data.results.forEach(item => {
            topics.innerHTML += `
            <div class="topics">
                <div class='info-top'>
                    <p class='author'>
                        ${item.byline}
                    </p>
                    <p class='published-date'>
                        ${item.published_date}
                    </p>
                </div>
                <div class="article-content">
                    <p id="topic-name">
                        ${item.title}
                    </p>
                    <p class='article'>
                        ${item.abstract}
                    </p>
                    <p class='article-tags'>
                        ${item.section}
                    </p>
                    <p class='article-description'>
                        Selected for you
                    </p>
                </div>
                <div class="image-container">
                    <img class='article-img' src='${item.media[0]['media-metadata'][0].url}'>  
                </div>  
                <hr>     
            </div> 
            `
        });
    }catch (error) {
        console.log(error);
    }
}
      
getTopStories();

const topicOne = document.getElementsByClassName('popular-topics')[0];
topicOne.addEventListener('click', () => {
    window.location.href = './page2.html';
});

//Create footer
const footer = document.createElement("p");
document.body.appendChild(footer);
footer.classList.add('footer-label'); 
footer.innerText = "Credits: photos from Unsplash.com, icons from Icons8, graphics from craftwork.design.";

const footer2 = document.createElement("p");
document.body.appendChild(footer2);
footer2.classList.add('footer-label'); 
footer2.innerText = "Made with ✨❤️ at nFactorial in 2022.";