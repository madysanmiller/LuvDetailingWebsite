import React from 'react';
import './Cards.css';
import CardItem from './CardItem.js';

function Cards() {
  return (
    <div className='cards'>
      <h1></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/FoamedAcura.jpg'
              text='Standard Exterior Detail'
              label='Exterior'
              path='/Services'
            />
            <CardItem
              src='images/CleanSTFloor.jpg'
              text='Standard Interior Detail'
              label='Interior'
              path='/Services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/DirtyAcuraFloor.jpg'
              text='Full Interior Detail'
              label='Interior-Before'
              path='/Services'
            />
            <CardItem
               src='images/CleanAcuraFloor.jpg'
               text='Full Interior Detail'
               label='Interior-After'
               path='/Services'
            />
            <CardItem
             src='images/TundraCleanFloor.jpg'
             text='Full Interior Detail'
             label='Interior'
             path='/Services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;