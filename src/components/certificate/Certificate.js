import React from 'react'
import "../certificate/Certificate.css"
import certified from "../images/certificate.jpg"
import { Divider } from 'antd';
import Foter from '../Footer/Foter';
const Certificate = (props) => {
  return (
    <div>
      <h2 className='my-4'>{props.heading}</h2>
      <div className="certificate-cont">
      <img src={certified} alt="" id='imge'/>
      </div>
    <Divider />
   <div className="eligibility-cont">
    <p id='eligibilitytext'>
   <h1 id='eligible-heading'>Eligibility</h1>
      1) Saylani courses admission Karachi 2022 is open for video editing, graphic designing, and others check the last date from this page. <br /><br /> Interested candidates can obtain admission in their favorable courses. <br /><br />
      2) Those educated candidates who wish to earn money online can participate in Saylani Welfare Trust offered admission.
    </p>
   </div>

    <Divider dashed />
   <div className="process-cont">
   <p id='processtext'>
     <h1 id='process-heading'>Process</h1>
      1) Saylani Digital Entrepreneurship Is a program where students from any discipline can learn more than 200 income streams options <br /><br /> based on their interest. <br /><br />
      2) With Collaboration to Saylani Mass IT Training Program and under the supervision of Sir Muhammad Ali Mughal . Bantwa Memon Jamat <br /><br /> Digital Institute announces
    </p>
   </div>

    <div className="footer">
     <Foter/>
    </div>
    </div>
  )
}

export default Certificate
