import {} from 'react'
import React from 'react'
import './Card.styles.css'

/* eslint-disable react/prop-types */

export default function Card(props) {
  //define attributes thats ready to be received from outside
  const { name, id, email } = props

  return (
    <li className='card' id={id}>
      <img
        alt={name}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </li>
  )
}
