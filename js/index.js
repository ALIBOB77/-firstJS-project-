var Quotes = [
    {
        quote:"Do not take life too seriously. You will not get out alive.",
        auther:"--Elbert Hubbard",
    },

    {
        quote:"The best revenge is massive success.",
        auther:"--Frank Sinatra",
    },

    {
        quote:"It's not what happens to you, but how you react to it that matters.",
        auther:"--Epictetus",
    },

    {
        quote:"You miss 100% of the shots you don't take.",
        auther:"--Wayne Gretzy",
    },
    {
        quote:"Resentment is like drinking poison and waiting for your enemies to die.",
        auther:"--Nelson Mandela",
    },
];


var newIndex;
var lastIndex;
var displayedQuotes=[];

function getQuotes( ){

    if(displayedQuotes.length == Quotes.length){
        displayedQuotes =[];
    }
    do{
         newIndex = Math.floor(Math.random() * Quotes.length);

    }while(newIndex==lastIndex || displayedQuotes.includes(newIndex) );

    lastIndex = newIndex

    console.log(newIndex);

    displayedQuotes.push(newIndex);

    document.getElementById("quote").innerHTML= Quotes[newIndex].quote;
    document.getElementById("auther").innerHTML= Quotes[newIndex].auther;

}