const game =(function() {

    /*     gameboard module */ 

    const gameboard = {
        gameboard : ["","","","","","","","",""],
        winner : "",
        counter : 0,
        lastPlayed : "",
        playerOne : "",
        playerTwo : "",   

        reset : ()=>{
            const Case = document.querySelectorAll(".case").forEach(Case =>
                Case.innerHTML = ""
            );
            return gameboard.counter = 0, gameboard.gameboard = ["","","","","","","","",""], gameboard.winner = "", gameboard.lastPlayed = "", gameboard.playerOne = "", gameboard.playertwo = "";
        },

        gameOver : ()=>{

            const winnerScreen = document.querySelector("#winnerScreen");


            if (gameboard.gameboard[0] === gameboard.gameboard[1] && 
                gameboard.gameboard[0] === gameboard.gameboard[2] &&
                gameboard.gameboard[0] != ""
            ){
                gameboard.winner = gameboard.lastPlayed;
                winnerScreen.innerHTML = gameboard.winner + " Won!";
                winnerModal.showModal();
                console.log(gameboard.winner)
            }
            else if (gameboard.gameboard[3] === gameboard.gameboard[4] && 
                gameboard.gameboard[3] === gameboard.gameboard[5] &&
                gameboard.gameboard[3] != ""
            ){
                gameboard.winner = gameboard.lastPlayed;
                winnerScreen.innerHTML = gameboard.winner + " Won!";
                winnerModal.showModal();
                console.log(gameboard.winner)
            }
            else if (gameboard.gameboard[6] === gameboard.gameboard[7] && 
                gameboard.gameboard[6] === gameboard.gameboard[7] &&
                gameboard.gameboard[6] != ""
            ){
                gameboard.winner = gameboard.lastPlayed;
                winnerScreen.innerHTML = gameboard.winner + " Won!";
                winnerModal.showModal();
                console.log(gameboard.winner)
            }
            else if (gameboard.gameboard[0] === gameboard.gameboard[4] && 
                gameboard.gameboard[0] === gameboard.gameboard[8] &&
                gameboard.gameboard[0] != ""
            ){
                gameboard.winner = gameboard.lastPlayed;
                winnerScreen.innerHTML = gameboard.winner + " Won!";
                winnerModal.showModal();
                console.log(gameboard.winner)
            }
            else if (gameboard.gameboard[2] === gameboard.gameboard[4] && 
                gameboard.gameboard[2] === gameboard.gameboard[6] &&
                gameboard.gameboard[2] != ""
            ){
                gameboard.winner = gameboard.lastPlayed;
                winnerScreen.innerHTML = gameboard.winner + " Won!";
                winnerModal.showModal();
                console.log(gameboard.winner)
            }
            else if (gameboard.gameboard[0] === gameboard.gameboard[3] && 
                gameboard.gameboard[0] === gameboard.gameboard[6] &&
                gameboard.gameboard[3] != ""
            ){
                gameboard.winner = gameboard.lastPlayed;
                winnerScreen.innerHTML = gameboard.winner + " Won!";
                winnerModal.showModal();
                console.log(gameboard.winner)
            }

            else if (gameboard.gameboard[1] === gameboard.gameboard[4] && 
                gameboard.gameboard[1] === gameboard.gameboard[7] &&
                gameboard.gameboard[1] != ""
            ){
                gameboard.winner = gameboard.lastPlayed;
                winnerScreen.innerHTML = gameboard.winner + " Won!";
                winnerModal.showModal();
                console.log(gameboard.winner)
            }
            else if (gameboard.gameboard[2] === gameboard.gameboard[5] && 
                gameboard.gameboard[2] === gameboard.gameboard[8] &&
                gameboard.gameboard[2] != ""
            ){
                gameboard.winner = gameboard.lastPlayed;
                winnerScreen.innerHTML = gameboard.winner + " Won!";
                winnerModal.showModal();
                console.log(gameboard.winner)
            }
            else if (gameboard.counter >= 9){
                winnerScreen.innerHTML = "DRAW!";
                winnerModal.showModal();
            }
        }
    };

    const Case = document.querySelectorAll(".case").forEach(Case =>
        Case.addEventListener("click",()=>{
            if(gameboard.counter % 2 === 0){
                gameboard.playerOne.play(Case.id);
            }
            else{
                gameboard.playerTwo.play(Case.id);
            }

        })
    );  

    const closeWinnerModal = document.querySelector("#winnerModal")
    closeWinnerModal.addEventListener("click",()=>{
        winnerModal.close();
        gameboard.reset();
    })



    /*    addplayer modal module */ 

    const openAddPLayerModal = document.querySelector("#openAddPLayerModal");
    const closeAddPLayerModal = document.querySelector("#closeAddPLayerModal");
    const newPlayerForm = document.querySelector("#newPLayerForm")

    openAddPLayerModal.addEventListener("click",()=>{addPLayerModal.showModal()});
    closeAddPLayerModal.addEventListener("click",()=>{
        addPLayerModal.close()});

    newPlayerForm.addEventListener("submit",(e)=>{
        e.preventDefault();

        const formData = new FormData(newPlayerForm);
        const playerOne = { name : formData.get("playerOne"),
                            mark : "X"                
                        };

        const playerTwo = { name : formData.get("playerTwo"),
                            mark : "O"                
                        };

        gameboard.reset();
        gameboard.playerOne = player(playerOne.name,playerOne.mark);
        gameboard.playerTwo = player(playerTwo.name,playerTwo.mark);
        newPlayerForm.reset();
        addPLayerModal.close();
    });
    

    /*     create player module */
    const player = (name,mark)=>{

        const Case = document.querySelectorAll(".case")

        if (mark === "X"){
            console.log("Player One: " + name);
        }
        else if (mark === "O"){
            console.log("Player Two: " + name);

        }

        const play = (coord)=>{
            const coordinate = {
                "a1" : 0, "a2" : 1, "a3" : 2,
                "b1" : 3, "b2" : 4, "b3" : 5,
                "c1" : 6, "c2" : 7, "c3" : 8
            }
            const index = coordinate[coord];

            if (gameboard.lastPlayed === name){
                console.log("it's not your turn yet!");
            }

            else if(gameboard.gameboard[index] == ""){
                gameboard.gameboard[index] = mark;
                Case[index].innerHTML = mark;
                console.log(name,"turn", gameboard.gameboard);
                gameboard.lastPlayed = name;
                gameboard.counter += 1;
                gameboard.gameOver();

            }
            else
                console.log("invalid case");
        };
        return {play};
    };
})();


/* player1.play("a1");
player1.play("a2"); */



/* player1.play("a1")
player2.play("a2")
player1.play("a3")
player2.play("b2")
player1.play("b1")
player2.play("b3")
player1.play("c3")
player2.play("c1")
player1.play("c2") */












