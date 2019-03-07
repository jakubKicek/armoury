import React, { Component } from 'react';
import './App.css';
import sM from './simpleMelee.json';
import sR from './simpleRanged.json';
import mM from './martialMelee.json';
import mR from './martialRanged.json';
import WeaponList from './WeaponList.js';


class App extends Component {
  
    constructor(props){
      super(props)
      this.state = {
          weaponBase: sM.concat(sR, mM, mR)
      };
    }  
    
    render(){
    return (
      <div className="App">
        <WeaponList items={this.state.weaponBase}></WeaponList>
      </div>
    );
  }

}

export default App;
