import React from "react";
import Board from "./Board";
import Game from "./Game";
import Square from "./Square";

function App() {
  return (
    <div className="App">
      <Game>
        <Board>
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </Board>
      </Game>
    </div>
  );
}

export default App;
