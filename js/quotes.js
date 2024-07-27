const quotes=[
    { 
        quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
        author: "단태",
    },
    {
        quote:"마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다. ",
        author: "이소룡",
    },
    {
        quote: "네 자신의 불행을 생각하지 않게 되는 가장 좋은 방법은 일에 몰두하는 것이다",
        author: "베토벤",
    },
{
        quote: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다 ",
        author: "L -론허바드",
},
];

const quote =document.querySelector("#quotes span:first-child");
const author =document.querySelector("#quotes span:last-child");

const todayQuote= (quotes[Math.floor(Math.random()*quotes.length)]);

quote.innerText=todayQuote.quote;
author.innerText=todayQuote.author;


