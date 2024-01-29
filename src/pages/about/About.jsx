import React from 'react';
import Info from '../../components/Info';
import Stats from '../../components/Stats';
import { FaDownload } from 'react-icons/fa';
import cv from '../../assets/mostafa.pdf';
import Skills from '../../components/Skills';
import { resume } from '../../data';
import ResumeItem from '../../components/ResumeItem';
import img from '../../assets/img1.png';
import './about.css';

function About() {
  return (
    <div>
      <main className="section container  m-auto">
        {/*  personalInfo  section*/}
        <section className="about">
          {/* part1 */}
          <h2 className="section__title">
            About <span>Me</span>
          </h2>


          {/* part2 */}
          <div className="about__container grid ">
            <div className="about__info">

              <h3 className="section__subtitle">
                personal Informations
              </h3>


              <ul className='info__list grid'>
                <Info />
              </ul>


              <a href={cv} download='' className='button'>
                Download Cv <span className='button__icon'>
                  <FaDownload />
                </span>
              </a>


            </div>


            <div >
              <img src={img} alt='' className='stats__item' width='100%' style={{ borderRadius: '10px' }}></img>
            </div>





            <div className="stats grid">
              <Stats className="stats__item" />
            </div>
          </div>


        </section>

        <div className="separator"></div>
        {/*  Resume  section*/}
        <section className="Resume">
          <h3 className="section__subtitle subtitle__center">Experience</h3>
          <div className="resume_data">
            {resume.map((val) => {
              if (val.category === 'experience') {
                return (<ResumeItem key={val.id} {...val} />)
              }
            })}
          </div>



          <div className="separator"></div>
          <h3 className="section__subtitle subtitle__center">Education</h3>
          <div className="resume__container ">
            <div className="resume_data">
              {resume.map((val) => {
                if (val.category === 'education') {
                  return (<ResumeItem key={val.id} {...val} />)
                }
              })}
            </div>
          </div>
        </section>




        {/* <section className="Resume" >
          <h3 className="section__subtitle subtitle__center">Experience & Education</h3>
          <div className="resume__container grid" >
            <div className="resume_data" >
              {resume.map((val) => {
                if (val.category === 'experience') {
                  return (<ResumeItem key={val.id} {...val} />)
                }
              })}
            </div>
            <div className="resume_data">
              {resume.map((val) => {
                if (val.category === 'education') {
                  return (<ResumeItem key={val.id} {...val} />)
                }
              })}
            </div>

          </div>
        </section> */}

        {/*  skills  section*/}
        <div className="separator"></div>
        <section className="skills">
          <h3 className="section__subtitle subtitle__center">My Skills</h3>
          <div className="skills__container grid ">
            <Skills />
          </div>
        </section>
      </main>
    </div>
  )
}

export default About
