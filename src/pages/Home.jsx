import { useNavigate, useLocation } from 'react-router-dom';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { FaMapMarkerAlt, FaCompass, FaGlobeAmericas } from 'react-icons/fa';
import charImage from '../assets/char.png';
import cloudImage from '../assets/cloud.png';
import worldImage from '../assets/world.png';
import storesImage from '../assets/stores.png';
import phoneImage from '../assets/phone.png';
import { FaGlobeAmericas, FaAward, FaUserFriends } from 'react-icons/fa';
import HomeMobile from './HomeMobile'; // New import for mobile

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  // Base design dimensions (in pixels)
  const BASE_WIDTH = 1200;
  const BASE_HEIGHT_GREEN = 800;
  const BASE_HEIGHT_WHITE = 800;
  const FULL_HEIGHT = BASE_HEIGHT_GREEN + BASE_HEIGHT_WHITE; // 1600px total height
  const OVERLAP_HEIGHT = 400;
  const EXTRA_GREEN = 100; // extra green background extension at the bottom

  // Mobile-specific constants and states are handled in HomeMobile.jsx.
  
  // Existing scale state for desktop scaling
  const [scale, setScale] = useState(window.innerWidth / BASE_WIDTH);
  // New mobile state: isMobile true if screen width is 480px or less
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  // Update the resize handler (removed mobile-specific logic)
  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth / BASE_WIDTH);
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Add parallax effect for the cloud image
  const { scrollY } = useViewportScroll();
  // Maps scrollY value from 0 to 1000 to a vertical offset from 0 to 100px
  const cloudY = useTransform(scrollY, [0, 1000], [0, 100]);

  // Add rotation transformation for the world image: rotates from 0 to 5 degrees as the user scrolls
  const worldRotation = useTransform(scrollY, [0, 1000], [0, 24]);

  // NEW: Define parallax values for the overlapping sections.
  // At scroll 0, left y = 0 and right y = 30; at scroll 1000, left y = 30 and right y = 60.
  const leftParallax = useTransform(scrollY, [0, 1000], [0, 40]);
  const rightParallax = useTransform(scrollY, [0, 1000], [30, 80]);

  const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Support', path: '/support' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Use', path: '/terms-of-use' },
  ];

  // White cards data for the dynamic grid
  const whiteCards = [
    { id: 1, text: 'Explore the world', icon: <FaGlobeAmericas size={24} color="#f6ca5f" /> },
    { id: 2, text: 'Earn rewards', icon: <FaAward size={24} color="#f6ca5f" /> },
    { id: 3, text: 'Connect with friends', icon: <FaUserFriends size={24} color="#f6ca5f" /> },
    { id: 4, text: 'Adventure awaits', icon: <FaGlobeAmericas size={24} color="#f6ca5f" /> },
  ];

  // WhiteCard component for individual cards
  const WhiteCard = ({ icon, text }) => {
    const cardStyle = {
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0px 1px 3px rgba(0,0,0,0.09)',
      height: '70px',
      width: '200px',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '10px',
      fontFamily: 'Quicksand',
      fontSize: '14px',
      color: '#7ebd64',
      fontWeight: '800',
    };
    const iconContainerStyle = {
      marginRight: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
    return (
      <div style={cardStyle}>
        <div style={iconContainerStyle}>
          {icon}
        </div>
        <span>{text}</span>
      </div>
    );
  };

  // Add prop validation for WhiteCard
  WhiteCard.propTypes = {
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
  };

  // Navigation button style function
  const navButtonStyle = (path) => ({
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    WebkitTapHighlightColor: 'transparent',
    color: 'white',
    opacity: location.pathname === path ? 1 : 0.7,
    padding: '10px 20px',
    cursor: 'pointer',
    fontFamily: 'Quicksand',
    fontWeight: '800',
    fontSize: '16px',
    '&:focus': {
      outline: 'none',
    },
  });

  // Download button style
  const downloadButtonStyle = {
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
    marginTop: '10px',
    width: '120px' 
  };

  // Fixed pixel image size for the character.
  const imageStyle = {
    width: '576px', // roughly 120% relative to a half-container (~480px)
    height: 'auto',
  };

  const contentContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '0',
  };

  // New overlapping sections wrapper style
  const overlappingSectionWrapperStyle = {
    position: 'absolute',
    top: `${BASE_HEIGHT_GREEN}px`,  // 800px – the bottom edge of the green section
    left: '50%',
    transform: 'translate(-50%, -25%)',
    width: `${Math.round(0.6 * BASE_WIDTH)}px`,
    display: 'flex',
    alignItems: 'stretch',
    zIndex: 10,
  };

  // Left overlapping section: world image and text.
  const leftOverlappingSectionStyle = {
    backgroundColor: 'white',
    padding: '30px',               // increased padding for better spacing
    textAlign: 'center',
    borderRadius: '50px',
    boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.09)',
    width: '40%',
    height: `${OVERLAP_HEIGHT}px`,
    position: 'relative',
    zIndex: 20,
    margin: '0',                   // removed negative margin
    display: 'flex',              // use flex centering for inner content
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // Right overlapping section: the cards.
  const rightOverlappingSectionStyle = {
    backgroundColor: '#7ebd64',
    padding: '30px',              // increased padding for consistency
    textAlign: 'center',
    borderRadius: '0 50px 50px 0',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    width: '60%',
    height: `${OVERLAP_HEIGHT * 0.8}px`,
    position: 'relative',
    zIndex: 10,
    marginTop: '0',              // removed extra top margin
    display: 'flex',             // center its content
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // --- New: Framer Motion Variants ---
  const whiteCardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const whiteCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12 },
    },
  };

  const overlappingCardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const overlappingCardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  };
  // --- End New Variants ---

  // Insert New: Green Section Variants
  // const greenContainerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.3,  // time between each child animating
  //       delayChildren: 0.2,    // delay before the first child animates
  //     },
  //   },
  // };

  // const greenItemVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  // };
  // // --- End Green Section Variants ---

  // // Mobile-specific style overrides:
  // const contentContainerStyleMobile = {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   gap: '20px',
  //   marginTop: '20px',
  // };

  // Add function to handle download button click
  const handleDownloadClick = () => {
    window.open('https://apps.apple.com/app/play-worldly/id6743803487', '_blank');
  };

  // Render mobile version on small screens
  if (isMobile) {
    return <HomeMobile />;
  }

  return (
    <div style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
      {/* This wrapper's dimensions match the scaled design */}
      <div
        style={{
          width: `${BASE_WIDTH * scale}px`,
          height: `${FULL_HEIGHT * scale}px`,
          position: 'relative',
        }}
      >
        {/* Scaling Container: fixed-size design scaled with transform */}
        <div
          style={{
            width: `${BASE_WIDTH}px`,
            height: `${FULL_HEIGHT}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          {/* Green Section */}
          <div
            style={{
              backgroundColor: '#7ebd64',
              width: `${BASE_WIDTH}px`,
              height: `${BASE_HEIGHT_GREEN + EXTRA_GREEN}px`, // extended height for extra background
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Absolutely positioned inner container to keep content unchanged */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${BASE_HEIGHT_GREEN}px`, // original content area remains 800px tall
                paddingTop: '30px', // preserve original top padding
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: 'relative',
                  width: '960px', // 80% of BASE_WIDTH
                  margin: '0 auto',
                  color: 'white',
                  height: '100%',
                }}
              >
                {/* Main content */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  {/* Top navigation */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '20px',
                      marginBottom: '80px', // fixed margin in pixels
                    }}
                  >
                    {navItems.map((item) => (
                      <motion.button
                        key={item.path}
                        style={navButtonStyle(item.path)}
                        onClick={() => navigate(item.path)}
                        whileHover={{ opacity: 1 }}  // on hover, set opacity to 100%
                        transition={{ duration: 0.3 }} // smooth transition
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </div>

                  {/* Main content: left text and right image container */}
                  <div style={contentContainerStyle}>
                    {/* Left section with texts and download button */}
                    <div style={{ flex: 1, textAlign: 'left', paddingRight: '20px' }}>
                      <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>
                        Welcome to the world
                      </p>
                      <h1 style={{ margin: '8px 0', fontSize: '60px', lineHeight: '1.2' }}>
                        Let&apos;s play<br />Worldly
                      </h1>
                      <p style={{ margin: '10px 0', fontSize: '16px', lineHeight: '1.5' }}>
                        Embark on an unforgettable adventure where every moment unveils
                        exciting challenges and mesmerizing wonders.
                      </p>
                      <motion.button
                        style={downloadButtonStyle}
                        whileHover={{
                          y: 4, // moves button down by 4px
                          boxShadow: '0px 0px 0px rgba(211, 211, 211, 1)', // removes the shadow
                        }}
                        transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                        onClick={handleDownloadClick}
                      >
                        Download
                      </motion.button>
                    </div>

                    {/* Right section with character and cloud images */}
                    <div style={{ flex: 1, position: 'relative', textAlign: 'right' }}>
                      <motion.img
                        src={cloudImage}
                        alt="Cloud"
                        style={{
                          position: 'absolute',
                            top: '160px',
                            right: '-10px',
                            width: '230px',
                          zIndex: 0,
                            y: cloudY,
                        }}
                      />
                      <img
                        src={charImage}
                        alt="Character"
                          style={
                            isMobile
                              ? {
                                  ...imageStyle,
                                  position: 'relative',
                                  zIndex: 1,
                                  left: '50%',
                                  transform: 'translateX(-50%)'
                                }
                              : {
                                  ...imageStyle,
                                  position: 'relative',
                                  zIndex: 1,
                                  right: '-100px'
                                }
                          }
                        />
                      </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* White Section */}
          <div
            style={{
              backgroundColor: 'white',
              width: '100%',                       // span the entire screen width
              height: `${BASE_HEIGHT_WHITE}px`,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `calc(${BASE_WIDTH}px - 80px)`,
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',  // center children horizontally
                alignItems: 'center',
                gap: '80px',               // add a gap between the two children
                height: `${BASE_HEIGHT_WHITE}px`,
              }}
            >
              {/* Left side: dynamic 2x2 grid of cards */}
              <motion.div
                as={motion.div}
                variants={whiteCardContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                style={{
                  width: '580px',
                  display: 'grid',
                  gridTemplateColumns: '260px 260px',
                  columnGap: '10px',
                  rowGap: '40px',
                  padding: '20px',
                  boxSizing: 'border-box',
                  marginTop: '100px',
                  marginLeft: '60px',
                }}
              >
                {whiteCards.map(card => (
                  <motion.div 
                    key={card.id}
                    variants={whiteCardVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <WhiteCard icon={card.icon} text={card.text} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Right side: Phone image */}
              <div style={{ 
                width: '500px', 
                height: '800px', 
                position: 'relative'
              }}>
                <img 
                  src={phoneImage} 
                  alt="Phone" 
                  style={{ 
                    position: 'absolute', 
                    bottom: '0px', 
                    right: '0px', 
                    width: '360px', 
                    height: 'auto',
                    paddingRight: '60px'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Overlapping Sections Wrapper */}
          <div style={
            isMobile 
              ? { 
                  position: 'relative', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  width: '100%', 
                  alignItems: 'center', 
                  padding: '20px', 
                  marginTop: '20px' 
                }
              : overlappingSectionWrapperStyle
          }>
            {/* Left Overlapping Section: World image and play on mobile */}
            <motion.div style={
              isMobile 
                ? { width: '100%', marginBottom: '20px', y: leftParallax }
                : { ...leftOverlappingSectionStyle, y: leftParallax }
            }>
              <motion.img 
                src={worldImage} 
                alt="World" 
                style={{ width: '200px', marginBottom: '8px', rotate: worldRotation }} 
              />
              <p style={{ fontSize: '12px', color: '#333', margin: 0, fontWeight: 'bold' }}>
                Play on mobile
              </p>
              <img 
                src={storesImage}
                alt="Stores"
                style={{ width: '200px', marginTop: '8px' }} 
              />
            </motion.div>

            {/* Right Overlapping Section: 3 stacked cards */}
            <motion.div style={
              isMobile 
                ? { width: '100%', marginTop: '20px', y: rightParallax }
                : { ...rightOverlappingSectionStyle, y: rightParallax }
            }>
              <motion.div
                variants={overlappingCardContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                style={
                  isMobile 
                    ? { 
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }
                    : {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        height: '100%',
                        justifyContent: 'center',
                        paddingLeft: '50px'
                      }
                }
              >
                {/* Card 1 */}
                <motion.div
                  variants={overlappingCardVariants}
                  whileHover={{ scale: 1.05 }}
                  style={{ display: 'flex', alignItems: 'flex-start' }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    padding: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px'
                  }}>
                    <FaGlobeAmericas size={24} color="#f6ca5f" />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <h4 style={{ margin: '0', fontSize: '18px', color: '#fff' }}>Learn countries</h4>
                    <p style={{ margin: '4px 0 0 0', fontSize: '14px', lineHeight: '1.2', color: '#fff' }}>
                      Explore and discover<br />facts about the world.
                    </p>
                  </div>
                </motion.div>
                
                {/* Card 2 */}
                <motion.div
                  variants={overlappingCardVariants}
                  whileHover={{ scale: 1.05 }}
                  style={{ display: 'flex', alignItems: 'flex-start' }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    padding: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px'
                  }}>
                    <FaAward size={24} color="#f6ca5f" />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <h4 style={{ margin: '0', fontSize: '18px', color: '#fff' }}>earn badges</h4>
                    <p style={{ margin: '4px 0 0 0', fontSize: '14px', lineHeight: '1.2', color: '#fff' }}>
                      Collect badges as you<br />master country trivia.
                    </p>
                  </div>
                </motion.div>
                
                {/* Card 3 */}
                <motion.div
                  variants={overlappingCardVariants}
                  whileHover={{ scale: 1.05 }}
                  style={{ display: 'flex', alignItems: 'flex-start' }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    padding: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '12px'
                  }}>
                    <FaUserFriends size={24} color="#f6ca5f" />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <h4 style={{ margin: '0', fontSize: '18px', color: '#fff' }}>challenge your freinds</h4>
                    <p style={{ margin: '4px 0 0 0', fontSize: '14px', lineHeight: '1.2', color: '#fff' }}>
                      Invite friends to play and<br />compare high scores.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;