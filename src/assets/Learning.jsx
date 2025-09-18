import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { FaPlayCircle } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const App = () => {
  const containerStyle = {

    // width: "390px", // iPhone 13/14 screen width in px
    height: "844px", // iPhone 13/14 screen height in px
    // margin: "50px auto",
    // border: "16px solid black", // phone border
    // borderRadius: "50px", // curved edges
    position: "relative",
    // padding: "20px",
    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
    overflow: "hidden",
    backgroundColor: "#c4d3ff",
    fontFamily: "sans-serif",
  };

  const headerStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '24px',
    marginBottom: '30px',
    marginTop: '60px',
  };

  const cardContainerStyle = {
    display: 'flex',
    marginBottom: '16px',
    padding: '20px',
    gap: '20px',
  };

  const thumbnailStyle = {
    width: '150px',
    height: '80px',
    borderRadius: '8px',
    objectFit: 'cover',
    marginRight: '16px',
    position: 'relative',
  };

  const durationStyle = {
    position: 'absolute',
    bottom: '4px',
    right: '4px',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '10px',
    padding: '2px 4px',
    borderRadius: '4px',
  };

  const contentStyle = {
    flex: 1,
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '16px',
    marginBottom: '4px',
    textAlign: 'left',
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#4b5563', // gray-700
    textAlign: 'left',
  };

  const bottomNavStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    right: '20px',
    backgroundColor: 'white',
    borderRadius:'14px',
    borderTop: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px 6px',
    alignItems: 'center',
  };

  // const navItemStyle = {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   fontSize: '12px',
  //   color: '#000',
  // };

  const courses = [
    {
      thumbnail: 'https://i.ytimg.com/vi/HD13eq_Pmp8/hq720.jpg',
      title: 'HTML full course',
      description: 'Basic to Advance with practical sessions and realtime project',
      duration: '1:58:38',
    },
    {
      thumbnail: 'https://i.ytimg.com/vi/kCc8FmEb1nY/hqdefault.jpg',
      title: 'AI Introduction',
      description: 'AI is the next tech evolution. And like with all big changes in technology.',
      duration: '10:01',
    },
  ];

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>My Learning</h1>

      {courses.map((course, index) => (
        <div key={index} style={cardContainerStyle}>
          <div style={{ position: 'relative' }}>
            <img src={course.thumbnail} alt={course.title} style={thumbnailStyle} />
            <span style={durationStyle}>{course.duration}</span>
          </div>
          <div style={contentStyle}>
            <div style={titleStyle}>{course.title}</div>
            <div style={descriptionStyle}>{course.description}</div>
          </div>
        </div>
      ))}

      
            {/* bottom nav (fixed) */}
            <nav style={bottomNavStyle}>
      
              <div style={{ textAlign: "center", fontSize: 12 }}>
                <div style={{ fontSize: 18 }}>🏠</div>
                <div><Link to={'/homepage'} style={{color:"black"}}>Homepage</Link></div>
              </div>
              <div style={{ textAlign: "center", fontSize: 12 ,}}>
                <div style={{ fontSize: 18 }}>🔍</div>
                <div><Link to={'/searchpage'} style={{color:"black"}}>Search</Link></div>
              </div>
              <div style={{ textAlign: "center", fontSize: 12 }}>
                <div style={{ fontSize: 18 }}>▶️</div>
                <div>Learning</div>
              </div>
              <div style={{ textAlign: "center", fontSize: 12 }}>
                <div style={{ fontSize: 18 }}>👤</div>
                <div><Link to={'/account'} style={{color:"black"}}>Account</Link></div>
              </div>
            </nav>
    </div>
  );
};

export default App;
