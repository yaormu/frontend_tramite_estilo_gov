import React from 'react'
import "./FormInput.css"

export const FormInput = (props) => {
  return (
    <div className='col-md-6'>
      {/* <label>Username</label> */}
      <input 
        name={props.name}
        placeholder={props.placeholder} 
      />
    </div>
  )
}
