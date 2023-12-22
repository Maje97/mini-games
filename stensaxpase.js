let val ='';
let speletsval ='';
let randomval ='';

function startaSpel(val) {
    let randomval = Math.random()

    if (randomval < 0.33){
        speletsval = 'sten';
    } else if(randomval > 0.33 && <= 0.66){
        speletsval = 'sax';
    } else {
        speletsval = 'påse';
    }

    switch(val){
        case 'sten':
            switch(speletsval){
                case 'sten': break;
                case 'sax': break;
                case 'påse': break;
            }
        break;
        case 'sax':
        break;
        case 'påse':
        break;
    }
}