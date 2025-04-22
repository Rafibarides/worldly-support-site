import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function TermsOfUse() {
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
            Terms of Use for Worldly
          </motion.h1>
          
          <motion.div variants={itemVariants} style={sectionStyle}>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              By using <em>Worldly</em>, you agree to the following terms. Please read them carefully.
            </motion.p>
            
            <motion.h2 variants={itemVariants} style={sectionHeadingStyle}>1. Acceptance of Terms</motion.h2>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              These Terms of Use ("Terms") govern your access to and use of the <em>Worldly</em> app ("the Service"). 
              By downloading or using the app, you agree to be bound by these Terms.
            </motion.p>
            
            <motion.h2 variants={itemVariants} style={sectionHeadingStyle}>2. User Accounts</motion.h2>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              To use certain features, you may be required to create an account using a username. 
              You are responsible for any activity under your username.
            </motion.p>
            <motion.ul variants={itemVariants} style={listStyle}>
              <motion.li variants={itemVariants} style={listItemStyle}>You may optionally upload a profile picture.</motion.li>
              <motion.li variants={itemVariants} style={listItemStyle}>Do not impersonate others or use inappropriate usernames or images.</motion.li>
            </motion.ul>
            
            <motion.h2 variants={itemVariants} style={sectionHeadingStyle}>3. User Conduct</motion.h2>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              You agree to use <em>Worldly</em> only for lawful purposes. You may not:
            </motion.p>
            <motion.ul variants={itemVariants} style={listStyle}>
              <motion.li variants={itemVariants} style={listItemStyle}>Harass or bully other players</motion.li>
              <motion.li variants={itemVariants} style={listItemStyle}>Attempt to hack, disrupt, or reverse-engineer the app</motion.li>
              <motion.li variants={itemVariants} style={listItemStyle}>Upload any offensive or harmful content</motion.li>
            </motion.ul>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              Violations may result in account suspension or termination.
            </motion.p>
            
            <motion.h2 variants={itemVariants} style={sectionHeadingStyle}>4. Intellectual Property</motion.h2>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              All content, logos, designs, and gameplay in <em>Worldly</em> are the intellectual property of 
              Rafi Barides Media and may not be copied, reused, or modified without permission.
            </motion.p>
            
            <motion.h2 variants={itemVariants} style={sectionHeadingStyle}>5. Termination</motion.h2>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              We reserve the right to suspend or terminate access to the app at any time, 
              especially if a user violates these Terms.
            </motion.p>
            
            <motion.h2 variants={itemVariants} style={sectionHeadingStyle}>6. Disclaimer</motion.h2>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              <em>Worldly</em> is provided "as is" without warranties of any kind. While we strive for 
              accuracy and availability, we make no guarantees about performance or uptime.
            </motion.p>
            
            <motion.h2 variants={itemVariants} style={sectionHeadingStyle}>7. Privacy</motion.h2>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              Your use of <em>Worldly</em> is also governed by our{' '}
              <a href="/privacy-policy" style={{color: 'white', textDecoration: 'underline'}}>
                Privacy Policy
              </a>
              , which outlines how we handle your data.
            </motion.p>
            
            <motion.h2 variants={itemVariants} style={sectionHeadingStyle}>8. Changes to Terms</motion.h2>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              We may update these Terms occasionally. Continued use of the app after changes 
              are made means you accept the new terms.
            </motion.p>
            
            <motion.h2 variants={itemVariants} style={sectionHeadingStyle}>9. Contact</motion.h2>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              For any questions about these Terms, please contact us:<br />
              <span style={{fontSize: '18px'}}>📧</span>{' '}
              <a href="mailto:rafibaridesstudio@gmail.com" style={emailStyle}>
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

export default TermsOfUse; 