import React from "react";
import parse from "html-react-parser";

function ResumeItem({
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
      <div style={{ paddingBottom: '30px' }}>

        <div className="resume__item resume__style" >
          <div className="resume__icon">{icon}</div>

          <span className="resume__date">{year}</span>
          {/* Using parse to render HTML content */}
        </div>

        <div>
          {/* <div style={{ display: 'grid', gridTemplateColumns: ' repeat(2, 1fr) ' ,gap:"100px" }}> */}
          <div className="" style={{ paddingLeft: '50px', paddingTop: '10px' }}>
            <div className="portfolio">
              <h3 className="resume_subtitle">{parse(title)}</h3>
              <p className="resume_desc">{desc}</p>
              <p className="resume__description">{item1}</p>
              <p className="resume__description">{item2}</p>
              <p className="resume__description">{item3}</p>
              <p className="resume__description">{item4}</p>
            </div>
          </div>
          <div style={{ margin: 'auto' }}>{img && <img src={img} alt="image" width="300px" height="200px " style={{ objectFit: 'cover' }} />} </div>
        </div>
      </div>

    </>
  );
}

export default ResumeItem;
