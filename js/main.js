/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

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

        // per 100 volte aggiungo l'elemento al contenitore
        for (let i = 1; i <= 100; i++) {

            const box = createElementWithClass("div", "square");

            let number = i;    
             
            box.innerHTML = `<span>${number}</span>`;

            // gestire il click sul singolo elemento
            box.addEventListener("click",

                function () {

                    this.classList.toggle("clicked");

                    console.log("La cella cliccata è la numero", number);

                }
            )

            grid.append(box);

        }

    }
)










