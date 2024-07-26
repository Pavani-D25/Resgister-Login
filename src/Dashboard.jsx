
// // import React from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import './Dashboard.css';
// // import { CSSTransition } from 'react-transition-group';

// // const Dashboard = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const { userData } = location.state || {};
// //   const userName = userData ? userData.username : 'Guest';

// //   const handleLogout = () => {
// //     // Clear any user-related data if needed
// //     navigate('/');
// //   };

// //   return (
// //     <CSSTransition in={true} appear={true} timeout={500} classNames="slide">
// //       <div className="App">
// //         <nav className="navbar">
// //           <h1>My App</h1>
// //           <ul>
// //             <li><a href="#home">Home</a></li>
// //             <li><a href="#about">About</a></li>
// //             <li><a href="#contact">Contact</a></li>
// //             <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
// //           </ul>
// //         </nav>
// //         <div className="container">
// //           <div className="sidebar">
// //             <ul>
// //               <li><a href="#section1">Section 1</a></li>
// //               <li><a href="#section2">Section 2</a></li>
// //               <li><a href="#section3">Section 3</a></li>
// //             </ul>
// //           </div>
// //           <div className="main-content">
// //             <h2>Welcome, {userName}!</h2>
// //             <p>This is the main content area.</p>
// //           </div>
// //         </div>
// //       </div>
// //     </CSSTransition>
// //   );
// // }

// // export default Dashboard;

















// // import React, { useState } from 'react';
// // import { useLocation, useNavigate } from 'react-router-dom';
// // import './Dashboard.css';
// // import { CSSTransition } from 'react-transition-group';

// // const Dashboard = () => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const { userData } = location.state || {};
// //   const userName = userData ? userData.username : 'Guest';

// //   const [showLogoutModal, setShowLogoutModal] = useState(false);

// //   const handleLogout = () => {
// //     setShowLogoutModal(true);
// //   };

// //   const confirmLogout = () => {
// //     setShowLogoutModal(false);
// //     navigate('/');
// //   };

// //   const cancelLogout = () => {
// //     setShowLogoutModal(false);
// //   };

// //   return (
// //     <CSSTransition in={true} appear={true} timeout={500} classNames="slide">
// //       <div className="App">
// //         <nav className="navbar">
// //           <h1>Assessment Portal</h1>
// //           <ul>
// //             <li><a href="#home">Home</a></li>
// //             <li><a href="#about">About</a></li>
// //             <li><a href="#contact">Contact</a></li>
// //             <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
// //           </ul>
// //         </nav>
// //         <div className="container">
// //           <div className="sidebar">
// //             <ul>
// //               <li><a href="#profile">Profile</a></li>
// //               <li><a href="#assessments">Assessments</a></li>
// //               <li><a href="#results">Results</a></li>
// //               <li><a href="#settings">Settings</a></li>
// //             </ul>
// //           </div>
// //           <div className="main-content">
// //             <h2>Welcome, {userName}!</h2>
// //             <div id="profile">
// //               <h3>User Profile</h3>
// //               <p>Name: {userName}</p>
// //               <p>Email: {userData ? userData.email : 'N/A'}</p>
// //             </div>
// //             <div id="assessments">
// //               <h3>Upcoming Assessments</h3>
// //               <ul>
// //                 <li>Assessment 1 - Due Date: 2024-06-01</li>
// //                 <li>Assessment 2 - Due Date: 2024-06-15</li>
// //                 <li>Assessment 3 - Due Date: 2024-07-01</li>
// //               </ul>
// //             </div>
// //             <div id="results">
// //               <h3>Recent Results</h3>
// //               <p>No results available</p>
// //             </div>
// //             <div id="settings">
// //               <h3>Settings</h3>
// //               <p>Update your account settings here.</p>
// //             </div>
// //           </div>
// //         </div>
// //         {showLogoutModal && (
// //           <div className="modal">
// //             <div className="modal-content">
// //               <h3>Confirm Logout</h3>
// //               <p>Are you sure you want to logout?</p>
// //               <button onClick={confirmLogout}>Yes</button>
// //               <button onClick={cancelLogout}>No</button>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </CSSTransition>
// //   );
// // }

// // export default Dashboard;



















// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './Dashboard.css';
// // import { CSSTransition } from 'react-transition-group';

// // const Dashboard = () => {
// //   const navigate = useNavigate();
// //   const [showLogoutModal, setShowLogoutModal] = useState(false);
// //   const [activeTab, setActiveTab] = useState('inProgress');

// //   const handleLogout = () => {
// //     setShowLogoutModal(true);
// //   };

// //   const confirmLogout = () => {
// //     setShowLogoutModal(false);
// //     navigate('/');
// //   };

// //   const cancelLogout = () => {
// //     setShowLogoutModal(false);
// //   };

// //   const renderCourses = () => {
// //     switch (activeTab) {
// //       case 'inProgress':
// //         return (
// //           <>
// //             <div className="box">
// //               <h3>HTML</h3>
// //               <p>80% - progress</p>
// //               <button>continue</button>
// //               <i className="fab fa-html5 html"></i>
// //             </div>
// //             <div className="box">
// //               <h3>CSS</h3>
// //               <p>50% - progress</p>
// //               <button>continue</button>
// //               <i className="fab fa-css3-alt css"></i>
// //             </div>
// //             <div className="box">
// //               <h3>JavaScript</h3>
// //               <p>30% - progress</p>
// //               <button>continue</button>
// //               <i className="fab fa-js-square js"></i>
// //             </div>
// //           </>
// //         );
// //       case 'explore':
// //         return <p>Explore new courses here.</p>;
// //       case 'incoming':
// //         return <p>Incoming courses will be displayed here.</p>;
// //       case 'finished':
// //         return <p>Finished courses will be displayed here.</p>;
// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <CSSTransition in={true} appear={true} timeout={500} classNames="slide">
// //       <div className="container">
// //         <nav>
// //           <ul>
// //             <li>
// //               <a href="#" className="logo">
// //                 <img src="/logo.jpg" alt="" />
// //                 <span className="nav-item">Dashboard</span>
// //               </a>
// //             </li>
// //             <li>
// //               <a href="#">
// //                 <i className="fas fa-home"></i>
// //                 <span className="nav-item">Home</span>
// //               </a>
// //             </li>
// //             <li>
// //               <a href="#profile">
// //                 <i className="fas fa-user"></i>
// //                 <span className="nav-item">Profile</span>
// //               </a>
// //             </li>
// //             <li>
// //               <a href="#wallet">
// //                 <i className="fas fa-wallet"></i>
// //                 <span className="nav-item">Wallet</span>
// //               </a>
// //             </li>
// //             <li>
// //               <a href="#analytics">
// //                 <i className="fas fa-chart-bar"></i>
// //                 <span className="nav-item">Analytics</span>
// //               </a>
// //             </li>
// //             <li>
// //               <a href="#tasks">
// //                 <i className="fas fa-tasks"></i>
// //                 <span className="nav-item">Tasks</span>
// //               </a>
// //             </li>
// //             <li>
// //               <a href="#settings">
// //                 <i className="fas fa-cog"></i>
// //                 <span className="nav-item">Settings</span>
// //               </a>
// //             </li>
// //             <li>
// //               <a href="#help">
// //                 <i className="fas fa-question-circle"></i>
// //                 <span className="nav-item">Help</span>
// //               </a>
// //             </li>
// //             <li>
// //               <a href="#" onClick={handleLogout} className="logout">
// //                 <i className="fas fa-sign-out-alt"></i>
// //                 <span className="nav-item">Log out</span>
// //               </a>
// //             </li>
// //           </ul>
// //         </nav>

// //         <section className="main">
// //           <div className="main-top">
// //             <h1>Skills</h1>
// //             <i className="fas fa-user-cog"></i>
// //           </div>
// //           <div className="main-skills">
// //             <div className="card">
// //               <i className="fas fa-laptop-code"></i>
// //               <h3>Web development</h3>
// //               <p>Join Over 1 million Students.</p>
// //               <button>Get Started</button>
// //             </div>
// //             <div className="card">
// //               <i className="fab fa-wordpress"></i>
// //               <h3>WordPress</h3>
// //               <p>Join Over 3 million Students.</p>
// //               <button>Get Started</button>
// //             </div>
// //             <div className="card">
// //               <i className="fas fa-palette"></i>
// //               <h3>Graphic design</h3>
// //               <p>Join Over 2 million Students.</p>
// //               <button>Get Started</button>
// //             </div>
// //             <div className="card">
// //               <i className="fab fa-app-store-ios"></i>
// //               <h3>iOS development</h3>
// //               <p>Join Over 1 million Students.</p>
// //               <button>Get Started</button>
// //             </div>
// //           </div>

// //           <section className="main-course">
// //             <h1>My courses</h1>
// //             <div className="course-box">
// //               <ul>
// //                 <li className={activeTab === 'inProgress' ? 'active' : ''} onClick={() => setActiveTab('inProgress')}>In progress</li>
// //                 <li className={activeTab === 'explore' ? 'active' : ''} onClick={() => setActiveTab('explore')}>Explore</li>
// //                 <li className={activeTab === 'incoming' ? 'active' : ''} onClick={() => setActiveTab('incoming')}>Incoming</li>
// //                 <li className={activeTab === 'finished' ? 'active' : ''} onClick={() => setActiveTab('finished')}>Finished</li>
// //               </ul>
// //               <div className="course">
// //                 {renderCourses()}
// //               </div>
// //             </div>
// //           </section>
// //         </section>

// //         {showLogoutModal && (
// //           <div className="modal">
// //             <div className="modal-content">
// //               <h3>Confirm Logout</h3>
// //               <p>Are you sure you want to logout?</p>
// //               <button onClick={confirmLogout}>Yes</button>
// //               <button onClick={cancelLogout}>No</button>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </CSSTransition>
// //   );
// // }

// // export default Dashboard;








































// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Dashboard.css';
// import { CSSTransition } from 'react-transition-group';

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [showLogoutModal, setShowLogoutModal] = useState(false);
//   const [activeTab, setActiveTab] = useState('inProgress');

//   const handleLogout = () => {
//     setShowLogoutModal(true);
//   };

//   const confirmLogout = () => {
//     setShowLogoutModal(false);
//     navigate('/');
//   };

//   const cancelLogout = () => {
//     setShowLogoutModal(false);
//   };

//   const renderCourses = () => {
//     switch (activeTab) {
//       case 'inProgress':
//         return (
//           <>
//             <div className="box">
//               <h3>HTML</h3>
//               <p>80% - progress</p>
//               <button>continue</button>
//               <i className="fab fa-html5 html"></i>
//             </div>
//             <div className="box">
//               <h3>CSS</h3>
//               <p>50% - progress</p>
//               <button>continue</button>
//               <i className="fab fa-css3-alt css"></i>
//             </div>
//             <div className="box">
//               <h3>JavaScript</h3>
//               <p>30% - progress</p>
//               <button>continue</button>
//               <i className="fab fa-js-square js"></i>
//             </div>
//           </>
//         );
//       case 'explore':
//         return <p>Explore new courses here.</p>;
//       case 'incoming':
//         return <p>Incoming courses will be displayed here.</p>;
//       case 'finished':
//         return <p>Finished courses will be displayed here.</p>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <CSSTransition in={true} appear={true} timeout={500} classNames="slide">
//       <div className="container">
//         <nav className="sidebar">
//           <ul>
//             <li>
//               <a href="#" className="logo">
//                 <img src="/logo.jpg" alt="" />
//                 <span className="nav-item">Dashboard</span>
//               </a>
//             </li>
//             <li>
//               <a href="#">
//                 <i className="fas fa-home"></i>
//                 <span className="nav-item">Home</span>
//               </a>
//             </li>
//             <li>
//               <a href="#profile">
//                 <i className="fas fa-user"></i>
//                 <span className="nav-item">Profile</span>
//               </a>
//             </li>
//             <li>
//               <a href="#wallet">
//                 <i className="fas fa-wallet"></i>
//                 <span className="nav-item">Wallet</span>
//               </a>
//             </li>
//             <li>
//               <a href="#analytics">
//                 <i className="fas fa-chart-bar"></i>
//                 <span className="nav-item">Analytics</span>
//               </a>
//             </li>
//             <li>
//               <a href="#tasks">
//                 <i className="fas fa-tasks"></i>
//                 <span className="nav-item">Tasks</span>
//               </a>
//             </li>
//             <li>
//               <a href="#settings">
//                 <i className="fas fa-cog"></i>
//                 <span className="nav-item">Settings</span>
//               </a>
//             </li>
//             <li>
//               <a href="#help">
//                 <i className="fas fa-question-circle"></i>
//                 <span className="nav-item">Help</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" onClick={handleLogout} className="logout">
//                 <i className="fas fa-sign-out-alt"></i>
//                 <span className="nav-item">Log out</span>
//               </a>
//             </li>
//           </ul>
//         </nav>

//         <div className="main-content">
//           <header className="top-nav">
//             <ul>
//               <li><a href="#">Home</a></li>
//               <li><a href="#profile">Profile</a></li>
//               <li><a href="#settings">Settings</a></li>
//               <li><a href="#help">Help</a></li>
//               <li><a href="#" onClick={handleLogout}>Log out</a></li>
//             </ul>
//           </header>

//           <section className="main">
//             <section className="main-course">
//               <h1>My courses</h1>
//               <div className="course-box">
//                 <ul>
//                   <li className={activeTab === 'inProgress' ? 'active' : ''} onClick={() => setActiveTab('inProgress')}>In progress</li>
//                   <li className={activeTab === 'explore' ? 'active' : ''} onClick={() => setActiveTab('explore')}>Explore</li>
//                   <li className={activeTab === 'incoming' ? 'active' : ''} onClick={() => setActiveTab('incoming')}>Incoming</li>
//                   <li className={activeTab === 'finished' ? 'active' : ''} onClick={() => setActiveTab('finished')}>Finished</li>
//                 </ul>
//                 <div className="course">
//                   {renderCourses()}
//                 </div>
//               </div>
//             </section>
//           </section>
//         </div>

//         {showLogoutModal && (
//           <div className="modal">
//             <div className="modal-content">
//               <h3>Confirm Logout</h3>
//               <p>Are you sure you want to logout?</p>
//               <button onClick={confirmLogout}>Yes</button>
//               <button onClick={cancelLogout}>No</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </CSSTransition>
//   );
// }

// export default Dashboard;

































// import React, { useState, useEffect } from 'react';
// import './Dashboard.css';
// import 'boxicons/css/boxicons.min.css';
// import { useNavigate } from 'react-router-dom';
// import logo from './assets/logo.png'; // Adjust the path based on your project structure

// const Dashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [showLogoutModal, setShowLogoutModal] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isDarkMode) {
//       document.body.classList.add('dark');
//     } else {
//       document.body.classList.remove('dark');
//     }
//   }, [isDarkMode]);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const handleLogout = () => {
//     setShowLogoutModal(true);
//   };

//   const confirmLogout = () => {
//     setShowLogoutModal(false);
//     navigate('/');
//   };

//   const cancelLogout = () => {
//     setShowLogoutModal(false);
//   };

//   return (
//     <div className={isDarkMode ? 'dark' : ''}>
//       <nav className={`sidebar ${isSidebarOpen ? '' : 'close'}`}>
//         <header>
//           <div className="image-text">
//             <span className="image">
//               <img src={logo} alt="Logo" />
//             </span>

//             <div className="text logo-text">
//               <span className="name">BIT</span>
//               <span className="profession">Assessment Portal</span>
//             </div>
//           </div>

//           <i className='bx bx-chevron-right toggle' onClick={toggleSidebar}></i>
//         </header>

//         <div className="menu-bar">
//           <div className="menu">
//             <li className="search-box">
//               <i className='bx bx-search icon'></i>
//               <input type="text" placeholder="Search..." />
//             </li>

//             <ul className="menu-links">
//               <li className="nav-link">
//                 <a href="#">
//                   <i className='bx bx-home-alt icon'></i>
//                   <span className="text nav-text">Dashboard</span>
//                 </a>
//               </li>

//               <li className="nav-link">
//                 <a href="#">
//                   {/* <i className='bx bx-bar-chart-alt-2 icon'></i> */}
//                   <i className='bx bxl-graphql'></i>
//                   <span className="text nav-text">Courses</span>
//                 </a>
//               </li>

//               <li className="nav-link">
//                 <a href="#">
//                   {/* <i className='bx bx-bell icon'></i> */}
//                   <i class='bx bxl-codepen'></i>
//                   <span className="text nav-text">My Courses</span>
//                 </a>
//               </li>

//               <li className="nav-link">
//                 <a href="#">
//                   {/* <i className='bx bx-pie-chart-alt icon'></i> */}
//                   <i class='bx bx-book-reader' ></i>
//                   <span className="text nav-text">Materials</span>
//                 </a>
//               </li>

//               <li className="nav-link">
//                 <a href="#">
//                   <i className='bx bx-heart icon'></i>
//                   <span className="text nav-text">Analytics</span>
//                 </a>
//               </li>

//               {/* <li className="nav-link">
//                 <a href="#">
//                   <i className='bx bx-wallet icon'></i>
//                   <span className="text nav-text">Wallets</span>
//                 </a>
//               </li> */}
//             </ul>
//           </div>

//           <div className="bottom-content">
//             <li className="">
//               <a href="#" onClick={handleLogout}>
//                 <i className='bx bx-log-out icon'></i>
//                 <span className="text nav-text">Logout</span>
//               </a>
//             </li>

//             {showLogoutModal && (
//               <div className="modal">
//                 <div className="modal-content">
//                   <h3>Confirm Logout</h3>
//                   <p>Are you sure you want to logout?</p>
//                   <button onClick={confirmLogout}>Yes</button>
//                   <button onClick={cancelLogout}>No</button>
//                 </div>
//               </div>
//             )}

//             <li className="mode">
//               <div className="sun-moon">
//                 <i className='bx bx-moon icon moon'></i>
//                 <i className='bx bx-sun icon sun'></i>
//               </div>
//               <span className="mode-text text">Dark mode</span>

//               <div className="toggle-switch" onClick={toggleDarkMode}>
//                 <span className="switch"></span>
//               </div>
//             </li>
//           </div>
//         </div>
//       </nav>

//       <section className="home">
//         <div className="text">Dashboard Sidebar</div>
//       </section>
//     </div>
//   );
// };

// export default Dashboard;






















import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import 'boxicons/css/boxicons.min.css';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png'; 

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    navigate('/');
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <nav className={`sidebar ${isSidebarOpen ? '' : 'close'}`}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src={logo} alt="Logo" />
            </span>

            <div className="text logo-text">
              <span className="name">BIT</span>
              <span className="profession">Assessment Portal</span>
            </div>
          </div>

          <i className='bx bx-chevron-right toggle' onClick={toggleSidebar}></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <i className='bx bx-search icon'></i>
              <input type="text" placeholder="Search..." />
            </li>

            <ul className="menu-links">
              <li className="nav-link">
                <a href="#">
                  <i className='bx bx-home-alt icon'></i>
                  <span className="text nav-text">Dashboard</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className='bx bxs-book icon'></i>
                  <span className="text nav-text">Courses</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className='bx bxs-graduation icon'></i>
                  <span className="text nav-text">My Courses</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className='bx bx-book icon'></i>
                  <span className="text nav-text">Materials</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className='bx bx-chart icon'></i>
                  <span className="text nav-text">Analytics</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li className="">
              <a href="#" onClick={handleLogout}>
                <i className='bx bx-log-out icon'></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>

            {showLogoutModal && (
              <div className="modal">
                <div className="modal-content">
                  <h3>Confirm Logout</h3>
                  <p>Are you sure you want to logout?</p>
                  <button onClick={confirmLogout}>Yes</button>
                  <button onClick={cancelLogout}>No</button>
                </div>
              </div>
            )}

            <li className="mode">
              <div className="sun-moon">
                <i className='bx bx-moon icon moon'></i>
                <i className='bx bx-sun icon sun'></i>
              </div>
              <span className="mode-text text">Dark mode</span>

              <div className="toggle-switch" onClick={toggleDarkMode}>
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>

      <section className="home">
        <div className="text">Detection and Recomendation</div>
      </section>
    </div>
  );
};

export default Dashboard;
