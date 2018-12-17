import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Button from '@material-ui/core/Button';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


class App extends Component {
    constructor(){
        super();
        this.state = {
            frutas : ""
        }
    }

    async setFrutas(){
        var frutas =  await getFrutas()
        console.log(frutas);
        // console.log(frutas);
        // console.log(promice);
        this.setState({frutas})
    }
  render() {
    var {frutas} = this.state
    var list = Object.keys(frutas)
    var objs = list.map((i,c)=>{
        return i + c
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {objs}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Button variant="contained" color="primary" onClick={() => this.setFrutas()} >
            Frutas
        </Button>
        <Form name = "Holi"/>
      </div>
    );
  }
}

//TODO la lista de los MenuItlems : se utilisa una lista temporal que se llena en el
// metodo de mapeo y se verifica que no se repitan los elementos
/////////////////////////////////////////////////////

class Form extends Component {
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.value);// TODO Se agarrra el valor actual que gatilla el evento
    };

    render(){
        var {name} = this.props
        return(
            <FormControl className={""}>
          <InputLabel htmlFor="age-simple">{name}</InputLabel>
          <Select
            value={30}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          </FormControl >
        )

    }
}


/////////////////////////////////////////////////////

var URL = "http://192.168.0.7"
var port = ":4800"
var getFrutas =  async () => {
    var response =  await axios.get( URL+port+"/frutas")
    return   response.data["frutas"]
}
export default App;
