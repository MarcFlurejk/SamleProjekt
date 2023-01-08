const unikID = document.getElementById("inputField").innerHTML;

function getEmail(unikID) {

    const emailAddresses = {
        '12345': 'john@johnson.dk',
        '67890': 'karen@karensen.dk',
        '24680': 'jane@janesen.dk',

    };


    const email = emailAddresses[unikID];


    if (!email) {

        document.getElementById("result").innerHTML = "Bruger ikke fundet";

    } else {

        document.getElementById("result").innerHTML = "Der er sendt et link til " + email + ", med et link til at nulstille dit password";
    }



}


