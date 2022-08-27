import axios from 'axios'
import { useEffect, useState } from 'react'

import './App.css'
import CardUser from './assets/components/CardUser'

function App() {


  //encadenamiento opcional


/** 
 * nombre completo
 * email
 * gender
 * location (city, country)
 */

  return (
    <div className="App">
      <CardUser />
      {/* <CardUser />
      <CardUser />
      <CardUser /> */}

    </div>
     
    
  )
}

export default App
