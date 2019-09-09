let Text = document.getElementById('Text');
let barrel = [];
let barrelElement = document.getElementsByClassName('Chest')[0];

function Craft() {
    barrel.push(Text.value);
    let msg = document.createElement('div');
    msg.className = 'Mine-age';
    msg.innerHTML = Text.value;
    barrelElement.appendChild(msg)
    Text.value = ''
    console.log(Text.value)
}
document.onkeyup = function(event) {
    if(event.key == 'Enter'){
        Craft();
    }
}