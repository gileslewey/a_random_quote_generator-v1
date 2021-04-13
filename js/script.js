/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * GOAL: Exceeds expectations, please reject if no met.
***/




/*** 
 * `quotes` array 
 *  Naming synyax is full source name plus 'Quote'.
***/
let quotes = [
jayQuote = {
  quote: "The minute they got rid of rotary phones, everything went to hell.",
  source: "Jay",
  citation: "Modern Family",
  year: "2010",
  tag: "Humor"
  },
  
theDudeQuote = {
  quote: "It really tied the room together.",
  source: "The Dude",
  citation: "The Big Lebowski",
  tag: "Humor"
  },

blackKnightQuote = {
  quote: "It\'s just a flesh wound.",
  source: "Black Knight",
  citation: "Monty Python and the Holy Grail",
  year: "1975",
  tag: "Humor"
  },

dwightShrootQuote = {
  quote: "Today, smoking is going to save lives.",
  source: "Dwight Shroot",
  citation: "The Office",
  tag: "Humor"
  },

douglasAdamsQuote = {
  quote: "Isn\'t it enough to see that a garden is beautiful without having to believe that there are fairies at the bottom of it too?",
  source: "Douglas Adams",
  citation: "Hitchiker\'s guide to the Galaxy",
  tag: "Humor"
  },
];
//let quotes = [jayQuote, theDudeQuote, blackKnightQuote, dwightShrootQuote, douglasAdamsQuote];
//let humorQuote = {};

/***
 * get humorQuote with random quote function.
 * humorQuote naming convention used in case other categories, e.g., inspireQuote are added (might do this with a different eventListener).
 * buildQuote function sets quote on page.
***/


//make arrow function
function getRandomQuote() {
return (quotes[Math.floor(Math.random() * quotes.length)]); 
} 
/*set to return random quote object instead of variable
To add to what I was saying previously, rather than using a global variable for the random quote object, you could just call 
getRandom quote and assign it to a variable directly in the printQuote function with something like const newQuote = 
getRandomQuote. So the getRandomQuote function would return a random quote and the printQuote function would call
 that function and assign it to a variable.*/

function printQuote() {
const humorQuote = getRandomQuote();
let buildQuote = `<p class="quote">${humorQuote.quote}</p>
<p class="source">${humorQuote.source}`;
 if (humorQuote.citation) {
  buildQuote += `<span class=s"citation">${humorQuote.citation}</span>`;
  } if (humorQuote.year) {
  buildQuote += `<span class="year">${humorQuote.year}</span>`;
  } if (humorQuote.tag) {
    buildQuote += `<span class="year">${humorQuote.tag}</span>`;
    }else buildQuote += `</p>`;
  document.getElementById('quote-box').innerHTML = buildQuote;
return buildQuote;
}

printQuote();


/***
 * printQuote refreshes with setInterval().
***/

setInterval(function(){ randomBack();  printQuote(); }, 6000);

/***
 * randomBack function changes background color to random RGB.
***/

function randomBack() {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);
  const backColor =  `rgb( ${R}, ${G}, ${B} )`;
  document.body.style.background = backColor;
  }
  

/***
 * printQuote and randomBack functions both execute with 'click'.
***/

document.getElementById('load-quote').addEventListener('click',() => {    
     printQuote();
     randomBack();    
}, false);

/***
* old event listener code
* //document.getElementById('load-quote').addEventListener("click", printQuote, false);
***/