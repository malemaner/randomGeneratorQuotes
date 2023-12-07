const quotes = [
    { quote: "What is important now is to recover our senses.", author: "Susan Sontag", url: "https://en.wikipedia.org/wiki/Susan_Sontag" },
    { quote: "It's fine to celebrate success but it is more important to heed the lessons of failure.", author: "Bill Gates", url: "https://en.wikipedia.org/wiki/Bill_Gates" },
    { quote: "Every moment is an organizing opportunity, every person a potential activist, every minute a chance to change the world.", author: "Dolores Huerta", url: "https://en.wikipedia.org/wiki/Dolores_Huerta" },
    { quote: "When you give everyone a voice and give people power, the system usually ends up in a really good place.", author: "Mark Zuckerberg", url: "https://en.wikipedia.org/wiki/Mark_Zuckerberg" },
    { quote: "Doing the best at this moment puts you in the best place for the next moment.", author: "Oprah Winfrey", url: "https://en.wikipedia.org/wiki/Oprah_Winfrey" },
    { quote: "We cannot seek achievement for ourselves and forget about progress and prosperity for our community.", author: "Cesar Chavez", url: "https://en.wikipedia.org/wiki/Cesar_Chavez" },
    { quote: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington", url: "https://en.wikipedia.org/wiki/Booker_T._Washington" },
    { quote: "To do more for the world than the world does for you - that is success.", author: "Henry Ford", url: "https://en.wikipedia.org/wiki/Henry_Ford" },
    { quote: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi", url: "https://en.wikipedia.org/wiki/Mahatma_Gandhi" },
    { quote: "Life's most persistent and urgent question is, 'What are you doing for others?'", author: "Martin Luther King Jr.", url: "https://en.wikipedia.org/wiki/Martin_Luther_King_Jr." },
    { quote: "One person can make a difference, and everyone should try.", author: "John F. Kennedy", url: "https://en.wikipedia.org/wiki/John_F._Kennedy" },
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela", url: "https://en.wikipedia.org/wiki/Nelson_Mandela" },
    { quote: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.", author: "Barack Obama", url: "https://en.wikipedia.org/wiki/Barack_Obama" },
    { quote: "No one has ever become poor by giving.", author: "Anne Frank", url: "https://en.wikipedia.org/wiki/Anne_Frank" },
    { quote: "We make a living by what we get, but we make a life by what we give.", author: "Winston Churchill", url: "https://en.wikipedia.org/wiki/Winston_Churchill" }
];

function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    const quoteHtml = `
        <blockquote>
            <p>${quote.quote}</p>
            <cite>
                <a target="_blank" href="${quote.url}">
                    ${quote.author}
                </a>
            </cite>
        </blockquote>
    `;
    document.getElementById('quoteDisplay').innerHTML = quoteHtml;
}

document.getElementById('quoteButton').addEventListener('click', displayQuote);
