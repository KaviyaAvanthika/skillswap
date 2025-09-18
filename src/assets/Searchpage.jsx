import React from "react";
import { FaSearch } from "react-icons/fa";
import {Link, useNavigate} from 'react-router-dom'

const tagStyle = {
  color: "black",
  fontSize: "12px",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function SearchPage() {
  const tags = ["AI", "ML", "Data Analyst", "Data Science", "Python", "Java"];

  return (
    <>
  

      {/* Main Mobile Frame */}
      <div
        style={{
          // width: "390px",
          height: "844px",
          margin: "0 auto",
          // border: "16px solid black",
          // padding: "10px",
          // borderRadius: "40px",
          backgroundColor: "#c4d3ff",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "Arial, sans-serif",
          boxShadow: "0 18px 40px rgba(10, 10, 20, 0.25)",
        }}
      >
        <div
          className="min-h-screen w-[390px] mx-auto bg-[#c9d6ff] flex flex-col justify-between rounded-2xl"
          style={{ marginTop: "50px", padding: "20px" }}
        >
          {/* Search Bar */}
          <div className="p-4">
            <div className="flex items-center bg-gray-500 rounded-full px-4 py-2">
              
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-white w-full placeholder-white"
                style={{borderRadius:"20px",height:"30px",textAlign:"left",paddingLeft:'12px',}}/>
            </div>

            {/* Top Searches */}
            <h2 className="mt-6 font-bold text-lg text-black" style={{textAlign:"left",marginTop:'40px'}}>Top searches</h2>
            {/* <div className="flex flex-wrap gap-3 mt-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white text-black rounded-full shadow-sm text-sm"
                >
                  {tag}
                </span>
              ))}
            </div> */}

                {/* Tag Grid */}
              {/* ✅ Tags Grid (grid + flex centered items) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, auto)", // 3 columns
                  gridTemplateRows: "repeat(2, 1fr)",   // 2 rows
                  gap: "9px",
                  marginTop: "20px",
                  alignItems :"center",
                }}
              >
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                      padding: "10px",
                      fontSize: "15px",
                   
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: "transform 0.2s ease-in-out",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <br />
            {/* See more */}
            <div className="mt-4 text-sm text-black font-medium cursor-pointer" 
              style={{textAlign:"left", padding:"1px",marginLeft:"10px"}}
                  >
              see more
            </div>
          </div>
        </div>

        {/* Bottom Nav */}
        <nav
          style={{
            marginTop: "auto",
            marginLeft: "20px",
            marginRight: "20px",
            marginBottom: "20px",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 8px 30px rgba(2,6,23,0.08)",
            display: "flex",
            justifyContent: "space-around",
            padding: "10px 6px",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center", fontSize: 12 }}>
            <div style={{ fontSize: 18 }}>🏠</div>
            <div><Link to={'/homepage'}style={{color:"black"}}>Home</Link></div>
          </div>
          <div style={{ textAlign: "center", fontSize: 12 }}>
            <div style={{ fontSize: 18 }}>🔍</div>
            <div>Search</div>
          </div>
          <div style={{ textAlign: "center", fontSize: 12 }}>
            <div style={{ fontSize: 18 }}>▶️</div>
            <div><Link to={'/learning'}style={{color:"black"}}>Learning</Link></div>
          </div>
          <div style={{ textAlign: "center", fontSize: 12 }}>
            <div style={{ fontSize: 18 }}>👤</div>
            <div><Link to={'/account'}style={{color:"black"}}>Account</Link></div>
          </div>
        </nav>
      </div>
    </>
  );
}
