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

const cardContainer = document.querySelector(".cards-container");
console.log(cardContainer);

function cardCreator(headlineTitles, imgUrl, authorNames) {
  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const headline = document.createElement("div");
  headline.classList.add("headline");

  const author = document.createElement("div");
  author.classList.add("author");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const authorImg = document.createElement("img");
  const authorName = document.createElement("span");

  divCard.appendChild(headline);
  divCard.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  imgContainer.appendChild(authorImg);

  headline.textContent = headlineTitles;
  authorImg.src = imgUrl;
  authorName.textContent = authorNames;

  divCard.addEventListener("click", (event) => {
    console.log(headline);
  });

  return divCard;
}

const articles = "https://lambda-times-api.herokuapp.com/articles";
axios
  .get(articles)
  .then((response) => {
    console.log(response);
    let articlesJS = response.data.articles.javascript;
    console.log(articlesJS);

    articlesJS.forEach((articlesJS) => {
      cardContainer.appendChild(
        cardCreator(
          articlesJS.headline,
          articlesJS.authorPhoto,
          articlesJS.authorName
        )
      );
    });

    let articlesBS = response.data.articles.bootstrap;
    console.log(articlesBS);
    articlesBS.forEach((articlesBS) => {
      cardContainer.appendChild(
        cardCreator(
          articlesBS.headline,
          articlesBS.authorPhoto,
          articlesBS.authorName
        )
      );
    });

    let articlesTech = response.data.articles.technology;
    console.log(articlesTech);
    articlesTech.forEach((articlesTech) => {
      cardContainer.appendChild(
        cardCreator(
          articlesTech.headline,
          articlesTech.authorPhoto,
          articlesTech.authorName
        )
      );
    });

    let articlesJquery = response.data.articles.jquery;
    console.log(articlesJquery);
    articlesJquery.forEach((articlesJquery) => {
      cardContainer.appendChild(
        cardCreator(
          articlesJquery.headline,
          articlesJquery.authorPhoto,
          articlesJquery.authorName
        )
      );
    });

    let articlesNode = response.data.articles.node;
    console.log(articlesNode);
    articlesNode.forEach((articlesNode) => {
      cardContainer.appendChild(
        cardCreator(
          articlesNode.headline,
          articlesNode.authorPhoto,
          articlesNode.authorName
        )
      );
    });
  })
  .catch((error) => {
    console.log("The data was not returned:", error);
  });
