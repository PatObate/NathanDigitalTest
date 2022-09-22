import React, { useEffect } from "react";
import "../scss/cursor.scss";

const Cursor = () => {
  const cursorjs = () => {
    const cursorTag = document.querySelector("div.cursors");
    const ball = cursorTag.querySelector("div");
    const ballMessage = cursorTag.querySelector("div span");
    const divs = document.querySelectorAll("div[data-hover]");

    let currentX = 0;
    let currentY = 0;
    let aimY = 0;
    let aimX = 0;
    let speed = 0.2;

    const animate = function () {
      currentX += (aimX - currentX) * speed;
      currentY += (aimY - currentY) * speed;

      ball.style.left = currentX + "px";
      ball.style.top = currentY + "px";

      requestAnimationFrame(animate);
    };

    animate();

    document.addEventListener("mousemove", function (event) {
      aimX = event.pageX;
      aimY = event.pageY;
    });

    divs.forEach((div) => {
      div.addEventListener("mouseover", function () {
        ballMessage.classList.add("visible");
        ball.classList.add("visible");
        ballMessage.innerHTML = div.getAttribute("data-hover");
      });

      div.addEventListener("mouseout", function () {
        ballMessage.classList.remove("visible");
        ball.classList.remove("visible");
      });
    });
  };

  useEffect(() => {
    cursorjs();
  });

  return (
    <div className="cursors">
      <div>
        <span></span>
      </div>
    </div>
  );
};

export default Cursor;
