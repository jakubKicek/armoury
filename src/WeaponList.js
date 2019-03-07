import React, { Component } from 'react';
import './App.css';

class WeaponList extends Component {
    constructor(props){
        super(props);
        this.state={
            filtered: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount() {
        this.setState({
        filtered: this.props.items
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
        filtered: nextProps.items
        });
    }
    
    handleChange(e) {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.props.items;

      newList = currentList.filter(item => {
        const lc = item.id.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    }
    else {
            // If the search bar is empty, set newList to original task list
      newList = this.props.items;
    }
        // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
    }
    render(){
        return <div>
            
        
            search for piece of weapon: 
        <input type="search" placeholder="search for" onChange={this.handleChange}/>
        <table>
            {this.state.filtered.map(w =>(
            <tr key={w.id}><td>{w.id}</td><td>{w.cost}</td><td>{w.damage_dice} {w.damage_type}</td><td>{w.weight}</td><td>{w.properties}</td></tr>))}
        </table>
        </div>
        
    }
}

export default WeaponList