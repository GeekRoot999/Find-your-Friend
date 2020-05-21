import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import Searchbox from './Searchbox';
import Search from './Search';
import './App.css'

class App extends Component{
    constructor(){
        super()
        this.state ={
            robots: robots,
            searchfield: '',
            emailfield:'',
            isEmailValid: false,
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchfield:event.target.value})
    }

    onsearchemailChange =(event) =>{
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)){
            this.setState({emailfield:event.target.value, isEmailValid : true});
        }
        else {
            this.setState({isEmailValid : false, emailfield:event.target.value});
        }
    }

    
    render(){
        const filterRobot = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) &&
            (this.state.isEmailValid ? robot.email.toLowerCase().includes(this.state.emailfield.toLowerCase()) : true)
        })
        return(
            <div className='tc'>
                <h1 className='f1'>Robodudes</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <Search searchemail={this.onsearchemailChange} emailfield={this.state.emailfield} isEmailValid={this.state.isEmailValid} />
                <CardList robots={filterRobot} />
            </div>
        );
    }
}

export default App;