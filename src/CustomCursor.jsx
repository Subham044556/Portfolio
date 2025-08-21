import React, { useEffect } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  useEffect(() => {
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorCircle = document.querySelector(".cursor-circle");

    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    };

    const animateCircle = () => {
      circleX += (mouseX - circleX) * 0.2; // smooth follow effect
      circleY += (mouseY - circleY) * 0.2;

      cursorCircle.style.left = `${circleX}px`;
      cursorCircle.style.top = `${circleY}px`;

      requestAnimationFrame(animateCircle);
    };

    // Add hover effect on links and buttons
    const addHoverEvents = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", () => {
          cursorCircle.classList.add("cursor-hover");
        });
        el.addEventListener("mouseleave", () => {
          cursorCircle.classList.remove("cursor-hover");
        });
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    animateCircle();
    addHoverEvents();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot"></div>
      <div className="cursor-circle"></div>
    </>
  );
};

export default CustomCursor;
