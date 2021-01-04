import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  squares: ("X"|"O"|null)[];
  private _currentPlayer: "X"|"O";
  public winner: "X"|"O"|null;
  ngOnInit(){
    this.resetGame();
    
  }


  get currentPlayer(): "X" | "O" { //1 numbers indicate the sequence of development.
    return  this._currentPlayer;
  }

  resetGame(){
    this.squares= new Array(9).fill(null);
    this._currentPlayer= "X";
    this.winner=null;
    console.log("Squares have been initialized");
    
  }

  updateBoard(idx:number){
    if(!this.squares[idx] && !this.winner){
      
      this.squares[idx]=this.currentPlayer;
      //this.squares.splice(idx,1,this.currentPlayer);
      
      this.winner=this.calculateWinner(this.squares)
      this.currentPlayer == "X" ? this._currentPlayer="O": this._currentPlayer="X"
    }
    
    console.log(this.squares);
   
  }

private calculateWinner(squares: ("X"|"O"|null)[]): ("X"|"O"|null){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return this.currentPlayer;
      }
    }
    return null;
  }

  constructor(){
    this.squares=[]
   this._currentPlayer= "X";
    this.winner = null;
  }

}
