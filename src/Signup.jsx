import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SkillSwapSignUp() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/homepage");
  };

  const [selectedRole, setSelectedRole] = useState("Learner");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const phoneFrameStyle = {
    // width: "390px",
    height: "844px",
    // 
    
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
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardStyle = {
    height: "65%",
    width: "80%",
    backgroundColor: "#1f3073ff",
    padding: "30px 20px",
    borderRadius: "20px",
    textAlign: "center",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const roleButtonStyle = (role) => ({
    flex: 1,
    padding: "10px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: selectedRole === role ? "#fff" : "#4b568c",
    color: selectedRole === role ? "#2e3b6f" : "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  });

  const inputStyle = {
    width: "60%",
    padding: "12px",
    borderRadius: "20px",
    border: "none",
    marginBottom: "15px",
  };

  const buttonStyle = {
    width: "68%",
    padding: "12px",
    borderRadius: "20px",
    border: "none",
    background: "linear-gradient(90deg, #4e5df2, #7a4ef2)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  };

  return (
    <div style={phoneFrameStyle}>
      {/* Notch */}
      {/* <div style={notchStyle}></div> */}

      <div style={containerStyle}>
        <div style={cardStyle}>
          <h2 style={{ marginBottom: "10px" }}>Sign up</h2>

          {/* Role Selector */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              padding: "10px",
              marginBottom: "10px",
              width: "100%",
            }}
          >
            <button onClick={() => setSelectedRole("Learner")} style={roleButtonStyle("Learner")}>
              Learner
            </button>
            <button onClick={() => setSelectedRole("Mentor")} style={roleButtonStyle("Mentor")}>
              Mentor
            </button>
          </div>

          {/* Email & Password */}
          <input
            type="text"
            name="email"
            placeholder="Username / email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
          />

          {/* Remember Me */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "60%",
              marginBottom: "15px",
              fontSize: "14px",
            }}
          >
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              style={{ marginRight: "5px" }}
            />
            <label>Remember me</label>
          </div>

          {/* Sign Up Button */}
          <button onClick={handleLogin} style={buttonStyle}>
            Sign up
          </button>

          {/* Login Link */}
          <p style={{ fontSize: "14px", margin: "10px 0" }}>
            Already have an account?{" "}
            <Link to={"/login"} style={{ color: "#4e5df2", textDecoration: "none" }}>
              Login
            </Link>
          </p>

          {/* Footer */}
          <p style={{ fontSize: "13px", color: "#ddd" }}>
            Welcome to upgrade <br />
            your skill
          </p>
        </div>
      </div>
    </div>
  );
}
