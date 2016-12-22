import React from 'react';
import moment from 'moment';

const Volunteer = props => {
    const getVolunteer = props.volunteerData.map(function(item, index) {
  		const startdate = moment(item.startDate).format('MMM, YYYY');
  		const enddate = moment(item.endDate).format('MMM, YYYY');
  		return (
          <div key={index}>
            <h3>{item.role}</h3>
  				  <h4>{item.Organization}</h4>
  				  <p>Joined: {startdate} - {enddate}</p>
  				</div>
        )
  	});

  	return (
  	  <section className="volunteer">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-mortar-board"></i> VOLUNTEER EXPERIENCE</h2>
        {getVolunteer}
      </section>
  	)
};

export default Volunteer;
