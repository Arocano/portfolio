import React from "react"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'
import { skills, experiences, socialLinks } from "../constants"
import CTA from "../components/CTA.jsx"
import { Link } from "react-router-dom"
import { arrow } from "../assets/icons/index.js"

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hola, Yo soy <span className="blue-gradient_text font-semibold 
          drop-shadow">Alejandro Rocano</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>Ingeniero de Software de Ecuador, interesado en el desarrollo de aplicaciones web
          y modelos de inteligencia articifial. Aquí te dejo mis redes sociales:</p>
      </div>

      <div className="flex flex-wrap my-5 gap-7">
        {socialLinks.map((social) => (
          <div className="lg:w-[400px] w-full " key={social.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${social.name}`} />

              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={social.iconUrl} alt="Project Icon" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>

            <div className=" flex flex-col">
              <div className=" flex items-center gap-2 font-poppins">
                <Link to={social.link} target="_blank" rel="noopener noreferrer"
                  className="font-semibold text-blue-600">
                  <h4 className="text-2xl font-poppins font-semibold">
                    {social.name}
                  </h4>
                </Link>
                <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text"> Mis habilidades </h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="py-16">
        <h3 className="subhead-text">Mi experiencia</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p> He trabajado para algunas organizaciones, las cuales me han ayudado a aumentar mis habilidades
            y trabajar en equipo con personas muy capacitadas. Aquí un resumen:</p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className="flex justify-center items-center w-full h-full">
                  <img src={experience.icon} alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>}
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{ borderBottom: '8px', borderStyle: 'solid', borderBottomColor: experience.iconBg }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base" style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  )
}

export default About