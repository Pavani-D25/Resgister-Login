// Courses.jsx
import React from 'react';

const Courses = ({ activeTab }) => {
  const renderCourses = () => {
    switch (activeTab) {
      case 'inProgress':
        return (
          <>
            <div className="box">
              <h3>HTML</h3>
              <p>80% - progress</p>
              <button>continue</button>
              <i className="fab fa-html5 html"></i>
            </div>
            <div className="box">
              <h3>CSS</h3>
              <p>50% - progress</p>
              <button>continue</button>
              <i className="fab fa-css3-alt css"></i>
            </div>
            <div className="box">
              <h3>JavaScript</h3>
              <p>30% - progress</p>
              <button>continue</button>
              <i className="fab fa-js-square js"></i>
            </div>
          </>
        );
      case 'explore':
        return <p>Explore new courses here.</p>;
      case 'incoming':
        return <p>Incoming courses will be displayed here.</p>;
      case 'finished':
        return <p>Finished courses will be displayed here.</p>;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderCourses()}
    </div>
  );
};

export default Courses;
