import React from 'react';
import moment from 'moment';

const ProjectItem = props => {
    const getWorkDates = () => {
        const startdate = moment(props.prjectItemData.startDate).format('MMM, YYYY');
        let enddate = null;
        if (props.prjectItemData.endDate !== '') {
            enddate = moment(props.prjectItemData.endDate).format('MMM, YYYY');
        } else {
            enddate = 'Present';
        }

        return <span className='startdate'>{startdate} - {enddate}</span>
    }

    const getHighlights = props.prjectItemData.highlights.map(function(item, index) {
        return (<li key={index}>{item}</li>)
    });

    return (
        <div className="projectItem">
            <h3>{props.prjectItemData.role}, <span><a href={props.prjectItemData.website}>{props.prjectItemData.system}</a></span></h3>
            <p className="workDates">{getWorkDates()}</p>
            <p>{props.prjectItemData.summary} <a href={props.prjectItemData.demo}>Demo</a></p>
            <ul>{getHighlights}</ul>

        </div>
    )
};

export default ProjectItem;
