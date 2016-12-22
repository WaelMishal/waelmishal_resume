import React from 'react';
import moment from 'moment';

const Volunteer = props => {
    const getVolunteer = props.volunteerData.map(function(item, index) {
  		const startdate = moment(item.startDate).format('MMM, YYYY');
        let enddate = null;
        if (props.volunteerData.endDate == '') {
            enddate = moment(props.volunteerData.endDate).format('MMM, YYYY');
        } else {
            enddate = 'Present';
        }

  		return (
          <div key={index}>
              <h3>{item.role} at {item.Organization}</h3>
              <p className="workDates"><p>Joined: {startdate} - {enddate}</p></p>
		  </div>
        )
  	});

  	return (
  	  <section className="volunteer">
        <h2 className="text-uppercase"><i className="fa fa-lg fa fa-users"></i> VOLUNTEER EXPERIENCE AND LEADERSHIP</h2>
        {getVolunteer}
      </section>
  	)
};

export default Volunteer;
