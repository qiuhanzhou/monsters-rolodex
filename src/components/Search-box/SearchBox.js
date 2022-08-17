import {} from 'react'
import React from 'react'
import './SearchBox.styles.css'

/* eslint-disable react/prop-types */

export default function SearchBox(props) {
  return (
    <input
      className={`search-box ${props.className}`}
      type='search'
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  )
}
