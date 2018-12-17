import React ,{Component} from 'react'

class Box extends Component {
    selectBox = () =>{
        var {row,col,selectBox} = this.props;
        console.log(selectBox,row,col);
        selectBox(row,col)
    }
    render(){
        var {id,boxClass,selectBox} = this.props;
        return (
            <div
             className = {boxClass}
             id = {id}
             onClick = {this.selectBox}
            />
        )
    }
}

export default Box
