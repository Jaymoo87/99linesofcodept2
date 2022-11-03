document.addEventListener('DOMContentLoaded', function(){
const friends = ['Jamie', 'Jen', 'Sequoya', 'Jeff', 'Logan'];

let button = document.getElementById('singbutton');
document.body.appendChild(button);

let Jamie = document.createElement('div');
let Jen = document.createElement('div');
let Sequoya = document.createElement('div');
let Jeff = document.createElement('div');
let Logan = document.createElement('div');

 
Jamie.className = 'friend';
Jen.className = 'friend';
Sequoya.className = 'friend';
Jeff.className = 'friend';
Logan.className = 'friend';


document.body.appendChild(Jamie);
document.body.appendChild(Jen);
document.body.appendChild(Sequoya);
document.body.appendChild(Jeff);
document.body.appendChild(Logan);

let h3 = document.createElement('h3');

let Jamieh3 = document.createElement('h3');
Jamieh3.textContent = 'Jamie';
Jamie.appendChild(Jamieh3);

let Jenh3 = document.createElement('h3');
Jenh3.textContent = 'Jen';
Jen.appendChild(Jenh3);

let Sequoyah3 = document.createElement('h3');
Sequoyah3.textContent = 'Sequoya';
Sequoya.appendChild(Sequoyah3);

let Jeffh3 = document.createElement('h3');
Jeffh3.textContent = 'Jeff';
Jeff.appendChild(Jeffh3);

let Loganh3 = document.createElement('h3');
Loganh3.textContent = 'Logan';
Logan.appendChild(Loganh3);



button.addEventListener('click', function(){

    
    let  lastLine;
    let  lastWords;


for (i = 0, a = 0; i == 0; ++a) {
    if (a == friends.length) {
        break;
    }
    else {
        console.log(friends[a] + ":");



        for (i = 99; i >= 1; --i) {


            if (i === 1) {

                lastLine = "line of code";
                lastWords = "no more lines of code in the file "
                console.log(i + " lines of code in the file, " + ' ' + i + " line of code; " + friends[a] + " strikes one out, clears it all out," + ' ' + lastWords);

            } else {


                lastLine = "lines of code";
                lastWords = i - 1 + ' ' + "lines of code in the file";
                console.log(i + ' ' + "lines of code in the file," + ' ' + i + " lines of code;" + ' ' + friends[a] + ' ' + " strikes one out, clears it all out," + ' ' + lastWords);

            }
        }


    }


}
});


//lines();
});