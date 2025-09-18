import React from "react";
import { Link } from "react-router-dom";

const LearningAccount = () => {
  const phoneFrameStyle = {
    // width: "390px", // iPhone 13/14 screen width in px
    height: "844px", // iPhone 13/14 screen height in px
    // margin: "50px auto",
    // border: "16px solid black", // phone border
    // borderRadius: "50px", // curved edges
    position: "relative",
    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
    overflow: "hidden",
    backgroundColor: "#c4d3ff",
    fontFamily: "sans-serif",
  };

//   const notchStyle = {
//     position: "absolute",
//     top: 0,
//     left: "50%",
//     transform: "translateX(-50%)",
//     width: "210px",
//     height: "30px",
//     backgroundColor: "black",
//     borderRadius: "0 0 20px 20px",
//     zIndex: 10,
//   };

  const containerStyle = {
    padding: "20px",
    boxSizing: "border-box",
    height: "100hv",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const profileBoxStyle = {
    backgroundColor: "#786DF4",
    borderRadius: "15px",
    padding: "20px",
    color: "white",
    textAlign: "center",
    marginBottom: "30px",
    marginTop:"30px",
  };

  const profileIconStyle = {
    fontSize: "24px",
    backgroundColor: "black",
    color: "white",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
    
  };

  const menuStyle = {
    listStyle: "none",
    padding: 0,
    color: "black",
    flexGrow: 1,
    textAlign: "left",
    paddingLeft: "10px",
  };

  const menuItemStyle = {
    marginBottom: "20px",
    fontWeight: 600,
    fontSize: "16px",
    textTransform: "capitalize",
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

  return (
    <div style={phoneFrameStyle}>
     

      {/* App Content */}
      <div style={containerStyle}>
        <div style={profileBoxStyle}>
          <div style={profileIconStyle}>👤</div>
          <div>
            <strong>Learning Account</strong>
            <br />
            <br />
            <span>Name</span>
          </div>
        </div>

        <ul style={menuStyle}>
          <li style={menuItemStyle}>
            <Link to="/mylearning" style={{ color: "black", textDecoration: "none" }}>
              My Learning
            </Link>
          </li>

          <li style={menuItemStyle}>
            <Link to="/mentoring" style={{ color: "black", textDecoration: "none" }}>
              Mentoring
            </Link>
          </li>
          <li style={menuItemStyle}>
            <Link to="/completed" style={{ color: "black", textDecoration: "none" }}>
              Completed Courses
            </Link>
          </li>
          <li style={menuItemStyle}>
            <Link to="/certificate" style={{ color: "black", textDecoration: "none" }}>
              Certificate
            </Link>
          </li>
          <li style={menuItemStyle}>
            <Link to="/switchaccount" style={{ color: "black", textDecoration: "none" }}>
              Switch Account
            </Link>
          </li>
          <li style={menuItemStyle}>
            <Link to="/logout" style={{ color: "black", textDecoration: "none" }}>
              Logout
            </Link>
          </li>
        </ul>

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
                        <div><div><Link to={'/learning'} style={{color:"black"}}>Learning</Link></div></div>
                      </div>
                      <div style={{ textAlign: "center", fontSize: 12 }}>
                        <div style={{ fontSize: 18 }}>👤</div>
                        <div>Account</div>
                      </div>
                    </nav>
      </div>
    </div>
  );
};

export default LearningAccount;
