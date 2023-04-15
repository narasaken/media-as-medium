// Create logo
const logo = document.createElement("p");
logo.innerText = "medium alike";
document.body.appendChild(logo);
logo.classList.add('logo');

//Create the picture
const arrow = document.createElement("div");
arrow.textContent = "←";
arrow.classList.add("arrow");
document.body.appendChild(arrow);

arrow.addEventListener('click', () => {
    window.location.href = './index.html';
});

// Retrieve the first article
async function getFirstArticle() {
  try {
    const response = await fetch('https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=hc63TLTAw4QwqD4VEV4ceWl5Dr3fA3Uc');
    if (!response.ok) {
      console.log('Error!');
    }
    const data = await response.json();
    const firstArticle = data.results[0];
    return firstArticle;
  } catch (error) {
    console.log(error);
  }
}

// Display the first article on the second page
async function displayFirstArticle() {
  const firstArticle = await getFirstArticle();
  // Create author
  const author2 = document.createElement('p');
  author2.innerText = firstArticle.byline;
  document.body.appendChild(author2);
  author2.classList.add('author2');
  // Create date
  const date2 = document.createElement('p');
  date2.innerText = firstArticle.published_date;
  document.body.appendChild(date2);
  date2.classList.add('date2');
  // Create header
  const header = document.createElement('p');
  header.innerText = firstArticle.title;
  document.body.appendChild(header);
  header.classList.add('header2');
  // Create article content

  const articleImage = document.createElement('img');
  articleImage.src = firstArticle.media[0]['media-metadata'][0].url; 
  document.body.appendChild(articleImage);
  articleImage.classList.add('article-img2');

  const subheader = document.createElement('p');
  document.body.appendChild(subheader);
  subheader.classList.add('subheader');
  subheader.innerText = 'Subheader';

  const articleDescription = document.createElement('p');
  articleDescription.innerText = firstArticle.abstract;
  document.body.appendChild(articleDescription);
  articleDescription.classList.add('description2');

  // Create footer
  const footer = document.createElement('p');
  document.body.appendChild(footer);
  footer.classList.add('footer-label');
  footer.innerText = 'Credits: photos from Unsplash.com, icons from Icons8, graphics from craftwork.design.';

  const footer2 = document.createElement('p');
  document.body.appendChild(footer2);
  footer2.classList.add('footer-label');
  footer2.innerText = 'Made with ✨❤️ at nFactorial in 2022.';
}

displayFirstArticle();