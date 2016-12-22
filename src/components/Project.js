import React from 'react';
import ProjectItem from './ProjectItem';

const Project = props => {
    const getWorkExperience = () => {
        const projectItems = [];
        props.projectData.forEach((val, index) => {
            projectItems.push(<ProjectItem key={index} prjectItemData={val}/>);
        })
        return projectItems;
    }

    return (
        <section className="project">
            <h2 className="text-uppercase"><i className="fa fa-lg fa-rocket"></i> System experience</h2>
            {getWorkExperience()}
        </section>
    );
};

export default Project;

