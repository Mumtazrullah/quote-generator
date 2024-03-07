let quotes=[
    "The only way to do great work is to love what you do (Steve Jobs)",
    "Believe you can and you're halfway there (Theodore Roosevelt)",
    "Success is not final, failure is not fatal. It is the courage to continue that counts (Winston Churchill)",
    "In the middle of every difficulty lies opportunity (Albert Einstein)",
    "It does not matter how slowly you go as long as you do not stop (Confucius)",
    "Everything you’ve ever wanted is on the other side of fear (George Addair)",
    "Don't watch the clock. Do what it does. Keep going (Sam Levenson)",
    "Believe you can and you're halfway there (Theodore Roosevelt)",
    "You are never too old to set another goal or to dream a new dream (C.S. Lewis)",
    "The only way to achieve the impossible is to believe it is possible (Charles Kingsleigh)",
];

function munculQuote(){
    let index=Math.floor(Math.random()*quotes.length);
   
    let div=document.querySelector('#quote');
    let quote=`<div class="card">
    <p>${quotes[index]}</p>
   </div>

    `;
    div.innerHTML=quote;
    div.classList.add('show');
}
