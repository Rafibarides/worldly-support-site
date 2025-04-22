import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Support() {
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

  const emailStyle = {
    fontWeight: 'bold',
    color: 'white',
    fontSize: '18px',
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
            Support for Worldly
          </motion.h1>
          
          <motion.div variants={itemVariants} style={sectionStyle}>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              We're committed to providing a smooth and enjoyable experience for all Worldly players. 
              If you ever run into issues, we're here to help.
            </motion.p>
            
            <motion.h2 variants={itemVariants} style={sectionHeadingStyle}>1. In-App Settings</motion.h2>
            <motion.p variants={itemVariants} style={paragraphStyle}>You are always in control of your experience:</motion.p>
            <motion.ul variants={itemVariants} style={listStyle}>
              <motion.li variants={itemVariants} style={listItemStyle}>
                <strong>Notifications:</strong> You can toggle notifications on or off at any time from within the app's settings.
              </motion.li>
              <motion.li variants={itemVariants} style={listItemStyle}>
                <strong>Background Music:</strong> Background music and sound effects can be turned off in the settings menu if you prefer a quieter game.
              </motion.li>
            </motion.ul>
            
            <motion.h2 variants={itemVariants} style={sectionHeadingStyle}>2. Contact for Support</motion.h2>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              If you experience a bug, have questions, or need help with anything related to Worldly, 
              please don't hesitate to reach out.
            </motion.p>
            <motion.p variants={itemVariants} style={{...paragraphStyle, textAlign: 'center', margin: '25px 0'}}>
              <span style={{fontSize: '24px'}}>📧</span> <a href="mailto:rafibaridesstudio@gmail.com" style={emailStyle}>
                rafibaridesstudio@gmail.com
              </a>
            </motion.p>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              We aim to respond to all inquiries within 48 hours.
            </motion.p>
            
            <motion.h2 variants={itemVariants} style={sectionHeadingStyle}>3. Updates & Improvements</motion.h2>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              We're always working on improving Worldly. If you have suggestions, we'd love to hear from you. 
              Your feedback helps make the game better for everyone.
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

export default Support;