// import React, { useState } from 'react'
// import close from '../assets/close.svg';

// function PortfolioItem({ img, title, details }) {

//   const [modal,setModal]=useState(false);
//   const toggleModal=()=>{
//     setModal(!modal)
//   }

//   return (
//     <>
//       <div className="portfolio__item">
//         <img src={img} alt="" className='portfolio__img' />

//         <div className="portfolio__hover" onClick={toggleModal}>
//           <h3 className="portfolio__title">{title}</h3>
//         </div>

//         {modal&&(<div className="portfolio__modal">
//           <div className="portfolio__modal-content">
//             <img src={close} alt="" className='modal__close' onClick={toggleModal}/>
//             <h3 className='model_title'>{title}</h3>
//             <ul className="modal__list grid">
//               {details.map(({ icon, title, desc }, index) => {
//                 return (
//                   <li className='modal__item' key={index}>
//                     <span className='item__icon'>{icon}</span>


//                     <div>
//                     <span className='item__title'>{title}</span>
//                     <span className='item__details'>{desc}</span>
//                     </div>
//                   </li>
//                 )
//               })}
//             </ul>

//             <img src={img} alt="" className='modal__img' />

//           </div>
//         </div>)}
//       </div>
//     </>
//   )
// }

// export default PortfolioItem
import React from "react";
import parse from "html-react-parser";

function PortfolioItem({
  icon,
  year,
  title,
  desc,
  details,
  item1,
  item2,
  item3,
  item4,
  img,
}) {
  return (
    <>
      <div className=" resume__item1 resume__item">
        <div className="resume__icon">{icon}</div>

        <span className="resume__date">{year}</span>
        {/* Using parse to render HTML content */}
      </div>

      <div className="portfolio__style">
        <div className="portfolio">
          <h3 className="resume_subtitle">{parse(title)}</h3>
          <p className="resume_desc">{desc}</p>
          <p className="resume__description">{item1}</p>
          <p className="resume__description">{item2}</p>
          <p className="resume__description">{item3}</p>
          <p className="resume__description">{item4}</p>
        </div>
        <div style={{margin:'auto' ,justifyContent:'center'}}>{img && <img src={img} alt="image"  width="520px" height="420px " style={{objectFit:'cover'}}/>} </div>
      </div>
        <div className="separator"></div>

    </>
  );
}

export default PortfolioItem;
