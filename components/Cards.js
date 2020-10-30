// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


axios
.get('https://lambda-times-api.herokuapp.com/articles')
.then((futureData)=>{
    const articleInfo = futureData.data;
    
})

function cardMaker(articleObj){
    const card = document.createElement('div');
        card.classList.add('card');
    const headline = document.createElement('div');
        card.appendChild(headline);
    const author = document.createElement('div');
        author.classList.add('author');
        card.appendChild(author);
    
    const imageContainer = document.createElement('div');
        imageContainer.classList.add('img-container');
        author.appendChild(imageContainer);
    const image = document.createElement('img');
        imageContainer.appendChild(image);

    const authorsName = document.createElement('span');
    author.appendChild(authorsName);


    card.addEventListener('click',()=>{
        console.log(headline);
    })

    headline.textContent = articleObj.headline;
    image.src = articleObj.authorPhoto;
    authorsName.textContent = articleObj.authorName;


    return card;
}

