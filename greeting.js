const list = document.querySelector(".output");
list.innerHTML = '';
let greetings = ['Happy Birthday!',
'Merry Christmas my love',
'A happy Christmas to all the family',
'You\'re all I want for Christmas',
'Get well soon'];

for (let greeting of greetings){
    if (greeting){
        let listItem = document.createElement('li');
        listItem.textContent = greeting.toString();
        list.appendChild(listItem);
    }
}