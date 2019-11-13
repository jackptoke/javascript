const list = document.querySelector('.cities-list');
list.innerHTML = '';

let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL', 'bAnGkOk'];

for (const city of cities) {
    if (city){
        let listItem = document.createElement('li');
        listItem.textContent = city.charAt(0).toUpperCase() + city.substring(1).toLowerCase();

        list.appendChild(listItem)
    }
}