const arrayquotes = [
    {
    'author' : 'John cena',
    'quote' : 'Never Give Up',
    },
    {
    'author' : 'Oscar Wilde',
    'quote' : 'To live is the rarest thing in the world. Most people exist, that is all.',
    },
    {
    'author' : 'Emily Dickinson',
    'quote' : 'That it will never come again is what makes life so sweet.',
    },
    {
    'author' : 'George Eliot',
    'quote' : 'It is never too late to be what you might have been.',
    }
];

function genquote() {
const random = Number.parseInt(Math.random() * arrayquotes.length );
document.querySelector('#qt').textContent = `\"${arrayquotes[random].quote}\"`;
document.querySelector('#at').textContent = `--${arrayquotes[random].author}`;
}