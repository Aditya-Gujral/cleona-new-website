"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer-container">
      <Image
        src="/img/pexels-kelly-1179532-2876511.jpg"
        alt="Picture of a Forest"
        layout="fill"
        objectFit="cover"
        style={{ borderRadius: "8px" }}
      />
      <div className="overlay-text">
        <h1>
          <strong>Work</strong> <i>with US</i>
        </h1>
        <p>
          We are building a future where hyperpersonalized care is accessible to
          all.
        </p>
      </div>
      <style jsx>{`
        .footer-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          margin: 0 auto;
        }

        .overlay-text {
          position: absolute;
          top: 25%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-family: 'Arsenal', sans-serif !important;
          font-size: 1.5rem;
          font-weight: bold;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
          z-index: 10;
          text-align: center;
        }

        .overlay-text h1 {
          font-family: 'Arsenal', sans-serif !important;
          font-size: 5rem;
          margin: 10rem 0 0;
        }

        .overlay-text p {
          font-family: 'Arsenal', sans-serif !important;
          margin: 3rem 0 0;
          font-size: 2rem;
        }

        @media (max-width: 768px) {
          .footer-container {
            height: 40vh;
          }

          .overlay-text {
            font-size: 1.2rem;
          }

          .overlay-text h1 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}




