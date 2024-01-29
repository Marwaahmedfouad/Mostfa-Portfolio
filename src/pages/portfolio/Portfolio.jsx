// import React from 'react';
// import {portfolio} from '../../data'
// import PortfolioItem from '../../components/PortfolioItem'
// import "./portfolio.css";

// function Portfolio() {
//   return (
//     <>
//       <section className="portfolio section">
//         <h2 className="section__title">My <span>Certificates</span></h2>
// {/* By using {...item}, you can dynamically pass all properties of the item object without explicitly listing each one. It provides a more concise and maintainable way to pass props.
// If you were to remove {...item} from the code, the PortfolioItem component would not receive any props, and you would need to update PortfolioItem to accept individual props explicitly, like in the example above. The spread operator, in this context, is a convenient way to handle dynamic prop passing. */}
//       <div className="portfolio__container container grid">
//         {portfolio.map((item)=>{
//           return <PortfolioItem key={item.key} {...item}/>
//         })}
//       </div>
//       </section>
//     </>
//   )
// }

// export default Portfolio

import React from 'react';
import Info from '../../components/Info';
import Stats from '../../components/Stats';
import { FaDownload } from 'react-icons/fa';
import cv from '../../assets/mostafa.pdf';
import Skills from '../../components/Skills';
import { Certificate } from '../../data';
import PortfolioItem from '../../components/PortfolioItem';
import img from '../../assets/img1.png';
import "./portfolio.css";

function Portfolio() {
  return (
    <div>
      <main className="section container container_portfolio m-auto">
     
        {/*  Resume  section*/}
        <section className="Resume">
          <div className="resume__container ">
            <h2 className="section__title"><span>Certificates</span></h2>
            <div className="resume_data">
              {Certificate.map((val) => {
                if (val.category === 'experience') {
                  return(<PortfolioItem key={val.id} {...val}/>)
                }
              })}
            </div>       
          </div>
        </section>

    
      </main>
    </div>
  )
}

export default Portfolio
