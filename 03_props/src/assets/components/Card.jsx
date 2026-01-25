import React from 'react'

const Card = (props) => {

    console.log(props);
  return (
    <div className='card'>
            <img src={props.img} alt="" />
              <h1>{props.user}</h1>
              <h2>the age of {props.user} = {props.age}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit porro harum nesciunt, cupiditate, facere eveniet fugiat explicabo</p>
              <button>vew Profile</button>
          </div>
  )
}

export default Card 