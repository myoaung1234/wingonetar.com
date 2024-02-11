import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Cards