import React, { useState } from 'react'
import './Radiobuttons.css'

function RadioButtons({selectedRadioBtn,setSelectedRadioBtn}) {
    

  return (
      <div className='top_container'>
          
              <input
              className='radiobtn_admin '
              type='radio'
              name='radio-btn'
              value='admin'
              onClick={() => setSelectedRadioBtn("admin")}
              checked={selectedRadioBtn === "admin" ? true : false}

              /> Admin
          
              <input
              className='radiobtn_dev'
              type='radio'
              name='radio-btn'
              value='dev'
              onClick={() => setSelectedRadioBtn("developer")}
              checked={selectedRadioBtn === "developer" ? true: false}
          />Developer
      </div>
  )
}

export default RadioButtons
