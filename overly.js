let Joel = 0
let EarnMoneyAddend = 1
let EarnMoneyAddendTwo = 1
let EarnMoneyAddendThree = 3
let EarnMoneyAddendFour = EarnMoneyAddend
let DeclanBought = false
let JoelCost = 550
let EarnMoneyAddendMultiplier = 1
let AliceCost = 75
let EarnOn = false
let SkipOn = false
let JawsPressed = false
let onepieceFive = document.querySelector("#OnePieceTwo")
let Lifetimevar = document.querySelector("#lifetime")
let AlyssaCost = 3
let AlyssaBought = 0
let AlyssaTotal = 0
let AlyssaFirstButton = false
let AlyssaSecondButton = false
let AliceClicked = 0
let MistElfy_Mult = 0
let JoelTokensCollected = 0
let LilyCost = 750
let Mistpersecond = 0
let MistElfytimer = 1000
let MistElfytimertwo = 140
let AlyssaSacrifice = false
let AlyssaSacrificeCount = 0
let Infinite = true
let AlyssaButtonFour = false
let Alice = 0
let AliceforLevel = 0
let Alicespent = 0
let Level = 1
let ToNextLevel = 4
let AliceTotal = 0
let Numrep = 5

//
//
//
//
//

Lifetimevar.addEventListener('click', () => {
    document.querySelector("#AlyssaRequest").textContent = "Joel Tokens Collected: " + Math.round(JoelTokensCollected)
    setTimeout(() => {
        document.querySelector("#AlyssaRequest").textContent = " "
    }, 2000);
});

onepieceFive.addEventListener('click', () => {
    Joel = 0
    EarnMoneyAddend = 1
    EarnMoneyAddendTwo = 1
    EarnMoneyAddendThree = 3
    EarnMoneyAddendFour = EarnMoneyAddend
    DeclanBought = false
    JoelCost = 550
    EarnMoneyAddendMultiplier = 1
    AliceCost = 75
    EarnOn = false
    SkipOn = false
    JawsPressed = false
    Infinite = false
});



let addendOne = document.querySelector("#OnePieceOne")

addendOne.addEventListener('click', () => {
    Joel = Joel + EarnMoneyAddendFour
    JoelTokensCollected = JoelTokensCollected + EarnMoneyAddendFour
    document.querySelector('#Joelone').textContent = Math.round(Joel);
    Alice = Alice + 0.1
});

addendOne.addEventListener('keydown', (event) => {
    if (event.code === 'KeyC') {
        document.querySelector("#AlyssaRequest").textContent = "Joel Tokens to Upgrade: " + JoelCost
        setTimeout(() => {
            document.querySelector("#AlyssaRequest").textContent = " "
        }, 2000);
    }
    if (event.code === 'KeyP' && SkipOn === false) {
        EarnOn = true
        document.querySelector('#PerSecond').textContent = "Earn Per Click = " + Math.round(EarnMoneyAddendFour);
        setTimeout(() => {
            document.querySelector('#PerSecond').textContent = " ";
            EarnOn = false
        }, 2000);
    }
    if (SkipOn === true && event.code === KeyP) {
        Joel = Joel - (Joel / 20)
        document.querySelector('#Joelone').textContent = Math.round(Joel);
    }
    if (event.code === 'Space') {
        if (Joel > JoelCost) {
            Alice = Alice + 10
            Joel = Joel - JoelCost
            EarnMoneyAddendMultiplier = EarnMoneyAddendMultiplier + 1
            EarnMoneyAddendFour = EarnMoneyAddend * EarnMoneyAddendMultiplier
            JoelCost = JoelCost + (JoelCost / 12)
            document.querySelector('#Joelone').textContent = + Math.round(Joel);
        } else {
            if (Math.round(Joel) % 12 === 0) {
                alert("Womp womp, you need more money.")
            }
            if (Math.round(Joel) % 12 === 1) {
                alert("You are too poor.")
            }
            if (Math.round(Joel) % 12 === 2) {
                alert("Sorry, you don't really get the 'cost' thing.")
            }
            if (Math.round(Joel) % 12 === 3) {
                alert("GET YOURSELF MORE MONEY!")
            }
            if (Math.round(Joel) % 12 === 4) {
                alert("Sir or Madam, you need more money")
            }
            if (Math.round(Joel) % 12 === 5) {
                alert("Get a job, knave.")
            }
            if (Math.round(Joel) % 12 === 6) {
                alert("Please come back with a full piggy bank.")
            }
            if (Math.round(Joel) % 12 === 7) {
                alert("Don't be such a cheapskate.")
            }
            if (Math.round(Joel) % 12 === 8) {
                alert("You're living on peanuts. Get a job.")
            }
            if (Math.round(Joel) % 12 === 9) {
                alert("I'm sorry, but you kinda forgot to bring your wallet.")
            }
            if (Math.round(Joel) % 12 === 10) {
                alert("You've gone broke. Come back with some more money.")
            }
            if (Math.round(Joel) % 12 === 11) {
                alert("Excuse me, your pockets are light.")
            }
        }
    }
});

//
//
//
//
//

let Declan = document.querySelector("#Declan")
let DeclanRepCount = 0
let DeclanInterval = null
let buttonContainer = document.querySelector("#buttonContainer")

Declan.addEventListener('click', () => {
    if (Joel > 49 && DeclanBought === false) {

        Joel = Joel - 50

        Alice = Alice + 2

        DeclanBought = true

        buttonContainer.classList.add('DeclanBought')

        document.querySelector('#Joelone').textContent = Math.round(Joel);

        const newButton = document.createElement("button");

        newButton.textContent = "Skip!";

        newButton.id = "myNewButton";

        newButton.className = "my-custom-button";

        const container = document.getElementById("buttonContainer");

        container.appendChild(newButton);

        //

        console.log("Skip button appended to buttonContainer");

        let lil = document.querySelector("#myNewButton")

        lil.addEventListener('click', () => {
            Alice = Alice + 0.07
            if (Math.round(Joel) % 2 === 1) {
                Joel = Joel + EarnMoneyAddendTwo
                JoelTokensCollected = JoelTokensCollected + EarnMoneyAddendTwo
            } else {
                Joel = Joel + EarnMoneyAddendThree
                JoelTokensCollected = JoelTokensCollected + EarnMoneyAddendThree
            }
            document.querySelector('#Joelone').textContent = Math.round(Joel);
        });

        lil.addEventListener('keydown', (event) => {
            if (event.code === 'KeyP' & EarnOn === false) {
                SkipOn = true
                document.querySelector('#PerSecond').textContent = "Earn Per Click =" + ((EarnMoneyAddendTwo + EarnMoneyAddendThree) / 2);
                setTimeout(() => {
                    SkipOn = false
                    document.querySelector('#PerSecond').textContent = " ";
                }, 5000);
            } if (EarnOn = true) {
                Joel = Joel - (Joel / 20)
                document.querySelector('#Joelone').textContent = Math.round(Joel);
            }
        });

        //
        //
        //
        //
        //

        const Lily = document.createElement("button");

        Lily.textContent = "Lily!";

        Lily.id = "Lily";

        const onePieceOne = document.getElementById("buttonContainer");

        onePieceOne.appendChild(Lily);

        //

        let onepieceTwo = document.querySelector("#Lily")

        onepieceTwo.addEventListener('click', () => {
            if (Joel > LilyCost) {
                Joel = Joel - LilyCost
                Alice = Alice + 7
                EarnMoneyAddendTwo = EarnMoneyAddendTwo + 0.8
                EarnMoneyAddendThree = EarnMoneyAddendThree + 1.2
                document.querySelector('#Joelone').textContent = Math.round(Joel);
                //
                //
                //
                //
                //
                let newimage = document.createElement('img')
                newimage.src = 'https://th.bing.com/th/id/R.309b8431614701ac02bdfc1992d01069?rik=VJ1amzN12L9Cmw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fballoon-png-hd-balloons-png-hd-2750.png&ehk=OWbDGzp8zn69f5oTpOKImOhrINtEtlTrUyDaU8gDiL4%3d&risl=&pid=ImgRaw&r=0'
                newimage.height = 200;
                newimage.width = 200;
                newimage.id = 'newimagenew'
                let newimagecont = document.querySelector("#image")
                newimagecont.appendChild(newimage);

                setTimeout(() => {
                    newimagecont.removeChild(newimage)
                }, 3000);
                //
                //
                //
                //
                //

                if (Joel % 5 === 0) {
                    LilyCost = LilyCost * 1.5
                }
            } else {
                if (Math.round(Joel) % 12 === 0) {
                    alert("Womp womp, you need more money.")
                }
                if (Math.round(Joel) % 12 === 1) {
                    alert("You are too poor.")
                }
                if (Math.round(Joel) % 12 === 2) {
                    alert("Sorry, you don't really get the 'cost' thing.")
                }
                if (Math.round(Joel) % 12 === 3) {
                    alert("GET YOURSELF MORE MONEY!")
                }
                if (Math.round(Joel) % 12 === 4) {
                    alert("Sir or Madam, you need more money")
                }
                if (Math.round(Joel) % 12 === 5) {
                    alert("Get a job, knave.")
                }
                if (Math.round(Joel) % 12 === 6) {
                    alert("Please come back with a full piggy bank.")
                }
                if (Math.round(Joel) % 12 === 7) {
                    alert("Don't be such a cheapskate.")
                }
                if (Math.round(Joel) % 12 === 8) {
                    alert("You're living on peanuts. Get a job.")
                }
                if (Math.round(Joel) % 12 === 9) {
                    alert("I'm sorry, but you kinda forgot to bring your wallet.")
                }
                if (Math.round(Joel) % 12 === 10) {
                    alert("You've gone broke. Come back with some more money.")
                }
                if (Math.round(Joel) % 12 === 11) {
                    alert("Excuse me, your pockets are light.")
                }
            }
        });

        onepieceTwo.addEventListener('keydown', (event) => {
            if (event.code === KeyC) {
                document.querySelector("#AlyssaRequest").textContent = "Joel Tokens to Click: " + LilyCost
                setTimeout(() => {
                    document.querySelector("#AlyssaRequest").textContent = " "
                }, 2000);
            }
        })

        const Jaws = document.createElement("button");

        Jaws.textContent = "Jaws!";

        Jaws.id = "Jaws";

        const JawsOne = document.getElementById("buttonContainer");

        JawsOne.appendChild(Jaws);

        let JawsTwo = document.querySelector("#Jaws")

        JawsTwo.addEventListener('click', () => {
            if (JawsPressed === false && Joel < 1440) {
                Alice = Alice + 3
                Joel = Joel * (2 + (EarnMoneyAddend / 2))
                JawsPressed = true
                document.querySelector('#Joelone').textContent = Math.round(Joel);
            } else {
                if (Math.round(Joel) % 12 === 0) {
                    alert("First come, first serve. Womp Womp.")
                }
                if (Math.round(Joel) % 12 === 1) {
                    alert("Sorry, No second serves.")
                }
                if (Math.round(Joel) % 12 === 2) {
                    alert("Don't be greedy, knave.")
                }
                if (Math.round(Joel) % 12 === 3) {
                    alert("GET OFF MY LAWN! YOU'VE ALREADY HAD A CHANCE!")
                }
                if (Math.round(Joel) % 12 === 4) {
                    alert("Sir or Madam, Jaws only wants to be clicked once.")
                }
                if (Math.round(Joel) % 12 === 5) {
                    alert("You greedy fool. Get off.")
                }
                if (Math.round(Joel) % 12 === 6) {
                    alert("Don't be greedy.")
                }
                if (Math.round(Joel) % 12 === 7) {
                    alert("I'm so sorry, but Jaws is a one time use.")
                }
                if (Math.round(Joel) % 12 === 8) {
                    alert("Thou shalt not be greedy, knave.")
                }
                if (Math.round(Joel) % 12 === 9) {
                    alert("The powers of Skip fall on your greed.")
                }
                if (Math.round(Joel) % 12 === 10) {
                    alert("Jaws is now asleep, he doesn't like your tickles.")
                }
                if (Math.round(Joel) % 12 === 11) {
                    alert("Sorry, you've lost my magic and my trust.")
                }
            }
        });
        //
        //
        //
        //
        //

        onepieceFive.addEventListener('click', () => {
            Joel = 0
            EarnMoneyAddend = 1
            EarnMoneyAddendTwo = 1
            EarnMoneyAddendThree = 3
            EarnMoneyAddendFour = EarnMoneyAddend
            DeclanBought = false
            JoelCost = 550
            EarnMoneyAddendMultiplier = 1
            AliceCost = 75
            EarnOn = false
            SkipOn = false
            JawsPressed = false
            onepieceFive = document.querySelector("#OnePieceTwo")


            let skipbutton = document.querySelector("#myNewButton")
            skipbutton.remove()

            let Lily_button = document.querySelector("#Lily")
            Lily_button.remove()

            let Jaws_button = document.querySelector("#Jaws")
            Jaws_button.remove()
        });

    } else {
        if (Math.round(Joel) % 12 === 0) {
            alert("Womp womp, you need more money.")
        }
        if (Math.round(Joel) % 12 === 1) {
            alert("You are too poor.")
        }
        if (Math.round(Joel) % 12 === 2) {
            alert("Sorry, you don't really get the 'cost' thing.")
        }
        if (Math.round(Joel) % 12 === 3) {
            alert("GET YOURSELF MORE MONEY!")
        }
        if (Math.round(Joel) % 12 === 4) {
            alert("Sir or Madam, you need more money")
        }
        if (Math.round(Joel) % 12 === 5) {
            alert("Get a job, knave.")
        }
        if (Math.round(Joel) % 12 === 6) {
            alert("Please come back with a full piggy bank.")
        }
        if (Math.round(Joel) % 12 === 7) {
            alert("Don't be such a cheapskate.")
        }
        if (Math.round(Joel) % 12 === 8) {
            alert("You're living on peanuts. Get a job.")
        }
        if (Math.round(Joel) % 12 === 9) {
            alert("I'm sorry, but you kinda forgot to bring your wallet.")
        }
        if (Math.round(Joel) % 12 === 10) {
            alert("You've gone broke. Come back with some more money.")
        }
        if (Math.round(Joel) % 12 === 11) {
            alert("Excuse me, your pockets are light.")
        }
    }
});

//
//
//
//
//

Declan.addEventListener('keydown', (event) => {
    if (event.code === KeyC && DeclanBought === false) {
        document.querySelector("#AlyssaRequest").textContent = "Cost to Click: " + 50
    }
    if (event.code === KeyC && DeclanBought === true) {
        document.querySelector("#AlyssaRequest").textContent = "Already Bought"
    }
})

//
//
//
//
//

let onepieceFour = document.querySelector("#Alice")

onepieceFour.addEventListener('click', () => {
    if (Joel > AliceCost) {
        AliceTotal = AliceTotal + AliceCost
        Alice = Alice + 1.2
        Joel = Joel - AliceCost
        AliceClicked = AliceClicked + 1
        EarnMoneyAddend = EarnMoneyAddend + 0.1
        EarnMoneyAddendFour = EarnMoneyAddend * EarnMoneyAddendMultiplier
        AliceCost = AliceCost + (AliceCost / 30)
        document.querySelector('#Joelone').textContent = Math.round(Joel);
    } else {
        if (Math.round(Joel) % 12 === 0) {
            alert("Womp womp, you need more money.")
        }
        if (Math.round(Joel) % 12 === 1) {
            alert("You are too poor.")
        }
        if (Math.round(Joel) % 12 === 2) {
            alert("Sorry, you don't really get the 'cost' thing.")
        }
        if (Math.round(Joel) % 12 === 3) {
            alert("GET YOURSELF MORE MONEY!")
        }
        if (Math.round(Joel) % 12 === 4) {
            alert("Sir or Madam, you need more money")
        }
        if (Math.round(Joel) % 12 === 5) {
            alert("Get a job, knave.")
        }
        if (Math.round(Joel) % 12 === 6) {
            alert("Please come back with a full piggy bank.")
        }
        if (Math.round(Joel) % 12 === 7) {
            alert("Don't be such a cheapskate.")
        }
        if (Math.round(Joel) % 12 === 8) {
            alert("You're living on peanuts. Get a job.")
        }
        if (Math.round(Joel) % 12 === 9) {
            alert("I'm sorry, but you kinda forgot to bring your wallet.")
        }
        if (Math.round(Joel) % 12 === 10) {
            alert("You've gone broke. Womp womp. Just womp womp.")
        }
        if (Math.round(Joel) % 12 === 11) {
            alert("Excuse me, your pockets are light.")
        }
    }
});

onepieceFour.addEventListener('keydown', (event) => {
    if (event.code === 'KeyC') {
        document.querySelector("#AlyssaRequest").textContent = "Joel Tokens to Click: " + AliceCost
        setTimeout(() => {
            document.querySelector("#AlyssaRequest").textContent = " "
        }, 2000);
    }
});

//
//
//
//
//

let AlyssaOne = document.querySelector("#Alyssa")

AlyssaOne.addEventListener('click', () => {
    if (Joel > AlyssaCost) {
        Alice = Alice + 0.3 + (AlyssaTotal / 500)
        Joel = Joel - AlyssaCost
        AlyssaTotal = AlyssaTotal + AlyssaCost
        document.querySelector('#Joelone').textContent = Math.round(Joel);
        if (AlyssaBought < 30) {
            AlyssaCost = AlyssaCost + (AlyssaCost / 30)
            Mistpersecond = Mistpersecond + 0.02
        };
        if (AlyssaBought > 31 && AlyssaBought < 60) {
            AlyssaCost = AlyssaCost + (AlyssaCost / 24)
            Mistpersecond = Mistpersecond + 0.024
        };
        if (AlyssaBought > 61) {
            Mistpersecond = Mistpersecond + 0.03
            AlyssaCost = AlyssaCost + (AlyssaCost / 21)
        }
        AlyssaBought = AlyssaBought + 1
        if (AlyssaBought < 15) {
            MistElfy_Mult = MistElfy_Mult + 0.02
        } else {
            MistElfy_Mult = MistElfy_Mult + 0.01
        }
        if (AlyssaBought === 45) {
            MistElfy_Mult = MistElfy_Mult + 0.04
        }


        //

        if (AlyssaBought === 15 && AlyssaFirstButton === false) {

            let AlyssaButtonContainer = document.querySelector("#AlyssabContainer")

            AlyssaFirstButton = true

            AlyssaButtonContainer.classList.add('DeclanBought')

            const AlyssaFirst = document.createElement("button");

            AlyssaFirst.textContent = "MistElfy!";

            AlyssaFirst.id = "AlyssaFirstid";

            AlyssaFirst.className = "AlyssaFirstclass";

            const AlyssaFirstCont = document.getElementById("AlyssabContainer");

            AlyssaFirstCont.appendChild(AlyssaFirst);

            let Mist = document.querySelector("#AlyssaFirstid")
            let MistElfy_ = MistElfy_Mult * AliceClicked
            Mist.addEventListener('click', () => {
                Joel = Joel + (MistElfy_Mult * AliceClicked)
                Alice = Alice + 0.15
                JoelTokensCollected = JoelTokensCollected + (MistElfy_Mult * AliceClicked)
                console.log("MistElfy!")
                document.querySelector('#Joelone').textContent = Math.round(Joel);
            });
            Mist.addEventListener('keydown', (event) => {
                if (event.code === 'KeyP') {
                    MistElfy_ = MistElfy_Mult * AliceClicked
                    document.querySelector("#AlyssaRequest").textContent = "Per Click: " + MistElfy_
                    console.log("MistElfy!!")
                    setTimeout(() => {
                        document.querySelector("AlyssaRequest").textContent = " "
                    }, 2000);
                }
            });

        }
        if (AlyssaBought === 30 && AlyssaSecondButton === false) {

            AlyssaSecondButton = true

            const AlyssaSecond = document.createElement("button");

            AlyssaSecond.textContent = "Emperor!";

            AlyssaSecond.id = "AlyssaSecondid";

            AlyssaSecond.className = "AlyssaSecondclass";

            const AlyssaSecondCont = document.getElementById("AlyssabContainer");

            AlyssaSecondCont.appendChild(AlyssaSecond);

            let MistSecond = document.querySelector("#AlyssaSecondid")
            let mistIntervalone = null
            MistSecond.addEventListener('click', () => {
                if (!mistIntervalone) {
                    mistIntervalone = setInterval(() => {
                        console.log("MistElfy!!!")
                        Joel = Joel + Mistpersecond
                        document.querySelector("#Joelone").textContent = Math.round(Joel)
                    }, MistElfytimer)
                }
            });
        }
        if (AlyssaBought === 60 && AlyssaSacrifice === false) {
            AlyssaSacrifice = true

            const Sacrificebutton = document.createElement("button");

            Sacrificebutton.textContent = "Pursue your Sacrifice!";

            Sacrificebutton.id = "Sacrificeid";

            Sacrificebutton.className = "Sacrificeclass";

            const AlyssaSacrificeCont = document.getElementById("AlyssabContainer");

            AlyssaSacrificeCont.appendChild(Sacrificebutton);

            let SacrificeToggle = document.querySelector("#Sacrificeid")

            SacrificeToggle.addEventListener('click', () => {
                if (AlyssaSacrificeCount > 10) {
                    alert("Your sacrifice limit has been reached.")
                } else {
                    if (Joel > (AlyssaTotal / 2) && Joel < AlyssaTotal && EarnMoneyAddendFour < (AlyssaTotal / 100) && EarnMoneyAddendThree < (AlyssaTotal / 100) && EarnMoneyAddendTwo < (AlyssaTotal / 100) && AlyssaSacrificeCount < 10) {
                        Joel = 0
                        Alice = Alice + 40
                        AlyssaSacrificeCount = AlyssaSacrificeCount + 1
                        if (Joel % 2 === 0) {
                            Mistpersecond = (Mistpersecond * 1.2)
                        }
                        if (Joel % 2 === 1) {
                            MistElfytimer = (MistElfytimer * 0.84)
                        }
                    } else {
                        alert("You are too overpowered.")
                    }
                }
            });
        }
    } else {
        if (Math.round(Joel) % 12 === 0) {
            alert("Womp womp, you need more money.")
        }
        if (Math.round(Joel) % 12 === 1) {
            alert("You are too poor.")
        }
        if (Math.round(Joel) % 12 === 2) {
            alert("Sorry, you don't really get the 'cost' thing.")
        }
        if (Math.round(Joel) % 12 === 3) {
            alert("GET YOURSELF MORE MONEY!")
        }
        if (Math.round(Joel) % 12 === 4) {
            alert("Sir or Madam, you need more money")
        }
        if (Math.round(Joel) % 12 === 5) {
            alert("Get a job, knave.")
        }
        if (Math.round(Joel) % 12 === 6) {
            alert("Please come back with a full piggy bank.")
        }
        if (Math.round(Joel) % 12 === 7) {
            alert("Don't be such a cheapskate.")
        }
        if (Math.round(Joel) % 12 === 8) {
            alert("You're living on peanuts. Get a job.")
        }
        if (Math.round(Joel) % 12 === 9) {
            alert("I'm sorry, but you kinda forgot to bring your wallet.")
        }
        if (Math.round(Joel) % 12 === 10) {
            alert("You've gone broke. Womp womp. Just womp womp.")
        }
        if (Math.round(Joel) % 12 === 11) {
            alert("Excuse me, your pockets are light.")
        }
    }
});

//
//
//
//
//

AlyssaOne.addEventListener('keydown', (event) => {
    if (event.code === 'KeyB') {
        document.querySelector('#AlyssaRequest').textContent = "Times Clicked: " + AlyssaBought
        setTimeout(() => {
            document.querySelector('#AlyssaRequest').textContent = " "
        }, 2000);

    }
    if (event.code === 'KeyC') {
        document.querySelector('#AlyssaRequest').textContent = "Joel Tokens to Click: " + Math.round(AlyssaCost)
        setTimeout(() => {
            document.querySelector('#AlyssaRequest').textContent = " "
        }, 2000);
    }
    if (event.code === 'KeyT') {
        document.querySelector('#AlyssaRequest').textContent = "Money Spent on Alyssa: " + Math.round(AlyssaTotal)
        setTimeout(() => {
            document.querySelector('#AlyssaRequest').textContent = " "
        }, 2000);
    }
})

//
//
//
//
//

let AliceInterval = null
let EarlyAlice = Alice
let AlicePercent = AliceforLevel / ToNextLevel
let expbarfill = document.querySelector("#expbarfill")

if (!AliceInterval) {
    AliceInterval = setInterval(() => {
        console.log("MistElfy")
        document.querySelector("#Leveluptwo").textContent = "EXP Level: " + Level
        AliceforLevel = Alice - Alicespent
        AlicePercent = Math.round(100 * (AliceforLevel / ToNextLevel))
        if (Alice !== EarlyAlice) {
            console.log("Alice!")
            EarlyAlice = Alice
            expbarfill.style.width = AlicePercent + "%"
        }

        //

        if (AliceforLevel > ToNextLevel) {
            let newimageone = document.createElement('img')
                newimageone.src = 'https://cdn.pixabay.com/photo/2022/06/09/13/06/level-up-7252551_640.png'
                newimageone.height = 200;
                newimageone.width = 200;
                newimageone.id = 'newimagenew'
                let newimageonecont = document.querySelector("#image")
                newimageonecont.appendChild(newimageone);
            Alicespent = Alicespent + AliceforLevel
            Level = Level + 1
            ToNextLevel = ToNextLevel * 1.2
            console.log("Lilly")
            setTimeout(() => {
                newimageonecont.removeChild(newimageone);
            }, 700);
        }
    }, MistElfytimertwo)
} 