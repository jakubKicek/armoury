import React, { Component } from 'react';
import './App.css';
import weapons from './weapons.json';
import WeaponList from './WeaponList.js';


class App extends Component {
  
    constructor(props){
      super(props)
      this.state = {
          searchphrase: " ",
      };
//      weapons.forEach(w => {
//        const wItem = <WeaponItem key={w.id} id={w.id} cost={w.cost} damage_dice={w.damage_dice} damage_type={w.damage_type} weight={w.weight} properties={w.properties}></WeaponItem>
//        this.state.resultsList.push(wItem);
    }  
  
//    filterResults(event){        
//        weapons.forEach(w => {
//        if(w.id.includes(event.target.value+'')){
//            const wItem = <WeaponItem key={w.id} id={w.id} cost={w.cost} damage_dice={w.damage_dice} damage_type={w.damage_type} weight={w.weight} properties={w.properties}></WeaponItem>
//            this.state.resultsList.push(wItem);
//        }
//    })
//    }
//    
//    componentDidMount(){
//              weapons.forEach(w => {
//        const wItem = <WeaponItem key={w.id} id={w.id} cost={w.cost} damage_dice={w.damage_dice} damage_type={w.damage_type} weight={w.weight} properties={w.properties}></WeaponItem>
//        this.state.resultsList.push(wItem);
//    }) 
//    }
//    
    
    render(){
    return (
      <div className="App">
        <WeaponList items={weapons}></WeaponList>
      </div>
    );
  }

}

export default App;
