/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
import Image from 'next/image';
import Link from 'next/Link'
import VideoPlayer from '@/components/VideoPlayer';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Page() {
  const videoUrl = "/vid/CLEONA Vid.mp4";

  const sectionStyle = {
    fontSize: '3.5em',
    margin: '0 1em',
    textAlign: 'left',
    color: '#00000',
  };

  const headingStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#007073',
    margin: '19em 0 1em 1em',
    textAlign: 'left',
  };


  const subHeadingStyle = {
    fontSize: '3.5em',
    fontWeight: 'bold',
    margin: '0 1em',
    textAlign: 'left',
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <div><Header /></div>
      <div>
        <VideoPlayer videoSrc={videoUrl} />
      </div>

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
      <ul style={{ display: 'flex', justifyContent: 'space-around', listStyleType: 'none', padding: '10em 0' }}>
        <li style={{ fontSize: '1em', margin: '0.5em', textAlign: 'center' }}>
          <Image
            src="/img/tickmark.png"
            alt="Tick mark"
            width={50}
            height={50}
            style={{ display: 'block', margin: '0 auto', height: '5em', width: '5em' }}
          />
          <h4 style={{ fontSize: '3em', fontWeight: 'bold', margin: '2em 0' }}>
            Engage and keep <br /> more <br /> patients
          </h4>
          <p style={{ fontSize: '2em', margin: '1em 0' }}>
            Remove access barriers by <br />​providing a 24/7 self-serve <br />​experience
          </p>
        </li>
        <li style={{ fontSize: '1em', margin: '0.5em', textAlign: 'center' }}>
          <Image
            src="/img/tickmark.png"
            alt="Tick mark"
            width={50}
            height={50}
            style={{ display: 'block', margin: '0 auto', height: '5em', width: '5em' }}
          />
          <h4 style={{ fontSize: '3em', fontWeight: 'bold', margin: '2em 0' }}>
            Reduce <br />resource <br /> costs
          </h4>
          <p style={{ fontSize: '2em', margin: '1em 0' }}>
            Deflect calls from the <br /> contact center.
          </p>
        </li>
        <li style={{ fontSize: '1em', margin: '0.5em', textAlign: 'center' }}>
          <Image
            src="/img/tickmark.png"
            alt="Tick mark"
            width={50}
            height={50}
            style={{ display: 'block', margin: '0 auto', height: '5em', width: '5em' }}
          />
          <h4 style={{ fontSize: '3em', fontWeight: 'bold', margin: '2em 0' }}>
            Automate <br /> manual <br />work
          </h4>
          <p style={{ fontSize: '2em', margin: '1em 0' }}>
            Eliminate endless back-and-<br />forth phone calls for patients <br /> and staff.
          </p>
        </li>
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
      <p style={{ fontSize: '2.8em', margin: '0 1.5em', color: '#a6a6a6', textAlign: 'left' }}>
        Personalize each interaction and communicate with patients in 150 different languages using text or voice.
      </p>
      <Image
        src="/img/Approach.png"
        alt="Approach screen"
        width={500}
        height={500}
        style={{ display: 'block', margin: '1em auto', width: '80%' }}
      />

      <h2 style={{ fontSize: '2em', fontWeight: 'bold', margin: '5em 0 0 1em', color: '#007073' , textAlign: 'left' }}>
        Setup
      </h2>
      <h3 style={{ fontSize: '3em', fontWeight: 'bold', margin: '0 1em', textAlign: 'left' }}>
        Configure in minutes and fully customize for your brand
     

      </h3>
      <p style={{ fontSize: '2.8em', margin: '0 1.5em', color: '#a6a6a6', textAlign: 'left'}}>
        Customize the look and feel of the Assistant and train it on your organization’s resources through a no-code interface.
      </p>
      <Image
        src="/img/Set up.png"
        alt="Set up screen"
        width={500}
        height={500}
        style={{ display: 'block', margin: '1em auto', width: '80%' }}
      />

      <h2 style={{ fontSize: '2em', fontWeight: 'bold', margin: '5em  0 0 1em', color: '#007073' , textAlign: 'left'}}>
        Integrations
      </h2>
      <h3 style={{ fontSize: '3em', fontWeight: 'bold', margin: '0 1em', textAlign: 'left' }}>
        Hyper-personalize patient experiences by connecting your EHR
      </h3>
      <p style={{ fontSize: '2.8em', margin: '0 1.5em', color: '#a6a6a6', textAlign: 'left' }}>
        Empower patients to schedule appointments, pay bills, receive real-time information, and more without staff intervention.
      </p>

      <h2 style={{ fontSize: '2em', fontWeight: 'bold', margin:'5em  0 0 1em', color: '#007073' , textAlign: 'left'}}>
        Deployment
      </h2>
      <h3 style={{ fontSize: '3em', fontWeight: 'bold', margin: '0 1em', textAlign: 'left' }}>
        Embed into your existing website, mobile app, and patient portal
      </h3>
      <p style={{ fontSize: '2.5em', margin: '0 1.5em', color: '#a6a6a6', textAlign: 'left' }}>
        Enhance your existing channels with conversational AI.
      </p>
      <Image
        src="/img/Reproductive Assistant.gif"
        alt="Deployment screen"
        width={500}
        height={500}
        style={{ display: 'block', margin: 'auto', width: '80%' }}
      />

      <h2 style={{ fontSize: '2em', fontWeight: 'bold', margin: '5em  0 0 1em', color: '#007073' , textAlign: 'left'}}>
        Analytics
      </h2>
      <h3 style={{ fontSize: '3em', fontWeight: 'bold', margin: '0 1em', textAlign: 'left' }}>
        Uncover exactly what your patients are looking for
      </h3>
      <p style={{ fontSize: '2.5em', margin: '0 1.5em', color: '#a6a6a6' , textAlign: 'left'}}>
        Build a deeper understanding of the most common questions and use cases for your website, mobile app, and portal.
      </p>
      <Image
        src="/img/Analytics.png"
        alt="Analytics screen"
        width={500}
        height={500}
        style={{ display: 'block', margin: '1em auto', width: '80%' }}
      />
      {/*<Link href="/insights"> <h2 style={{ fontSize: '2em', fontWeight: 'bold', margin: '0', color: '#007073' }}>
        Insights
      </h2>
      <h3 style={{ fontSize: '3em', fontWeight: 'bold', margin: '0.5em 0' }}>
        Learn how AI is being leveraged to reshape care
      </h3></Link>
      <h2 style={{ fontSize: '2em', fontWeight: 'bold', margin: '0', color: '#007073' }}>
        Insights
      </h2>
      <h3 style={{ fontSize: '3em', fontWeight: 'bold', margin: '0.5em 0' }}>
        Learn how AI is being leveraged to reshape care
      </h3>*/}

      <h2 style={{ fontSize: '5em', fontWeight: 'bold', color: '#007073' }}>How we partner</h2>
      <p style={{ fontSize: '2em', margin: '1em 0' , color: '#007073'}}>CLEONA drives demonstrable ROI for partners through our proprietary solutions for realizing financial outcomes from AI investments.</p>

      <div>
        <Footer />
      </div>
    </div>
  );
}

