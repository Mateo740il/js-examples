console.log('--- Exercise 06: forEach ---');

/*
1. Iterate over an array and return all persons with there name and message
2. Instead of printing the message to the console.
Put all messages with the name into the DOM and make it visible on the page.
*/

const foodLovers = [
    {
        name: 'Max',
        message: 'I love 🍉'
    },
    {
        name: 'Jim',
        message: 'My favorite fruit is 🍌. But I hate 🥑.'
    },
    {
        name: 'Alex',
        message: 'Yum yum 🍏'
    },
    {
        name: 'Sandra',
        message: 'The taste of 🍓 in the summer is great.'
    },
    {
        name: 'Sophia',
        message: 'I love 🍇, 🍒 & 🍋'
    }
];

foodLovers.forEach(el=>{
    // console.log(el.name+" "+el.message)
    let item=document.createElement("li")
    item.innerHTML=el.name+": "+el.message;
    let list=document.createElement("ul");
    list.appendChild(item);
    document.getElementsByTagName("body")[0].appendChild(list);
});