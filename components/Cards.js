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

import axios from 'axios'

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(res => {
    console.log(res.data)
    let articles = Object.values(res.data.articles)
    articles.forEach((item) => {
        item.forEach((cards) => {
        cardsContainer.appendChild(articleMaker(cards))
        })
    })
})
.catch(error => {
    console.log(error)
})

const cardsContainer = document.querySelector('.cards-container')

function articleMaker(obj){
//declaring vars
const card = document.createElement('div')
const headline = document.createElement('div')
const author = document.createElement('author')
const imageContainer = document.createElement('div')
const image = document.createElement('img')
const authorName = document.createElement('span')

//attaching classes
card.classList.add('card')
headline.classList.add('headline')
author.classList.add('author')
imageContainer.classList.add('img-container')

//sourcing
headline.textContent = obj.headline
image.src = obj.authorPhoto
authorName.textContent = `By ${obj.authorName}`

//appending children to parents
cardsContainer.append(card)
card.appendChild(headline)
card.appendChild(author)
author.appendChild(imageContainer)
imageContainer.appendChild(image)
author.appendChild(authorName)

//event listener
card.addEventListener('click', () => { 
    console.log(obj.headline)
})
return card
}//articleMaker