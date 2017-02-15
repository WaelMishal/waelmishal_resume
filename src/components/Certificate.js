import React from 'react';
import moment from 'moment';

const Certificate = props => {
    const getCertificateData = props.certificateData.map(function(item, index) {
      
      
      return (
          <div key={index}>
            <h3>{item.CertificationName} By {item.CertificationAuthority} </h3>
            <br></br>
            <img role="presentation" className="certificate center-block "src={item.picture} width="600" height="300"/>
             <hr></hr>
          </div>
        )
    });

    return (
      <section className="education">
        <h2 className="text-uppercase"><i className="fa fa-lg fa fa-certificate"></i> Training and Certification</h2>
        {getCertificateData}
      </section>
    )
};

export default Certificate;