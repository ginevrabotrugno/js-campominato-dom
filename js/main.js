// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco

// seleziono il contenitore dei blocchi
const grid = document.getElementById("grid");

// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// seleziono bottone dall html 
const button = document.getElementById("generate_grid");

// gestisco l'interazione al click
button.addEventListener("click",
    function (event) {

        event.preventDefault();

        grid.innerHTML = '';

        // Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

        let bombArray = [];

        while (bombArray.length < 16) {
            let bomb = generaNumeroRandom(1,100);

            if (! bombArray.includes(bomb)) { // nell’array delle bombe non potranno esserci due numeri uguali.
                
                bombArray.push(bomb);

            }
        }

        console.log(bombArray);
       
        let score = 0;


        // per 100 volte aggiungo l'elemento al contenitore
        for (let i = 1; i <= 100; i++) {

            const box = createElementWithClass("div", "square");

            let number = i;    
             
            box.innerHTML = `<span>${number}</span>`;

            // gestire il click sul singolo elemento
            box.addEventListener("click",

                function () {

                    if (bombArray.includes(number)) {
                        this.classList.add("bomb");
                        alert("OH NO! HAI PESTATO UNA BOMBA!! GAME OVER" + "Il tuo punteggio è: " + score);

                    } else {
                        this.classList.add("clicked");
                        score ++;
                    }
                
                }
            )

            grid.append(box);

        }

    }
)










// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.





