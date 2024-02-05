"use client"

import React, { useState, useEffect } from 'react';

export const AnimatedText = ({ text }) => {
  const alpha = "QWERTYUIOPASDFGHJKLZXCVBNM0123456789";
  const [animatedText, setAnimatedText] = useState(text);
  let interval;

  const startAnimation = () => {
    clearInterval(interval);
    let iteration = 0;
    interval = setInterval(() => {
      setAnimatedText((prevText) => 
        prevText
          .split("")
          .map((letter, idx) => {
            if (idx < iteration) {
              return text[idx];
            }
            return alpha[Math.floor(Math.random() * alpha.length)];
          })
          .join("")
      );

      iteration += 1 / 2;

      if (iteration > text.length) {
        clearInterval(interval);
      }
    }, 21);
  };

  useEffect(() => {
    const header = document.querySelector(".animated-text");
    header.addEventListener("mouseover", startAnimation);

    return () => {
      header.removeEventListener("mouseover", startAnimation);
      clearInterval(interval);
    };
  }, [text]);

  return <h1 className="animated-text">{animatedText}</h1>;
};
