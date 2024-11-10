'use client'; 

import Typewriter from './components/Typewriter';
import styles from '@/app/Home/page.module.css';
import Image from 'next/image';

export default function Home() {
  const handleResumeClick = () => {
    // Function to handle the download of the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Replace with your resume path
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <>
      <section className={styles.home}>
        <div className={styles.leftContent}>
          <Typewriter text="Hi, I am Ramsha Noshad 
                     " />
                     <Typewriter text="
                     Welcome to My Portfolio" />
                     <br />
          <p> Full Stack Developer with a passion for creating dynamic and user-friendly web applications. I specialize in designing seamless user interfaces and building robust back-end solutions using technologies like HTML, CSS, JavaScript, TypeScript, React.js, Next.js, and more. Explore my work, and feel free to get in touch!!!.</p>
          <button onClick={handleResumeClick} className={styles.resumeButton}>
            Download Resume
          </button>
        </div>
        <div className={styles.rightContent}>
  <Image 
    src="/DP.jpeg" 
    alt="Profile" 
    width={400} 
    height={400} 
    className={styles.profileImage} 
  />
</div>

      
      </section>

      {/* Skills Section */}
      <section className={styles.skillsSection}>
        <h2>Skills</h2>
        <div className={styles.skillCards}>
          <div className={styles.card}>Java
            Script</div>
          <div className={styles.card}>React</div>
          <div className={styles.card}>Next.js</div>
         <div className={styles.card}>TypeScript</div>
          <div className={styles.card}>Next.js</div>
          <div className={styles.card}>CSS</div>
          <div className={styles.card}>HTML</div>
          <div className={styles.card}>Word Press</div>

        </div>
      </section>

      {/* New Section: Why I Chose Web Development */}
      <section className={styles.whyWebDevSection}>
        <h2>Why I Chose Web Development</h2>
        <p>
          I have always been fascinated by how the web brings ideas to life, enabling businesses and individuals to connect, share, and innovate. The problem-solving nature of web development, coupled with the ever-evolving technologies, drives my passion for building dynamic and scalable applications. Web development offers the perfect combination of creativity and logic, allowing me to turn complex challenges into user-friendly solutions. Its this constant learning and impact on the digital world that motivates me to continue pursuing web development as a career.
        </p>
      </section>
    </>
  );
}
