import React, { useRef, useEffect, useState } from "react";
import "./Cube.css";

const Cube3D = () => {
  const cubeRef = useRef(null);
  const [rotation, setRotation] = useState({ x: -30, y: -40 });
  const [isDragging, setIsDragging] = useState(false);
  const [startCoords, setStartCoords] = useState({ x: 0, y: 0 });

  // Handle mouse drag events
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartCoords({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - startCoords.x;
      const deltaY = e.clientY - startCoords.y;
      setRotation((prev) => ({
        x: prev.x + deltaY * 0.5, // Vertical rotation based on mouse movement
        y: prev.y + deltaX * 0.5, // Horizontal rotation based on mouse movement
      }));
      setStartCoords({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleScroll = (e) => {
    setRotation((prev) => ({
      x: prev.x + e.deltaY * 0.2, // Vertical scroll
      y: prev.y + e.deltaX * 0.2, // Horizontal scroll
    }));
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startCoords]);

  return (
    <div className="cube-container">
      <div
        className="cube"
        ref={cubeRef}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div className="face front">Behavior</div>
        <div className="face right">Intelligence</div>
        <div className="face left">Cognitive Science</div>
        <div className="face top">Culture</div>
        <div className="face back">Ethnology</div>
        <div className="face bottom">Natural Language Processing</div>
      </div>
    </div>
  );
};

export default Cube3D;
