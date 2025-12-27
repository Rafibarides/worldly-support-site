import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function About() {
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

  const paragraphStyle = {
    lineHeight: '1.6',
    fontSize: '16px',
    marginBottom: '15px',
  };

  const howToPlayStyle = {
    marginTop: '30px',
  };

  const stepStyle = {
    marginBottom: '20px',
  };

  const stepTitleStyle = {
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
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
    { label: 'Who We Are', path: '/who-we-are' },
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
            About Worldly
          </motion.h1>
          
          <motion.div variants={itemVariants} style={sectionStyle}>
            <motion.p variants={itemVariants} style={paragraphStyle}>
              Most Americans can't find Afghanistan on a map — in fact, only 17% could in a National Geographic study. 
              Worldly was built to change that.
            </motion.p>
            
            <motion.p variants={itemVariants} style={paragraphStyle}>
              This fast-paced geography game makes learning the world addictive. Players compete in real time to 
              guess countries based on outlines, flags, or capital cities. Whether you're racing the clock or 
              challenging a friend, each round sharpens your global awareness — no flashcards required.
            </motion.p>
            
            <motion.p variants={itemVariants} style={paragraphStyle}>
              Earn points, climb the leaderboard, and collect continent badges by correctly identifying all 
              countries in each region across multiple games. Unlock the coveted World Badge by mastering all 
              196 countries — three times.
            </motion.p>
          </motion.div>
          
          <motion.div variants={itemVariants} style={{ ...sectionStyle, ...howToPlayStyle }}>
            <motion.h2 variants={itemVariants} style={headingStyle}>How to Play</motion.h2>
            
            <motion.div variants={itemVariants} style={stepStyle}>
              <motion.h3 variants={itemVariants} style={stepTitleStyle}>Find Friends & Start a Game</motion.h3>
              <motion.p variants={itemVariants} style={paragraphStyle}>
                Add friends and challenge them to a head-to-head geography showdown. You can also join public 
                games to play with people around the world.
              </motion.p>
            </motion.div>
            
            <motion.div variants={itemVariants} style={stepStyle}>
              <motion.h3 variants={itemVariants} style={stepTitleStyle}>Guess Countries to Fill the Map</motion.h3>
              <motion.p variants={itemVariants} style={paragraphStyle}>
                Each game gives you a blank map. Start typing country names — correct guesses will light up the 
                map and get you closer to victory. Use clues like outlines, flags, or capital cities depending 
                on the game mode.
              </motion.p>
            </motion.div>
            
            <motion.div variants={itemVariants} style={stepStyle}>
              <motion.h3 variants={itemVariants} style={stepTitleStyle}>Race to 196</motion.h3>
              <motion.p variants={itemVariants} style={paragraphStyle}>
                The first player to correctly guess all 196 countries wins. It's fast, fun, and surprisingly intense.
              </motion.p>
            </motion.div>
            
            <motion.div variants={itemVariants} style={stepStyle}>
              <motion.h3 variants={itemVariants} style={stepTitleStyle}>Track Your Progress</motion.h3>
              <motion.p variants={itemVariants} style={paragraphStyle}>
                Earn continent badges by mastering each region. Collect all 7 to unlock the ultimate prize: the World Badge.
              </motion.p>
            </motion.div>
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

export default About;