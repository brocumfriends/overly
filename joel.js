let Joel = 0

let earnMoneyAddend = 1

let earnMoneyAddendTwo = 1

let earnMoneyAddendThree = 3

let earnMoneyAddendFive = 1

let earnMoneyAddendSix = 3

let earnMoneyAddendOne = earnMoneyAddend

let earnMoneyAddendFour = earnMoneyAddendOne
 
let joelCost = 550

let aliceCost = 75

let lilyCost = 750

let joelfive = true

let lilyAmount = 0

let clickMeCost = 4800

let declanBought = false

let done = 0

let button = document.querySelector("#Alice");

button.addEventListener('click', () => {
    Joel = Joel + earnMoneyAddendFour
    done = done + earnMoneyAddendFour
    document.querySelector('#joel').textContent = "Joel Tokens: $" + Math.round(Joel * 1) / 1;
});


let del = document.querySelector("#Lily");

del.addEventListener('click', () => {
    Joel = 0
    alert("Womp Womp, You Failed!")

    document.querySelector('#done').textContent = "Joel: " + Math.round(done * 1) / 1;

    earnMoneyAddend = 1

    done = 0

    earnMoneyAddendTwo = 1

    earnMoneyAddendThree = 3

    earnMoneyAddendFour = 1

    joelCost = 550

    aliceCost = 75

    lilyCost = 750

    joelfive = true

    lilyAmount = 0


 clickMeCost = 4800

 declanBought = false


});



let dec = document.querySelector("#Declan");

dec.addEventListener('click', () => {
    if (Joel > 49) {

        Joel = Joel - 50; 

        declanBought = true

        document.querySelector('#joel').textContent = "Joel Tokens: $" + Math.round(Joel * 1) / 1;

        document.querySelector("#Declan").remove();

        const newButton = document.createElement("button");

        newButton.textContent = "Click Me!";

        newButton.id = "myNewButton";

        newButton.className = "my-custom-button";

        const container = document.getElementById("buttonContainer");

        container.appendChild(newButton);

        let lil = document.querySelector("#myNewButton");

        lil.addEventListener('click', () => {
            if (Math.round(Joel * 1) % 2 === 1) {
                Joel = Joel + earnMoneyAddendTwo
                done = done + earnMoneyAddendTwo
                document.querySelector('#joel').textContent = "Joel Tokens: $" + Math.round(Joel * 1) / 1;
            } else {
                Joel = Joel + earnMoneyAddendThree
                done = done + earnMoneyAddendThree

                document.querySelector('#joel').textContent = "Joel Tokens: $" + Math.round(Joel * 1) / 1;
            }
        });
        /////////////////////////
        //
        //
        //
        //
        const onepiece = document.createElement("button");

        onepiece.textContent = "Wait for it...";

        onepiece.id = "onepiece8";

        const carohelmer = document.getElementById("buttonContainer");

        carohelmer.appendChild(onepiece);

        //
        //
        //
        //
        //
        const pug = document.createElement("button");

        pug.textContent = "Lily";

        pug.id = "lriffs";

        pug.className = "csslriffs";

        const onepieceTwo = document.getElementById("buttonContainer");

        onepieceTwo.appendChild(pug);

        let oneLily = document.querySelector("#lriffs");

        oneLily.addEventListener('click', () => {
            if (Joel > lilyCost) {
                lilyAmount = lilyAmount + 1
                earnMoneyAddendTwo = earnMoneyAddendTwo + 2
                earnMoneyAddendThree = earnMoneyAddendThree + 2

                earnMoneyAddendFive = earnMoneyAddendFive + 0.5
                earnMoneyAddendSix = earnMoneyAddendSix + 0.7
                Joel = Joel - lilyCost
                document.querySelector('#joel').textContent = "Joel Tokens: $" + Math.round(Joel * 1) / 1;
            } else {
                alert("You are too poor")
            }
            if (lilyAmount > 10 && Math.round(Joel * 1) % 2 === 1) {
                lilyCost = lilyCost * 2
            }
        });
        //
        //
        //
        /////
        ///////////////
        ///////////////
    } else {
        alert("You are too poor")
    }
    //
    //
    //
    let car = document.querySelector("#onepiece8");

    car.addEventListener('click', () => {
        if (Joel > 140) {
            const alyss = document.createElement("button");

            document.querySelector("#onepiece8").remove();

            alyss.textContent = "Jaws!";

            alyss.id = "NewButton";

            alyss.className = "custom-button";

            const alysson = document.getElementById("buttonContainer");

            alysson.appendChild(alyss);
        } else {
            alert("You are too poor")
        }


        //
        //
        //
        //
        //
        let onepieceOne = document.querySelector("#NewButton");
 
        onepieceOne.addEventListener('click', () => {
            Joel = Joel + Joel
            document.querySelector('#joel').textContent = "Joel Tokens: $" + Math.round(Joel * 1) / 1;
            document.querySelector("#NewButton").remove();
            //
            //
            //
            //
            //
            //
        });
    });


let Joelsix = document.querySelector("#myNewButton");

Joelsix.addEventListener('keydown', (event) => {
    if (Joel > clickMeCost && event.code === 'Space') {
        earnMoneyAddendTwo = earnMoneyAddendTwo + earnMoneyAddendFive
        earnMoneyAddendThree = earnMoneyAddendSix + earnMoneyAddendThree 
        Joel = Joel - clickMeCost
        document.querySelector('#joel').textContent = "Joel Tokens: $" + Math.round(Joel * 1) / 1;
        clickMeCost = clickMeCost + (clickMeCost / 10)
    } else {
        alert("You are too poor")
    }
});


});

let oneAlice = document.querySelector("#oneAlice");

oneAlice.addEventListener('click', () => {
    if (Joel > aliceCost) {
        earnMoneyAddendOne = earnMoneyAddendOne + 0.1
        earnMoneyAddend = earnMoneyAddend + 0.1
        earnMoneyAddendFour = earnMoneyAddendFour + 0.1
        Joel = Joel - aliceCost
        document.querySelector('#joel').textContent = "Joel Tokens: $" + Math.round(Joel * 1) / 1;
        aliceCost = aliceCost + (aliceCost / 16)
    } else {
        alert("You are too poor")
    }
});
//
//
//
////
//
//
//
////
//
//
//
let Alyssaone = document.querySelector("#Alyssa");

Alyssaone.addEventListener('click', () => {
    if (Joel > 419 && joelfive === true) {
        Joel = Joel - 420
        document.querySelector('#joel').textContent = "Joel Tokens: $" + Math.round(Joel * 1) / 1;

        const alyssalive = document.createElement("button");

        alyssalive.textContent = "Reef";

        alyssalive.id = "onepiece4";

        alyssalive.className = "cssreef";

        const alyssalove = document.getElementById("onepieceseven");

        alyssalove.appendChild(alyssalive);

        let alyssatwo = document.querySelector("#onepiece4");

        joelfive = false

        alyssatwo.addEventListener('click', () => {
            Joel = Joel + (5 * (earnMoneyAddend - 1))
            done = done + (5 * (earnMoneyAddend - 1))
            document.querySelector('#joel').textContent = "Joel Tokens: $" + Math.round(Joel * 1) / 1;
        });

    } else {
        alert("You are too poor")
    }

});

//
//br
//
//
//

let Joelfour = document.querySelector("#Alice");

Joelfour.addEventListener('keydown', (event) => {
    if (Joel > joelCost && event.code === 'Space') {
        earnMoneyAddendFour = earnMoneyAddendFour + earnMoneyAddendOne
        Joel = Joel - joelCost
        document.querySelector('#joel').textContent = "Joel Tokens: $" + Math.round(Joel * 1) / 1;
        joelCost = joelCost + (joelCost / 10)
    } else {
        alert("You are too poor")
    }
});

//  
//
//
//
//
///document.addEventListener('keydown', (event) => {           
   // if (event.code === 'Space' && (Math.round(Joel * 1) % 2 === 1)) {
      //  Joel = Joel + (earnMoneyAddendFour / 4.25)          
        //document.querySelector('#joel').textContent = "Joel Tokens: $" + Math.round(Joel * 1) / 1;
 ///   } 
 //   if (event.code === 'Space' && (Math.round(Joel * 1) % 2 === 0)) {
        Joel = Joel + (earnMoneyAddendFour / 5)
        document.querySelector('#joel').textContent = "Joel Tokens: $" + Math.round(Joel * 1) / 1;
 //   }
 //   if (event.code === 'Space' && (Math.round(Joel * 1) % 174 === 0)) {
 //       document.querySelector('#joel').textContent = "Joel Tokens: $" + Math.round(Joel * 1) / 1;
 ////   }
//});
let Alyssatwo = document.querySelector("#Alyssa");

Alyssatwo.addEventListener('click', () => {
    if (Joel > 2450 && joelfive === true) {
        Joel = Joel - 420
        document.querySelector('#joel').textContent = "Joel Tokens: $" + Math.round(Joel * 1) / 1;

        const alyssalive = document.createElement("button");

        alyssalive.textContent = "Reef Moody";

        alyssalive.id = "onepiece4";

        alyssalive.className = "cssreef";

        const alyssalove = document.getElementById("onepieceseven");

        alyssalove.appendChild(alyssalive);

        let alyssatwo = document.querySelector("#onepiece4");

        joelfive = false

        alyssatwo.addEventListener('click', () => {
            Joel = Joel + (5 * (earnMoneyAddend - 1))
            done = done + (5 * (earnMoneyAddend - 1))
            document.querySelector('#joel').textContent = "Joel Tokens: $" + Math.round(Joel * 1) / 1;
        });

    } else {
        alert("You are too poor")
    }

});