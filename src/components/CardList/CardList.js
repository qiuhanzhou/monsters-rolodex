import {} from 'react'
import React from 'react'
import Card from '../Card/Card'
import './CardList.styles.css'

/* eslint-disable react/prop-types */

export default function CardList(props) {
  // attributes or props we defined when rendering out the html element
  console.log(props.cards)

  return (
    <ul className='card-list'>
      {props.cards.map((card) => (
        <Card key={card.id} name={card.name} email={card.email} id={card.id} />
      ))}
    </ul>
  )
}
