// - chiedere all'utente l'email 
// - confrontare l'email con una lista di email autorizzate
// - se presente fai comparire messaggio "accesso autorizzato"
//   -altrimenti fai comparire messaggio "accesso negato"



// VARIABILI GLOBALI

let userEmail = document.querySelector("#user-email").value; //ERRORE
console.log(userEmail);

const arrAutorizedEmailList = ['esempio1@mail.it', 'esempio2@mail.it', 'esempio3@mail.it', 'esempio4@mail.it', 'esempio5@mail.it', 'esempio6@mail.it', 'esempio7@mail.it', 'esempio8@mail.it', 'esempio9@mail.it', 'esempio10@mail.it', 'esempio11@mail.it', 'esempio12@mail.it']; //lista email autorizzate

const btnLogIn = document.querySelector(".btn-log-in");

let output = document.querySelector(".output");



// ciclo per confrontare email utente con quelle presenti nella lista email autorizzate

btnLogIn.addEventListener('click', function() {
    let userEmail = document.querySelector("#user-email").value;
    let found = false;
    
    for (let i = 0; i < arrAutorizedEmailList.length; i++) {
   
        if (arrAutorizedEmailList[i] == userEmail) {
            found = true;
        }
    }
   
    if (found == false) {
        output.innerHTML = 'Access Denied';
        
       
    }else {
        output.innerHTML = 'Access Granted';
    }

})



