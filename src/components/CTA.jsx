import React from 'react'
import { Link } from 'react-router-dom'

const CTA=()=> {
  return (
    <section className='cta'>
        <p className='cta-text'>
        Tienes un proyecto en mente? <br className='sm:block hidden'/>
        Vamos a trabajar en ello!
        </p>
        <Link to="/contact" className='btn'>
        Contáctame
        </Link>
    </section>
   
  )
}

export default CTA