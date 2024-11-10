import React from 'react'; 
import styles from '@/app/about/page.module.css';

const about = () => {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.container}>
        <div className={styles.card + ' ' + styles.contactCard}>
          <h2> className={styles.contactHeading} Contact Details</h2>
          <p className={styles.contactInfo}>
            <strong>Address:</strong> 123 Developer Lane, Code City, 45678
          </p>
          <p className={styles.contactInfo}>
            <strong>Phone:</strong> +1 234 567 890
          </p>
          <p className={styles.contactInfo}>
            <strong>Email:</strong> contact@developer.com
          </p>
        </div>
      

        <div className={styles.card + ' ' + styles.aboutCard}>
          <h2 className={styles.heading}>About Me</h2>
          <p className={styles.paragraph}>
            I am a Full Stack Developer with a passion for creating dynamic and user-friendly web applications. 
            I specialize in designing seamless user interfaces and building robust back-end solutions using technologies like HTML, 
            CSS, JavaScript, TypeScript, React.js, Next.js, and more. Explore my work, and feel free to get in touch!
          </p>
        </div>
        <div className={styles.card + ' ' + styles.socialCard}>
          <h3 className={styles.socialHeading}>Social links</h3>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div className={styles.card + ' ' + styles.aboutCard}>
          <h2 className={styles.heading}>Location</h2>
          <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, itaque quia? Optio eaque facere ea harum commodi eveniet! Ex quidem dolores consequatur, sed beatae dolorum sequi tempora minus eveniet? Tempora!
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default about;
