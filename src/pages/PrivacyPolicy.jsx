import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function PrivacyPolicy() {
  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: 'white',
    color: '#f6ca5f',
    borderRadius: '10px',
    boxShadow: '0px 4px 0px rgba(211, 211, 211, 1)',
    padding: '12px 16px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    fontFamily: 'Quicksand',
    fontWeight: '800',
    fontSize: '15px',
    margin: '10px',
    width: '120px'
  };

  const containerStyle = {
    minHeight: '100vh',
    padding: '20px',
    fontFamily: 'Quicksand',
    color: 'white',
  };

  const contentContainerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    paddingTop: '80px', // Space for the navigation bar
  };

  const sectionStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    padding: '25px',
    margin: '20px 0',
  };

  const headingStyle = {
    color: 'white',
    marginBottom: '15px',
    textAlign: 'center',
    fontSize: '32px'
  };

  const sectionHeadingStyle = {
    color: 'white',
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '20px',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    lineHeight: '1.6',
    fontSize: '16px',
    marginBottom: '15px',
  };

  const listStyle = {
    marginLeft: '20px',
    marginBottom: '15px',
    lineHeight: '1.6',
  };

  const listItemStyle = {
    marginBottom: '10px',
  };

  const navBarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(126, 189, 100, 0.9)',
    padding: '15px',
    zIndex: 100,
  };

  const navItemStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    color: 'white',
    opacity: 0.85,
    padding: '8px 16px',
    margin: '0 5px',
    cursor: 'pointer',
    fontFamily: 'Quicksand',
    fontWeight: '800',
    fontSize: '14px',
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Support', path: '/support' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Use', path: '/terms-of-use' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <div style={containerStyle}>
      {/* Persistent Navigation Bar */}
      <div style={navBarStyle}>
        {navItems.map((item) => (
          <motion.button
            key={item.path}
            style={{
              ...navItemStyle,
              opacity: location.pathname === item.path ? 1 : 0.7,
            }}
            onClick={() => navigate(item.path)}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {item.label}
          </motion.button>
        ))}
      </div>

      <div style={contentContainerStyle}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants} style={headingStyle}>
            Privacy Policy for Worldly
          </motion.h1>
          
          <motion.div variants={itemVariants} style={sectionStyle}>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              Your privacy is important to us. This Privacy Policy explains how Worldly collects, uses, 
              and protects your data when you use our app.
            </motion.p>
            
            <motion.h2 variants={itemVariants} style={sectionHeadingStyle}>1. Data We Collect</motion.h2>
            <motion.p variants={itemVariants} style={paragraphStyle}>We only collect the following information:</motion.p>
            <motion.ul variants={itemVariants} style={listStyle}>
              <motion.li variants={itemVariants} style={listItemStyle}>
                <strong>Username:</strong> Required to identify you in the game.
              </motion.li>
              <motion.li variants={itemVariants} style={listItemStyle}>
                A valid email is required to create an account. Play Worldly does not send emails to its users.
              </motion.li>
              <motion.li variants={itemVariants} style={listItemStyle}>
                <strong>Profile Picture (Optional):</strong> You may choose to upload a profile image, but it is not required.
              </motion.li>
            </motion.ul>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              No other personal information is collected. We do not collect phone numbers, contacts, or location data.
            </motion.p>
            
            <motion.h2 variants={itemVariants} style={sectionHeadingStyle}>2. How We Use Your Data</motion.h2>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              We use your username and profile picture solely to enable in-game functionality, such as displaying 
              your identity to friends or on leaderboards. We do not collect or store any other data.
            </motion.p>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              We do not sell, share, or use your data for advertising or analytics purposes.
            </motion.p>
            
            <motion.h2 variants={itemVariants} style={sectionHeadingStyle}>3. Data Storage & Security</motion.h2>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              All data is stored securely using Firebase, a trusted backend platform by Google. 
              We use end-to-end encryption and best practices to protect your information.
            </motion.p>
            <motion.p variants={itemVariants} style={paragraphStyle}>Your data is:</motion.p>
            <motion.ul variants={itemVariants} style={listStyle}>
              <motion.li variants={itemVariants} style={listItemStyle}>
                <strong>Private</strong> – Only visible to you and people you choose to interact with.
              </motion.li>
              <motion.li variants={itemVariants} style={listItemStyle}>
                <strong>Encrypted</strong> – Both in transit and at rest.
              </motion.li>
            </motion.ul>
            
            <motion.h2 variants={itemVariants} style={sectionHeadingStyle}>4. Children's Privacy</motion.h2>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              Worldly is intended for users aged 13 and older. We do not knowingly collect data from 
              children under 13. If we become aware of a user under 13, their data will be promptly deleted.
            </motion.p>
            
            <motion.h2 variants={itemVariants} style={sectionHeadingStyle}>5. Data Deletion</motion.h2>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              You can request deletion of your account and all associated data at any time by contacting 
              us at rafibaridesstudio@gmail.com. Deleting your account from app &gt; settings will clear 
              the database of all records related to your account.
            </motion.p>
            
            <motion.h2 variants={itemVariants} style={sectionHeadingStyle}>6. Third-Party Services</motion.h2>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              We use Firebase for authentication and data storage. Firebase's privacy practices can be 
              found at <a href="https://firebase.google.com/support/privacy" style={{color: 'white', textDecoration: 'underline'}}>
              https://firebase.google.com/support/privacy</a>.
            </motion.p>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              We do not integrate with third-party advertisers or analytics providers.
            </motion.p>
            
            <motion.h2 variants={itemVariants} style={sectionHeadingStyle}>7. Contact</motion.h2>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              If you have any questions or concerns, please contact us at:
              <br />
              <a href="mailto:rafibaridesstudio@gmail.com" style={{color: 'white', textDecoration: 'underline'}}>
                rafibaridesstudio@gmail.com
              </a>
            </motion.p>
          </motion.div>
          
          <motion.div variants={itemVariants} style={{textAlign: 'center'}}>
            <motion.button 
              variants={itemVariants}
              style={buttonStyle}
              onClick={() => navigate('/')}
              whileHover={{
                y: 4,
                boxShadow: '0px 0px 0px rgba(211, 211, 211, 1)',
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 15 }}
            >
              Back to Home
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;