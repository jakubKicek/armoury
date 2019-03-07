import React, { Component } from 'react';
import './App.css';

class WeaponList extends Component {
    constructor(props){
        super(props);
        this.state={
            filtered: [],
            Fil: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.displayPiercing = this.displayPiercing.bind(this);
        this.displaySlashing = this.displaySlashing.bind(this);
        this.displayBludgeoning = this.displayBludgeoning.bind(this);
        
        this.displaySM = this.displaySM.bind(this);
        this.displayMM = this.displayMM.bind(this);
        this.displaySR = this.displaySR.bind(this);
        this.displayMR = this.displayMR.bind(this);
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
    
    displaySM(e){
        let currentList = [];
        let newList = [];
        if (e.target.value !== "") {
          currentList = this.props.items;
          newList = currentList.filter(item => {
            const lc = item.type.toLowerCase();
            const filter = "simple melee";
            this.setState({
                Fil: filter
            })
            return lc.includes(filter);
          });
        }
        else {
          newList = this.props.items;
        }
        this.setState({
          filtered: newList
        });
    }
    displayMM(e){
        let currentList = [];
        let newList = [];
        if (e.target.value !== "") {
          currentList = this.props.items;
          newList = currentList.filter(item => {
            const lc = item.type.toLowerCase();
            const filter = "martial melee";
            this.setState({
                Fil: filter
            })
            return lc.includes(filter);
          });
        }
        else {
          newList = this.props.items;
        }
        this.setState({
          filtered: newList
        });
    }
    displaySR(e){
        let currentList = [];
        let newList = [];
        if (e.target.value !== "") {
          currentList = this.props.items;
          newList = currentList.filter(item => {
            const lc = item.type.toLowerCase();
            const filter = "simple ranged";
            this.setState({
                Fil: filter
            })
            return lc.includes(filter);
          });
        }
        else {
          newList = this.props.items;
        }
        this.setState({
          filtered: newList
        });
    }
    displayMR(e){
        let currentList = [];
        let newList = [];
        if (e.target.value !== "") {
          currentList = this.props.items;
          newList = currentList.filter(item => {
            const lc = item.type.toLowerCase();
            const filter = "martial ranged";
            this.setState({
                Fil: filter
            })
            return lc.includes(filter);
          });
        }
        else {
          newList = this.props.items;
        }
        this.setState({
          filtered: newList
        });
    }
    
    
    displayPiercing(e){
        let currentList = [];
        let newList = [];
        if (e.target.value !== "") {
          currentList = this.props.items;
          newList = currentList.filter(item => {
            const lc = item.damage_type.toLowerCase();
            const filter = "piercing";
            this.setState({
                Fil: filter
            })
            return lc.includes(filter);
          });
        }
        else {
          newList = this.props.items;
        }
        this.setState({
          filtered: newList
        });
    }
    
    displaySlashing(e){
        let currentList = [];
        let newList = [];
        if (e.target.value !== "") {
          currentList = this.props.items;
          newList = currentList.filter(item => {
            const lc = item.damage_type.toLowerCase();
            const filter = "slashing";
            this.setState({
                Fil: filter
            })
            return lc.includes(filter);
          });
        }
        else {
          newList = this.props.items;
        }
        this.setState({
          filtered: newList
        });
    }
    
    displayBludgeoning(e){
        let currentList = [];
        let newList = [];
        if (e.target.value !== "") {
          currentList = this.props.items;
          newList = currentList.filter(item => {
            const lc = item.damage_type.toLowerCase();
            const filter = "bludgeoning";
            this.setState({
                Fil: filter
            })
            return lc.includes(filter);
          });
        }
        else {
          newList = this.props.items;
        }
        this.setState({
          filtered: newList
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
            this.setState({
                Fil: filter
            })
            return lc.includes(filter);
          });
        }
        else {
          newList = this.props.items;
        }
        this.setState({
          filtered: newList
        });
    }
    
//        <input type="button" value="Piercing" onClick={this.displayPiercing}/>
//        <input type="button" value="Slashing" onClick={this.displaySlashing}/>
//        <input type="button" value="Bludgeoning" onClick={this.displayBludgeoning}/>
    
    render(){
        return <div>
            
        
            <p>Search D&D 5th edition weapon compedium:</p>
        <from>
            <input name="searchbar" type="search" placeholder="search by name" onChange={this.handleChange}/>
            <input type="button" value="Simple Melee" onClick={this.displaySM}/>
            <input type="button" value="Martial Melee" onClick={this.displayMM}/>
            <input type="button" value="Simple Range" onClick={this.displaySR}/>
            <input type="button" value="Martial Range" onClick={this.displayMR}/>
        </from>
        <p>Looking for: {this.state.Fil}</p>
        <table class="resultsTable">
            <tr id="labelsRow"><td>Weapon</td><td>Cost</td><td>Damage</td><td>Weight</td><td>Properties</td><td>Type</td></tr>
            {this.state.filtered.map(w =>(
            <tr key={w.id}><td>{w.id}</td><td>{w.cost}</td><td>{w.damage_dice} {w.damage_type}</td><td>{w.weight}</td><td>{w.properties}</td><td>{w.type}</td></tr>))}
        </table>
        </div>
        
    }
}

export default WeaponList