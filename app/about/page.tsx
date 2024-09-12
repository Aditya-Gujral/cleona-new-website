/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Corrected import
import VideoPlayer from '@/components/VideoPlayer';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Page() {
  const videoUrl = "https://cleona-video.s3.amazonaws.com/CLEONA+Reproductive.mp4";

  return (
    <div style={{ textAlign: 'center' as const }}>
      <Header />
      <div>
        <VideoPlayer videoSrc={videoUrl} />
      </div>
      <h2 style={{ fontSize: '5em', fontWeight: 'bold', color: '#007073' }}>
        The AI platform for <br /> care operations
      </h2>
      <p style={{ fontSize: '3em', margin: '1em 0', color: '#a6a6a6' }}>
        Provide digital, concierge-level experiences <br />
        for every patient on their <br />
        reproductive journey—
        <span style={{ color: '#007073', fontWeight: 'bold' }}>from puberty to menopause</span>
      </p>
      <h3 style={{ fontSize: '3em', fontWeight: 'bold', color: '#007073', margin: '9em 0 0 0' }}>
        How it works
      </h3>
      <h4 style={{ fontSize: '4em', fontWeight: 'bold', fontFamily: 'helvetica' }}>
        The power of our proprietary reproductive <br /> LLMS, delivering personalized care solutions.
      </h4>
      <p style={{ fontSize: '2.5em', margin: '1em 0', color: '#a6a6a6' }}>
        Built on inclusive, evidence-based information across gender identities, <br />
        ethnicities, cultures, and abilities, practitioners and care providers are <br />
        empowered to deliver comprehensive, personalized care.
      </p>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Image
          src="/img/child-5033381_1280.jpg"
          alt="Picture of a mother and a child"
          width={500}
          height={500}
          style={{ display: 'block', margin: '0 auto', width: '100%', height: '70vh' }}
        />
        <Link
          href="https://www.cleona.io/"
          style={{
            position: 'absolute',
            bottom: '1em',
            right: '1em',
            backgroundColor: '#007073',
            color: '#fff',
            padding: '1em 2em',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: '1.5em',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5em',
          }}
        >
          Try Out The Reproductive Assistant
          <span style={{ fontSize: '2em' }}>&rarr;</span>
        </Link>
      </div>
      <h4 style={{ fontSize: '4em', fontWeight: 'bold', fontFamily: 'helvetica', color: '#007073', margin: '10em 0 0 0' }}>
        CLEONA’s Reproductive Assistant
      </h4>
      <p style={{ fontSize: '2.5em', margin: '1em 0', color: '#007073' }}>
        Conversational AI to streamline the patient engagement
      </p>
      <Image
        src="/img/Reproductive Assistant.gif"
        alt="Reproductive Assistant screen"
        width={500}
        height={500}
        style={{ display: 'block', margin: '1em 0 9em 0', width: '90%' }}
      />
      <h3 style={{ fontSize: '5em', fontWeight: 'bold', margin: '9em 0 0 0' }}>
        Expand your capabilities
      </h3>
      <p style={{ fontSize: '2.5em', margin: '1em 0', color: '#a6a6a6' }}>
        Powers personalized patient engagement across channels, including web app, patient portal, and your website.
      </p>
      <ul style={{ display: 'flex', justifyContent: 'space-around', listStyleType: 'none', padding: '10em 0' }}>
        <li style={{ fontSize: '1em', margin: '0.5em', textAlign: 'center' as const }}>
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
            Remove access barriers by <br /> providing a 24/7 self-serve <br /> experience
          </p>
        </li>
        <li style={{ fontSize: '1em', margin: '0.5em', textAlign: 'center' as const }}>
          <Image
            src="/img/tickmark.png"
            alt="Tick mark"
            width={50}
            height={50}
            style={{ display: 'block', margin: '0 auto', height: '5em', width: '5em' }}
          />
          <h4 style={{ fontSize: '3em', fontWeight: 'bold', margin: '2em 0' }}>
            Reduce <br /> resource <br /> costs
          </h4>
          <p style={{ fontSize: '2em', margin: '1em 0' }}>
            Deflect calls from the <br /> contact center.
          </p>
        </li>
        <li style={{ fontSize: '1em', margin: '0.5em', textAlign: 'center' as const }}>
          <Image
            src="/img/tickmark.png"
            alt="Tick mark"
            width={50}
            height={50}
            style={{ display: 'block', margin: '0 auto', height: '5em', width: '5em' }}
          />
          <h4 style={{ fontSize: '3em', fontWeight: 'bold', margin: '2em 0' }}>
            Automate <br /> manual <br /> work
          </h4>
          <p style={{ fontSize: '2em', margin: '1em 0' }}>
            Eliminate endless back-and-<br /> forth phone calls for patients <br /> and staff.
          </p>
        </li>
      </ul>
      <h2 style={{ fontSize: '5em', fontWeight: 'bold', margin: '9em 0 0 0' }}>
        Seamless interactions
      </h2>
      <p style={{ fontSize: '3em', margin: '1em 0' }}>
        Empower patients to find services, locate providers, access information, schedule appointments, and make payments through an AI-driven interface integrated with your current systems.
      </p>
      <Image
        src="/img/pexels-cottonbro-6601770.jpg"
        alt="Picture of a person using their phone"
        width={500}
        height={500}
        style={{ display: 'block', margin: '0 0 19em 9em', width: '80%' }}
      />
      <Footer />
    </div>
  );
}


