/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Corrected import path
import VideoPlayer from '@/components/VideoPlayer';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Page() {
  const videoUrl = "https://cleona-video.s3.amazonaws.com/CLEONA+Vid.mp4";

  const sectionStyle = {
    fontSize: '3.5em',
    margin: '0 1em',
    textAlign: 'left' as const,
    color: '#00000',
  };

  const headingStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#007073',
    margin: '19em 0 1em 1em',
    textAlign: 'left' as const,
  };

  return (
    <div style={{ textAlign: 'center' as const, fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <VideoPlayer videoSrc={videoUrl} />

      <h2 style={{ fontSize: '5em', fontWeight: 'bold', color: '#007073', margin: '2em 0 0 0' }}>
        The AI platform for <br /> care operations
      </h2>
      <p style={{ fontSize: '2em', margin: '0', color: '#a6a6a6' }}>
        Hyper-personalize the patient experience, automate processes<br /> and empower your team
      </p>

      <h2 style={{ fontSize: '4em', fontWeight: 'bold', color: '#007073', margin: '9em 0 0 0' }}>
        CLEONA Assistant
      </h2>
      <p style={{ fontSize: '2.5em', margin: '0', color: '#007073' }}>
        Conversational AI to streamline patient engagement
      </p>

      <Image
        src="/img/Reproductive Assistant.gif"
        alt="Picture of the reproductive assistant"
        width={500}
        height={500}
        style={{ display: 'block', margin: '1em auto', width: '90%', height: 'auto' }}
      />

      <h3 style={{ fontSize: '4em', fontWeight: 'bold', margin: '4em 1em 0 0' }}>
        Expand your capabilities
      </h3>
      <p style={{ fontSize: '2em', margin: '1em 1em 0 0', color: '#a6a6a6' }}>
        Powers personalized patient engagement across channels, including <br /> web app, patient portal and your website.
      </p>
      <ul style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10em 0',
          listStyleType: 'none'
        }}>
          {['Engage and keep more patients', 'Reduce resource costs', 'Automate manual work'].map((item, index) => (
            <li key={index} style={{
              margin: '1em 0',
              textAlign: 'center',
              fontSize: '1.5em',
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
                }}
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

      <h2 style={headingStyle}>
        Patient navigation
      </h2>
      <p style={sectionStyle}>
        Help patients navigate services using data from your website, EHR, call scripts and more.
      </p>
      <Image
        src="/img/Patient Navigation.png"
        alt="Patient navigation screen"
        width={500}
        height={500}
        style={{ display: 'block', margin: '1em auto', width: '80%' }}
      />

      <h2 style={headingStyle}>
        Provider Search
      </h2>
      <p style={sectionStyle}>
        Connect patients to the care they need without phone calls.
      </p>
      <Image
        src="/img/Provider Search.png"
        alt="Provider Search screen"
        width={500}
        height={500}
        style={{ display: 'block', margin: '1em auto', width: '80%' }}
      />

      <h2 style={headingStyle}>
        Real-time responses
      </h2>
      <p style={sectionStyle}>
        Hyper personalized conversations decrease patients' reliance on Google, Reddit, and TikTok with immediate information and resources.
      </p>
      <Image
        src="/img/Real Time Responses.png"
        alt="Real Time Responses screen"
        width={500}
        height={500}
        style={{ display: 'block', margin: '1em auto', width: '80%' }}
      />

      <h2 style={headingStyle}>
        Scheduling
      </h2>
      <p style={sectionStyle}>
        Enable patients to schedule, reschedule, and cancel appointments 24/7.
      </p>
      <Image
        src="/img/Reproductive Assistant.gif"
        alt="Reproductive Assistant screen"
        width={500}
        height={500}
        style={{ display: 'block', margin: '1em auto', width: '80%' }}
      />

      <h2 style={headingStyle}>
        Payment collection
      </h2>
      <p style={sectionStyle}>
        Increase collections with secure, chat-based payments.
      </p>

      <h2 style={headingStyle}>
        How it works
      </h2>
      <p style={sectionStyle}>
        The power of LLMs, the simplicity of conversation.
      </p>
      <Image
        src="/img/pexels-yankrukov-4458358.jpg"
        alt="Approach screen"
        width={500}
        height={500}
        style={{ display: 'block', margin: '1em auto', width: '80%' }}
      />

      <h2 style={headingStyle}>
        Approach
      </h2>
      <p style={sectionStyle}>
        Provide digital, concierge-level experiences for every patient—no matter their language.
      </p>
      <p style={{ fontSize: '2.8em', margin: '0 1.5em', color: '#a6a6a6', textAlign: 'left' as const }}>
        Personalize each interaction and communicate with patients in 150 different languages using text or voice.
      </p>
      <Image
        src="/img/Approach.png"
        alt="Approach screen"
        width={500}
        height={500}
        style={{ display: 'block', margin: '1em auto', width: '80%' }}
      />

      <h2 style={{ fontSize: '2em', fontWeight: 'bold', margin: '5em 0 0 1em', color: '#007073', textAlign: 'left' as const }}>
        Setup
      </h2>
      <h3 style={{ fontSize: '1.5em', margin: '0 0 0 1em', color: '#007073', textAlign: 'left' as const }}>
        Get up and running quickly with an intuitive setup process.
      </h3>
      <p style={{ fontSize: '2em', margin: '0 1em', color: '#a6a6a6', textAlign: 'left' as const }}>
        Give us access to your EHR or website, and we’ll work with you to define your unique patient journeys.
      </p>
      <h2 style={{ fontSize: '2.8em', fontWeight: 'bold', margin: '4em 0 0 1em', color: '#007073', textAlign: 'left' as const }}>
        Data security
      </h2>
      <p style={{ fontSize: '2em', margin: '0 1em', color: '#a6a6a6', textAlign: 'left' as const }}>
        We are HIPAA compliant and ensure that your patient data is safe.
      </p>

      <Footer />
    </div>
  );
}
