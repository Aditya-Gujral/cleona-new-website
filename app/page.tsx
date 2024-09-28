import React from 'react';
import Image from 'next/image';
import VideoPlayer from '@/components/VideoPlayer';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import styles from './Landing.module.css'; // Import the CSS module

export default function Page() {
  const videoUrl = "https://cleona-video.s3.amazonaws.com/CLEONA+Vid.mp4";

  return (
    <div >
    <Header />
    <div style={{textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      
      <VideoPlayer videoSrc={videoUrl} />

      <h2 style={{
        fontSize: '5em',
        fontWeight: 'bold',
        color: '#007073',
        margin: '2em 0',
        lineHeight: '1.2' // Improved line height for better readability
      }}>
        The AI platform for <br /> care operations
      </h2>
      <p style={{
        fontSize: '2em',
        margin: '0',
        color: '#a6a6a6'
      }}>
        Hyper-personalize the patient experience, automate processes <br /> and empower your team
      </p>

      <h2 style={{
        fontSize: '4em',
        fontWeight: 'bold',
        color: '#007073',
        margin: '9em 0 0 0'
      }}>
        CLEONA Assistant
      </h2>
      <p style={{
        fontSize: '2em',
        margin: '0',
        color: '#a6a6a6'
      }}>
        Conversational AI to streamline patient engagement
      </p>

      <Image
        src="/img/Reproductive Assistant.gif"
        alt="Picture of the reproductive assistant"
        width={500}
        height={500}
        style={{
          display: 'block',
          margin: '1em auto',
          width: '80%',
          height: 'auto'
        }} // Responsive GIF
      />

      <h3 style={{
        fontSize: '3.5em',
        fontWeight: 'bold',
        margin: '0 1em'
      }}>
        Expand your capabilities
      </h3>
      <p style={{
        fontSize: '1.5em',
        margin: '0',
        color: '#a6a6a6'
      }}>
        Powers personalized patient engagement across channels, including <br /> web app, patient portal and your website.
      </p>

      <ul style={{
        display: 'flex',
        flexDirection: 'column', // Stack elements vertically
        alignItems: 'center', // Center align for mobile
        padding: '10em 0',
        listStyleType: 'none'
      }}>
        {['Engage and keep more patients', 'Reduce resource costs', 'Automate manual work'].map((item, index) => (
          <li key={index} style={{
            margin: '1em 0', // Vertical spacing between items
            textAlign: 'center',
            fontSize: '1.5em', // Adjust font size for better readability
          }}>
            <Image
              src="/img/tickmark.png"
              alt="Tick mark"
              width={50}
              height={50}
              style={{
                display: 'block',
                margin: '0 auto',
                height: '5em',
                width: '5em'
              }} // Apply styles for list item images
            />
            <h4 style={{
              fontSize: '1.5em',
              fontWeight: 'bold'
            }}>
              {item}
            </h4>
            <p style={{
              fontSize: '1.2em',
              margin: '0'
            }}>
              {index === 0 ? 'Remove access barriers by providing a 24/7 self-serve experience' :
                index === 1 ? 'Deflect calls from the contact center.' :
                'Eliminate endless back-and-forth phone calls for patients and staff.'}
            </p>
          </li>
        ))}
      </ul>

      
    </div>
    <Footer />
    </div>
  );
}

