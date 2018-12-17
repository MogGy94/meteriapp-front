import React , {Component} from 'react';

import Grid from "./Grid"

class Main extends Component {
    constructor(){
        super();
        this.speed = 90;
        this.rows = 30 ;
        this.cols = 50 ;
        this.state= {
            generation : 0,
            gridFull: Array(this.rows).fill().map(
                () =>{
                    return Array(this.cols).fill(false)
                }
            )

        }
    }
    selectBox = (row,col) => {
        let {gridFull} = this.state

        let gridCopy = arrayClone(gridFull);
        console.log(row,col);
        gridCopy[row][col] = !gridCopy[row][col];
        this.setState({
            gridFull: gridCopy
        })
    }

    seed = () =>{
        console.log("H");
        let {gridFull} = this.state
        let {rows,cols} = this ;
        let gridCopy = arrayClone(gridFull);
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                if(Math.floor(Math.random()*4) == 1) {
                    gridCopy[i][j] = true;
                    console.log("HOLI");
                }
            }
        }
        this.setState({
            gridFull : gridCopy
        })
    }
    playButton = () =>{
        clearInterval(this.intervalId)
        this.intervalId = setInterval(this.play, this.speed)

    }
    play = () =>{
        // dos grids
        let g = this.state.gridFull;
        let g2 = arrayClone(this.state.gridFull);
        // Todas las ptas reglas
        for (var i = 0; i < this.rows; i++) {
            for (var j = 0; j < this.cols; j++) {
                let count = 0;
    		    if (i > 0) if (g[i - 1][j]) count++;
    		    if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
    		    if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
    		    if (j < this.cols - 1) if (g[i][j + 1]) count++;
    		    if (j > 0) if (g[i][j - 1]) count++;
    		    if (i < this.rows - 1) if (g[i + 1][j]) count++;
    		    if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
    		    if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) count++;
    		    if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
    		    if (!g[i][j] && count === 3) g2[i][j] = true;
            }
        }
        this.setState({
		  gridFull: g2,
		  generation: this.state.generation + 1
		});
    }

    componentDidMount(){
        this.seed();
        this.playButton();
    }

    render (){
        var {gridFull} = this.state

        var {rows,cols,selectBox} = this
        return(
            <div>
                <h1> The game of life </h1>
                <Grid
                    gridFull= {gridFull}
                    rows ={rows}
                    cols= {cols}
                    selectBox ={selectBox}
                    />
                <h2> Generations : {this.state.generation} </h2>
            </div>
        )
    }

}

function arrayClone (arr){
    return JSON.parse(JSON.stringify(arr));
}
export default Main ;
