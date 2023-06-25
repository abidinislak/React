import {useState, useRef} from 'react'
import './MyStyle.css'

function App(){
    const [game,setGame] =  useState([
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]);
    const [mark, setMark]=useState("X");
    const [gameOver,setGameOver] = useState(false);
    const [moves, setMoves] = useState([]);

    const winnerEl = useRef();
    const elsRef = useRef([]);

    function setDivMark(i){
        if(game[i] !== "") return;
        if(gameOver) return;
        const index = moves.findIndex(p=> p=== game);
        if(index !== moves.length -1) return;

        const newGame = game.map((val,index)=> {
            if(index == i) return mark;
            else return val
        });

        setGame(newGame);
        setMoves(prev => [...prev, newGame])

        mark === "X" ? setMark("O"): setMark("X"); 
        
        isGameOver(newGame);
    } 

    function isGameOver(newGame){
        const winningLines = [
            [0, 1, 2], // Horizontal lines
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6], // Vertical lines
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8], // Diagonal lines
            [2, 4, 6]
          ];
        
          for (let i = 0; i < winningLines.length; i++) {
            const [a, b, c] = winningLines[i];
            if (newGame[a] && newGame[a] === newGame[b] && newGame[a] === newGame[c]) {
              winnerEl.current.style.display = "block";
              winnerEl.current.innerHTML = `Kazanan: ${mark}`;
              setGameOver(true);
              elsRef.current[a].style.backgroundColor = "green";
              elsRef.current[b].style.backgroundColor = "green";
              elsRef.current[c].style.backgroundColor = "green";
              document.getElementById(a).style.backgroundColor = "green";
              document.getElementById(b).style.backgroundColor = "green";
              document.getElementById(c).style.backgroundColor = "green";
              break;
            }
          }
    }

    function resetGame(){
        document.location.reload();
    }

    function returnMove(i){
        setGame(moves[i]);
    }
   
    return(
        <div className="container" style={{marginTop: "20px"}}>
            <div className="row">
                <div className="col-8">
                    <h1 ref={winnerEl} className='alert alert-success' style={{display: "none"}}>
                        Kazanan: X
                    </h1>
                    <div className="row">
                       {game.map((val,index)=> 
                            <div
                            id={index} 
                            key={index} 
                            ref={(e)=> elsRef.current[index] = e}
                                 className="col-4 game"
                                 onClick={()=> setDivMark(index)}>
                                {val}
                            </div> 
                       )}                   
                    </div>
                    <div>
                        {moves.map((val,i) =>  
                            <button onClick={()=> returnMove(i)} className='btn btn-outline-danger'>Hamle {i+1}</button>
                        )}
                       
                    </div>
                    
                </div>
                <div className="col-4">
                    <h1>Sıradaki: {mark}</h1>
                    <hr/>
                    <button 
                    className="btn btn-primary w-100"
                    onClick={resetGame}>
                        Yeni Oyun
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App;