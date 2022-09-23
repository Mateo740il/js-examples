console.log('--- Exercise 04: find ---');

/*
1. Find the correct emoji with the with the hash and put the resullt into the DOM
*/

const hash = 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad';

const cryptoEmojis = [
    {
        emoji: '😎',
        hash: 'ba7816bf8f01Cfae414140de5dae2223b00361a396177a9cb410ff61f20015ad'
    },
    {
        emoji: '😂',
        hash: 'ba7816bf8f01Cfae414140de5dae2223b00361a396177a9cb410ff51f20015ad'
    },
    {
        emoji: '😡',
        hash: 'ba7816bf8f01Cfae414140de5dae2223b000361a396177a9cb410ff51f2005ad'
    },
    {
        emoji: '🕵️‍♂️',
        hash: 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad'
    },
    {
        emoji: '😍',
        hash: 'ba7816bf8f01Cfae414140de5dae2233b000361a396177a9cb410ff51f2005ad'
    }
];

let foundEmoji=cryptoEmojis.find(el=>el.hash===hash)
console.log(foundEmoji)

document.getElementsByTagName("body")[0].innerText=foundEmoji.emoji