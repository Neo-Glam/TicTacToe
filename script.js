const game =(function() {

    const gameboard = {
        gameboard : ["","","","","","","","",""],
        winner : "",
        counter : 0,

        reset : ()=>{
            return gameboard.gameboard = ["","","","","","","","",""] , gameboard.winner = "";
        },

        gameOver : ()=>{
            if (gameboard.gameboard[0] === gameboard.gameboard[1] && 
                gameboard.gameboard[0] === gameboard.gameboard[2] &&
                gameboard.gameboard[0] != ""
            ){
                console.log(name," won!" );
                gameboard.winner = name;
                console.log(gameboard.winner)
            }
            else if (gameboard.gameboard[3] === gameboard.gameboard[4] && 
                gameboard.gameboard[3] === gameboard.gameboard[5] &&
                gameboard.gameboard[3] != ""
            ){
                console.log(name," won!" );
                gameboard.winner = name;
                console.log(gameboard.winner)
            }
            else if (gameboard.gameboard[6] === gameboard.gameboard[7] && 
                gameboard.gameboard[6] === gameboard.gameboard[7] &&
                gameboard.gameboard[6] != ""
            ){
                console.log(name," won!" );
                gameboard.winner = name;
                console.log(gameboard.winner)
            }
            else if (gameboard.gameboard[0] === gameboard.gameboard[4] && 
                gameboard.gameboard[0] === gameboard.gameboard[8] &&
                gameboard.gameboard[0] != ""
            ){
                console.log(name," won!" );
                gameboard.winner = name;
                console.log(gameboard.winner)
            }
            else if (gameboard.gameboard[2] === gameboard.gameboard[4] && 
                gameboard.gameboard[2] === gameboard.gameboard[6] &&
                gameboard.gameboard[2] != ""
            ){
                console.log(name," won!" );
                gameboard.winner = name;
                console.log(gameboard.winner)
            }
            else if (gameboard.gameboard[0] === gameboard.gameboard[3] && 
                gameboard.gameboard[0] === gameboard.gameboard[6] &&
                gameboard.gameboard[3] != ""
            ){
                console.log(name," won!" );
                gameboard.winner = name;
                console.log(gameboard.winner)
            }

            else if (gameboard.gameboard[1] === gameboard.gameboard[4] && 
                gameboard.gameboard[1] === gameboard.gameboard[7] &&
                gameboard.gameboard[1] != ""
            ){
                console.log(name," won!" );
                gameboard.winner = name;
                console.log(gameboard.winner)
            }
            else if (gameboard.gameboard[2] === gameboard.gameboard[5] && 
                gameboard.gameboard[2] === gameboard.gameboard[8] &&
                gameboard.gameboard[2] != ""
            ){
                console.log(name," won!" );
                gameboard.winner = name;
                console.log(gameboard.winner)
            }
            else if (gameboard.counter >= 9)
                console.log("draw!");
        }
    };

    const player = (name,mark)=>{

        const play = (coord)=>{
            const coordinate = {
                "a1" : 0, "a2" : 1, "a3" : 2,
                "b1" : 3, "b2" : 4, "b3" : 5,
                "c1" : 6, "c2" : 7, "c3" : 8
            }
            const index = coordinate[coord];

            if(gameboard.gameboard[index] == ""){
                gameboard.gameboard[index] = mark;
                console.log(name,"turn", gameboard.gameboard);
                gameboard.counter += 1;
                console.log(gameboard.counter);
                gameboard.gameOver();
            }
            else
                console.log("invalid case");
        };
        return {play};
    };
    return {player}
})();

const player1 = game.player("bob","X");
const player2 = game.player("maria","O");

/*player1.play("a1")
player2.play("a2")
player1.play("a3")
player2.play("b2")
player1.play("b1")
player2.play("b3")
player1.play("c3")
player2.play("c1")
player1.play("c2")
*/












