import React from 'react'
import {Link} from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'
const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
        {text}
        </p>
        <Link to ={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)
const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-white mx-5'>
         Hola, yo soy <span className='font-semibold'>Alejandro Rocano</span>👋
         <br/>
         Ingenierio de Software de Ecuador.
        </h1>
    ),
    2: (
       <InfoBox
       text="He trabajado para varias organizaciones, en las cuales he ido adquiriendo
       nuevas habilidades y experiencia."
       link="/about"
       btnText="Más Información"
       />
    ),
    3: (
        <InfoBox
       text="He participado en varios proyectos en estos años. Algunos te pueden impactar!"
       link="/projects"
       btnText="Visita mi portafolio"
       />
    ),
    4: (
        <InfoBox
       text="Estás interesado en desarrollar un proyecto? Estoy a pocos clicks de distancia"
       link="/contact"
       btnText="Hablemos"
       />
    )
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo