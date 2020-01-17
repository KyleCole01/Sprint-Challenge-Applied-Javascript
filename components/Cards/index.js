// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const URL = "https://lambda-times-backend.herokuapp.com/articles";

requestGet(URL);

    function createCard(card){
        const outerDiv = document.createElement("div");
        outerDiv.className = "card";

        const header = document.createElement("div");
        header.textContent = card.headline;
        header.className = "headline";
        outerDiv.append(header);

        var author = document.createElement("div"); 
    author.classList.add("author"); 
    outerDiv.append(header);

    var imgDiv = document.createElement("div"); 
    imgDiv.classList.add("img-container"); 
    var img = document.createElement("img"); 
    img.setAttribute("src", card.authorPhoto);
    imgDiv.appendChild(img); 
    authorDiv.appendChild(imgDiv); 

    var span = document.createElement("span"); 
    span.textContent = ("By " + card.authorName);
    authorDiv.append(span); 

    outerDiv.append(author); 
    return outerDiv; 
}

let success = {boolean:false, message:"none"};

function requestGet(url){
    axios.get(url)
        .then( (response) =>{
            for(let article in response.data.articles){
                response.data.articles[article]
                .array.forEach(element => {
                    document.querySelector(".cards-container").append(createCard(element));
                });
            }
            success.boolean = true;
            success.message = response;
            return success;
        })
        .catch( (error) =>{
            success.message = error;
            success.boolean = false;
            return success;
        })
        .finally ((response) =>{
            console.log(`Response was ${success.boolean? "successful": "a complete failure"}, and the response code was`,success.message.status);
        })
}
    