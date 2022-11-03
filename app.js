document.addEventListener('DOMContentLoaded', function () {

    let button = document.getElementById('singbutton');
    document.body.appendChild(button);



    const friends = ['Jamie', 'Jen', 'Sequoya', 'Jeff', 'Logan'];

    button.addEventListener('click', function () {

        for (let i = 0; i < friends.length; i++) {
            //create div and give it a class
            let div = document.createElement("div");
            div.className = "friend";
            // create h3 and give it the text from the friend array
            // put the h3 in the div
            let h3 = document.createElement("h3");

            //cycles through the 'friends' array (remember this...Justin)
            let name = document.createTextNode(friends[i]);
            //place the name into the h3 and the h3 into its own div
            h3.appendChild(name);
            div.appendChild(h3);

            for (let j = 99; j > 0; j--) {

                let p = document.createElement("p");
                let song;

                if (j > 2) {
                    song = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
                } else if (j === 2) {
                    song = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file");
                } else {
                    song = document.createTextNode(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
                }

                //text in paragraphs --> paragraphs in divs
                p.appendChild(song);
                div.appendChild(p);


            };
            
            //put div in body
            document.body.appendChild(div);



        }
    });

});

