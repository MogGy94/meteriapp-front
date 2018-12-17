import React,{Component} from 'react';
import Box from './Box'

var style =(w) =>{
    return(
        {width: w}
    )
}
class Grid extends Component {
    render(){
        var { rows,cols,gridFull,selectBox } = this.props
        //console.log(gridFull);
        var width = cols * 14;
        var rowsArr = []
        var boxClass = ""

        for (var i = 0 ; i < rows ; i++ ){
            for (var j = 0 ; j < cols ; j++ ){
                let boxId = i + "."+ j ;
                boxClass =  gridFull[i][j] ? "box on" : "box Off";
                rowsArr.push(
                    <Box
                        boxClass={boxClass}
                        id= {boxId}
                        key= {boxId}
                        row ={i}
                        col = {j}
                        selectBox = {selectBox}
                    />
                );
            }
        }
        return(
            <div className= "grid" style= {style(width)}>
                {rowsArr}
            </div>
        )
    }
}

export default Grid;
