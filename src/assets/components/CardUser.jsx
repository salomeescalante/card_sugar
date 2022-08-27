import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CardUser = () => {


    const [user, setUser] = useState({})

  
    useEffect(() => {
      const URL = 'https://randomuser.me/api/'
      axios.get(URL)
       .then(res => setUser(res.data.results[0]))
       .catch(err => console.log(err.message))
    }, [])
  
  return (
    <article className='card_img_info'>
      
    <ul className='info_card'>
    <h1 className='title_card'>SOLO SOLTEROS</h1><br />
      <div>
      <img className='img_card' src={user.picture?.large} alt="" /><br /><h1 className='title_info'>Búscame !!!</h1>
      </div><br />
      <li><b>Nombre: </b>{user.name?.title} <span>{user.name?.first}</span>{user.name?.last}</li>
      <li><b>Email: </b>{user.email}</li>
      <li><b>Gender: </b>{user.gender}</li>
      <li><b>Location: </b>{user.location?.city}<span> {user.location?.country}</span> </li>
      <a href="#"><img className='sumar_amigo' src="public/sumar_amigo.png" alt="" /></a>
    </ul>

    
    </article>
    

  )
}

export default CardUser