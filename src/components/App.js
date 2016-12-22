import '../style/index.css';
import React, { PropTypes } from 'react';
import Profile from './Profile';
import About from './About';
import Work from './Work';
import Project from './Project'
import Skills from './Skills';
import Education from './Education';
import Volunteer from './Volunteer'
import '../style/index.css';


const App = props => {
    const profileData = props.jsonObj.basics;
    const aboutData = profileData.summary;
    const workData = props.jsonObj.work;
    const skillsData = props.jsonObj.skills;
    const educationData = props.jsonObj.education;
    const projectData = props.jsonObj.project;
    const volunteerData = props.jsonObj.volunteer;

    return (
        <div className="container">
            <div className="row">
                <aside className="col-md-4">
                    <div className="inner">
                        <Profile profileData={profileData} />
                    </div>
                </aside>
                <main className="col-md-8">
                    <div className="inner">
                        <About aboutData={aboutData} />
                        <Education educationData={educationData} />
                        <Work workData={workData} />
                        <Project projectData={projectData} />
                        <Volunteer volunteerData={volunteerData} />
                        <Skills skillsData={skillsData} />
                    </div>
                </main>
            </div>
        </div>
    )
};

App.propTypes = {
    jsonObj: PropTypes.object.isRequired
}

export default App;

