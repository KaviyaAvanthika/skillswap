import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SkillSwap() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/homepage");
  };

  const phoneFrameStyle = {
    // width: "100%",
    height: "844px",
    // margin: "50px auto",
    // border: "16px solid black",
    // borderRadius: "50px",
    boxShadow: "0 18px 40px rgba(10, 10, 20, 0.25)",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#c4d3ff",
    fontFamily: "Arial, sans-serif",
  };

  // const notchStyle = {
  //   position: "absolute",
  //   top: 0,
  //   left: "50%",
  //   transform: "translateX(-50%)",
  //   width: "210px",
  //   height: "30px",
  //   backgroundColor: "black",
  //   borderRadius: "0 0 20px 20px",
  //   zIndex: 10,
  // };

  const containerStyle = {
    padding: "40px 20px 40px 20px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  };

  const inputStyle = {
    width: "70%",
    padding: "14px 16px",
    marginBottom: "16px",
    borderRadius: "30px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "70%",
    padding: "14px 0",
    background: "linear-gradient(90deg, #4F46E5, #6366F1)",
    color: "white",
    border: "none",
    borderRadius: "30px",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "20px",
  };

  return (
    <div style={phoneFrameStyle}>
      {/* Notch */}
      {/* <div style={notchStyle}></div> */}

      {/* Login Container */}
      <div style={containerStyle}>
        <h1 style={{ color: "#5B21B6", fontSize: "28px", fontWeight: "bold", marginBottom: "4px" }}>
          Skillswap 📘
        </h1>
        <p style={{ color: "#555", marginBottom: "30px" }}>Learn and teach in one place</p>

        {/* Inputs */}
        <input type="email" placeholder="Email" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />

        {/* Forgot Password */}
        <a
          href="#"
          style={{
            color: "#6D28D9",
            fontSize: "13px",
            marginBottom: "20px",
            textDecoration: "none",
            alignSelf: "flex-start",
            marginLeft: "15%",
          }}
        >
          Forgot Password?
        </a>

        {/* Login Button */}
        <button onClick={handleLogin} style={buttonStyle}>
          Login
        </button>

        {/* Sign Up */}
        <p style={{ fontSize: "14px", color: "#333" }}>
          Don’t have an account?{" "}
          <Link to={"/signup"} style={{ color: "#4F46E5", textDecoration: "none" }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
