const list = document.querySelector(".station-list");
list.textContent = '';

let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (let station of stations){
    let infos = station.split(';');
    let listItem = document.createElement('li');
    listItem.textContent = infos[0].substr(0, 3) + ": " + infos[1];

    list.appendChild(listItem);
}