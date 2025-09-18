// SkillSwap.jsx
import React, { useRef } from "react";
import { Link } from "react-router-dom";

/* Sample data */
const courses = {
  recommended: [
    {
      id: 1,
      title: "HTML full course",
      desc: "Basic to Advance with practical sessions and realtime project",
      thumb: "https://img.youtube.com/vi/UB1O30fR-EE/0.jpg",
      duration: "1:58:38",
    },
    {
      id: 2,
      title: "CSS full course",
      desc: "Advance styling with real-world projects",
      thumb: "https://img.youtube.com/vi/1Rs2ND1ryYc/0.jpg",
      duration: "2:15:22",
    },
    {
      id: 5,
      title: "JS Crash Course",
      desc: "Learn JS fundamentals with projects",
      thumb: "https://img.youtube.com/vi/hdI2bqOjy3c/0.jpg",
      duration: "3:20:10",
    },
  ],
  topIT: [
    {
      id: 3,
      title: "AI Introduction",
      desc: "Learn ML vs GenAI basics",
      thumb: "https://img.youtube.com/vi/aircAruvnKk/0.jpg",
      duration: "10:01",
    },
    {
      id: 4,
      title: "Data Analytics",
      desc: "Master Data Analysis with Python",
      thumb: "https://img.youtube.com/vi/xC-c7E5PK0Y/0.jpg",
      duration: "10:45:11",
    },
  ],
};

/* Card component */
function CourseCard({ course }) {
  return (
    <div
      style={{
        width: 180,
        maxWidth: 260,
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        overflow: "hidden",
        // margin: "0 10px",
        flex: "0 0 auto", // prevents shrinking so horizontal overflow happens
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={course.thumb}
          alt={course.title}
          style={{
            width: "100%",
            height: 140,
            objectFit: "cover",
            display: "block",
          }}
        />
        <span
          style={{
            position: "absolute",
            bottom: 8,
            right: 8,
            background: "rgba(0,0,0,0.75)",
            color: "#fff",
            padding: "4px 8px",
            borderRadius: 10,
            fontSize: 12,
          }}
        >
          {course.duration}
        </span>
      </div>

      <div style={{ padding: 12 }}>
        <h3
          style={{
            fontSize: 14,
            fontWeight: 700,
            margin: 0,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {course.title}
        </h3>
        <p
          style={{
            fontSize: 12,
            color: "#5b616b",
            marginTop: 8,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {course.desc}
        </p>
      </div>
    </div>
  );
}

/* Horizontal carousel with drag-to-scroll for desktop, native swipe on touch */
function HorizontalCarousel({ children, className = "" }) {
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handlePointerDown = (e) => {
    // Let touch keep native behavior (mobile swipe). Only intercept mouse/pen for custom drag.
    if (e.pointerType === "touch") return;

    const el = sliderRef.current;
    isDragging.current = true;
    startX.current = e.clientX;
    scrollLeft.current = el.scrollLeft;
    try {
      el.setPointerCapture(e.pointerId);
    } catch (err) {}
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    // prevent accidental text selection and perform scroll
    e.preventDefault();
    const el = sliderRef.current;
    const x = e.clientX;
    const walk = x - startX.current; // distance moved
    el.scrollLeft = scrollLeft.current - walk;
  };

  const stopDragging = (e) => {
    const el = sliderRef.current;
    if (!el) return;
    isDragging.current = false;
    try {
      if (e && e.pointerId) el.releasePointerCapture(e.pointerId);
    } catch (err) {}
    el.style.cursor = "grab";
    el.style.removeProperty("user-select");
  };

  return (
    <>
      {/* hides scrollbar on Chrome/Edge/Safari/Firefox */}
      <style>
        {`
          .hide-scroll {
            -ms-overflow-style: none; /* IE/Edge */
            scrollbar-width: none; /* Firefox */
          }
          .hide-scroll::-webkit-scrollbar { display: none; } /* Chrome/Safari */
        `}
      </style>

      <div
        ref={sliderRef}
        className={`hide-scroll ${className}`}
        style={{
          display: "flex",
          overflowX: "scroll",
          overflowY: "hidden",
          gap: "20px",
          // padding: "20px",
          WebkitOverflowScrolling: "touch",
          cursor: "grab",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onPointerLeave={stopDragging}
      >
        {children}
      </div>
    </>
  );
}

/* Main component */
export default function SkillSwap() {
  return (
    <div
      style={{
        // height: "844px",
        // width: "390px",
        backgroundColor: "#c4d3ff",
        // border: "16px solid black",
        // borderRadius: "50px",
        padding: 20,
        boxShadow: "0 0 20px rgba(0,0,0,0.3)",
        fontFamily: "Inter, Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* header */}
      <div style={{ padding: 0, textAlign: "center", marginTop: "10px" }}>
        <h2 style={{ fontWeight: "bolder" }}>Welcome to SkillswAP</h2>
      </div>

      <div style={{ padding: "2          0px" }}>
        {/* Recommended: horizontal carousel */}
        <h2 style={{ fontSize: 16, fontWeight: 700 }}>Recommended for you</h2>
        <HorizontalCarousel>
          {courses.recommended.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </HorizontalCarousel>

        {/* Top Courses: another horizontal carousel */}
        <h2 style={{ fontSize: 16, fontWeight: 700, margin: "18px 6px" }}>
          Top Courses in IT
        </h2>
        <HorizontalCarousel>
          {courses.topIT.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </HorizontalCarousel>
      </div>

      {/* bottom nav */}
      <nav
        style={{
          marginTop: "40px",
           marginLeft: "20px",
          marginRight: "20px",
          marginBottom: "20px",
          background: "#fff",
          borderRadius: 14,
          boxShadow: "0 8px 30px rgba(2,6,23,0.08)",
          display: "flex",
          justifyContent: "space-around",
          padding: "10px 6px",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center", fontSize: 12 }}>
          <div style={{ fontSize: 18 }}>🏠</div>
          <div>Home</div>
        </div>
        <div style={{ textAlign: "center", fontSize: 12 }}>
          <div style={{ fontSize: 18 }}>🔍</div>
          <div>
            <Link to={"/searchpage"} style={{ color: "black" }}>
              Search
            </Link>
          </div>
        </div>
        <div style={{ textAlign: "center", fontSize: 12 }}>
          <div style={{ fontSize: 18 }}>▶️</div>
          <div>
            <Link to={"/learning"} style={{ color: "black" }}>
              Learning
            </Link>
          </div>
        </div>
        <div style={{ textAlign: "center", fontSize: 12 }}>
          <div style={{ fontSize: 18 }}>👤</div>
          <div>
            <Link to={"/account"} style={{ color: "black" }}>
              Account
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
