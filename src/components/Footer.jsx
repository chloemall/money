import React from 'react'

const Footer = () => {
  return (
    <div className='footer' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <p>
      <span>© {new Date().getFullYear()} copyright:</span>
      <a href="https://home.yafreeka.com/"> yafreeka</a>
    </p>
  </div>
  
  )
}

export default Footer