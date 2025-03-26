import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGlobeAmericas, FaAward, FaUserFriends } from 'react-icons/fa';
import Wave from 'react-wavify';

// Verify the import is working
console.log('Wave component:', Wave);

// Assets
import charImage from '../assets/char.png';
import cloudImage from '../assets/cloud.png';
import worldImage from '../assets/world.png';
import storesImage from '../assets/stores.png';

const MOBILE_BASE_WIDTH = 480;
const MOBILE_FULL_HEIGHT = 1000;

function HomeMobile() {
  // Navigation and state for mobile scaling and menu
  const navigate = useNavigate();
  const [mobileScale, setMobileScale] = useState(window.innerWidth / MOBILE_BASE_WIDTH);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Scroll animations
  const { scrollY } = useViewportScroll();
  const cloudY = useTransform(scrollY, [0, 1000], [0, 100]);
  const worldRotation = useTransform(scrollY, [0, 1000], [0, 24]);
  const leftParallax = useTransform(scrollY, [0, 1000], [0, 40]);
  const rightParallax = useTransform(scrollY, [0, 1000], [30, 80]);

  // Update mobile scale on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= MOBILE_BASE_WIDTH) {
        setMobileScale(window.innerWidth / MOBILE_BASE_WIDTH);
      } else {
        setMobileScale(1);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navigation items used in the hamburger menu
  const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Support', path: '/support' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Use', path: '/terms-of-use' },
  ];

  // Data and component for cards in the white section
  const whiteCards = [
    { id: 1, text: 'Explore the world', icon: <FaGlobeAmericas size={24} color="#f6ca5f" /> },
    { id: 2, text: 'Earn rewards', icon: <FaAward size={24} color="#f6ca5f" /> },
    { id: 3, text: 'Connect with friends', icon: <FaUserFriends size={24} color="#f6ca5f" /> },
    { id: 4, text: 'Adventure awaits', icon: <FaGlobeAmericas size={24} color="#f6ca5f" /> },
  ];

  const WhiteCard = ({ icon, text }) => (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0px 1px 3px rgba(0,0,0,0.09)',
        height: '70px',
        width: '350px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '10px',
        fontFamily: 'Quicksand',
        fontSize: '14px',
        color: '#7ebd64',
        fontWeight: '800',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          marginRight: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </div>
      <span>{text}</span>
    </div>
  );

  WhiteCard.propTypes = {
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
  };

  // --- Styling Objects ---

  // Outer container (mobile full-screen wrapper)
  const containerStyle = { 
    overflowY: 'auto',
    overflowX: 'hidden', // prevent horizontal scroll
    width: '100vw',      // span full viewport width
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#7ebd64' 
  };

  // Container scaled by mobileScale
  const innerContainerStyle = { 
    width: `${MOBILE_BASE_WIDTH * mobileScale}px`, 
    height: `${MOBILE_FULL_HEIGHT * mobileScale}px`, 
    position: 'relative' 
  };

  // Fixed-size design container (for scaling)
  const scalingContainerStyle = {
    width: `${MOBILE_BASE_WIDTH}px`,
    height: `${MOBILE_FULL_HEIGHT}px`,
    transform: `scale(${mobileScale})`,
    transformOrigin: 'top left',
    position: 'absolute',
    top: 0,
    left: 0,
  };

  // Hamburger Menu styles
  const hamburgerButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    color: 'white',
    fontSize: '24px',
    cursor: 'pointer',
    padding: '10px',
  };

  const mobileMenuStyle = {
    position: 'absolute',
    top: '40px',
    right: 0,
    backgroundColor: '#7ebd64',
    borderRadius: '5px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
  };

  const navButtonMobileStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    WebkitTapHighlightColor: 'transparent',
    color: 'white',
    padding: '10px 20px',
    cursor: 'pointer',
    fontFamily: 'Quicksand',
    fontWeight: '800',
    fontSize: '16px',
    '&:focus': {
      outline: 'none',
    },
  };

  // Mobile download button styling
  const downloadButtonStyleMobile = {
    backgroundColor: 'white',
    color: '#f6ca5f',
    borderRadius: '10px',
    boxShadow: '0px 4px 0px rgba(211, 211, 211, 1)',
    padding: '16px 20px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    fontFamily: 'Quicksand',
    fontWeight: '800',
    fontSize: '18px',
    width: '150px',
  };

  // Base image style (to be overridden in mobile as needed)
  const baseImageStyle = {
    width: '576px',
    height: 'auto',
  };

  // Overlapping card animation variants
  const overlappingCardContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };

  const overlappingCardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  };

  // --- Render ---
  return (
    <div style={containerStyle}>
      <div style={innerContainerStyle}>
        <div style={scalingContainerStyle}>
          {/* Hamburger Menu */}
          <div style={{ position: 'absolute', top: '20px', right: '-3px', zIndex: 100 }}>
            <button style={hamburgerButtonStyle} onClick={() => setShowMobileMenu(!showMobileMenu)}>
              ☰
            </button>
            {showMobileMenu && (
              <div style={mobileMenuStyle}>
                {navItems.map(item => (
                  <button
                    key={item.path}
                    style={navButtonMobileStyle}
                    onClick={() => {
                      navigate(item.path);
                      setShowMobileMenu(false);
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Green Section */}
          <div style={{ backgroundColor: '#7ebd64', height: '900px', position: 'relative' }}>
            <div style={{ padding: '20px', paddingTop: '60px', textAlign: 'center' }}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ margin: 0, fontSize: '16px', opacity: 0.9 }}
              >
                Welcome to the world
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ margin: '8px 0', fontSize: '40px', lineHeight: '1.2' }}
              >
                Let&apos;s play<br />Worldly
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ margin: '10px 0', fontSize: '25px', lineHeight: '1.6' }}
              >
                Embark on an unforgettable adventure where every moment unveils exciting challenges and mesmerizing wonders.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{ marginTop: '20px' }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={downloadButtonStyleMobile}
                >
                  Download
                </motion.button>
              </motion.div>
              {/* Image Container */}
              <div style={{ position: 'relative', marginTop: '20px', height: '250px', marginBottom: '-20px' }}>
                <motion.img
                  src={cloudImage}
                  alt="Cloud"
                  style={{
                    position: 'absolute',
                    width: '30%',
                    maxWidth: '150px',
                    left: '47%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                  }}
                  animate={{ y: cloudY }}
                />
                <motion.img
                  src={charImage}
                  alt="Character"
                  style={{
                    ...baseImageStyle,
                    position: 'relative',
                    zIndex: 1,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100%',
                    marginTop: '10%',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Mobile Yellow Section with Wave Edges */}
          <div style={{ position: 'relative', width: '100%', overflow: 'hidden'}}>
            {/* Top Wave (flipped) */}
            <div style={{ position: 'absolute', top: '-30px', left: 0, width: '100%', zIndex: 2 }}>
              <Wave
                fill="#7ebd64"
                options={{
                  height: 50,
                  amplitude: 40,
                  speed: 0.3,
                  points: 4
                }}
                style={{ transform: 'scaleY(-1)', display: 'block', marginBottom: '-2px' }}
              />
            </div>

            {/* Yellow Section Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: '#fcc257',
                padding: '80px 40px',
                paddingTop: '120px',
                paddingBottom: '120px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '30px',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {whiteCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ transform: 'scale(1.3)' }}
                >
                  <WhiteCard icon={card.icon} text={card.text} />
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Wave */}
            <div style={{ position: 'absolute', bottom: '-30px', left: 0, width: '100%', zIndex: 2 }}>
              <Wave
                fill="#7ebd64"
                options={{
                  height: 50,
                  amplitude: 40,
                  speed: 0.3,
                  points: 4
                }}
                style={{ display: 'block'}}
              />
            </div>
          </div>

          {/* Mobile Overlapping Sections */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              alignItems: 'center',
              padding: '20px',
              marginTop: '20px',
            }}
          >
            {/* Left Overlapping Section */}
            <motion.div
              style={{
                width: '100%',
                marginBottom: '20px',
                y: leftParallax,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <motion.img
                src={worldImage}
                alt="World"
                style={{ width: '200px', marginBottom: '8px', rotate: worldRotation }}
              />
              <p style={{ fontSize: '12px', color: '#333', margin: 0, fontWeight: 'bold', textAlign: 'center' }}>
                Play on mobile
              </p>
              <img
                src={storesImage}
                alt="Stores"
                style={{ width: '200px', marginTop: '8px' }}
              />
            </motion.div>

            {/* Right Overlapping Section */}
            <motion.div style={{ width: '100%', marginTop: '20px', marginBottom: '40px', y: rightParallax }}>
              <motion.div
                variants={overlappingCardContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <motion.div
                  variants={overlappingCardVariants}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '300px',
                    justifyContent: 'flex-start',
                    margin: '0 auto',
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      padding: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '12px',
                    }}
                  >
                    <FaGlobeAmericas size={24} color="#f6ca5f" />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <h4 style={{ margin: 0, fontSize: '18px', color: '#fff' }}>Learn countries</h4>
                    <p style={{ margin: '4px 0 0 0', fontSize: '14px', lineHeight: '1.2', color: '#fff' }}>
                      Explore and discover<br />facts about the world.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={overlappingCardVariants}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '300px',
                    justifyContent: 'flex-start',
                    margin: '0 auto',
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      padding: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '12px',
                    }}
                  >
                    <FaAward size={24} color="#f6ca5f" />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <h4 style={{ margin: 0, fontSize: '18px', color: '#fff' }}>earn badges</h4>
                    <p style={{ margin: '4px 0 0 0', fontSize: '14px', lineHeight: '1.2', color: '#fff' }}>
                      Collect badges as you<br />master country trivia.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  variants={overlappingCardVariants}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '300px',
                    justifyContent: 'flex-start',
                    margin: '0 auto',
                    marginBottom: '40px',
                  }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      padding: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '12px',
                    }}
                  >
                    <FaUserFriends size={24} color="#f6ca5f" />
                  </div>
                  <div style={{ textAlign: 'left'}}>
                    <h4 style={{ margin: 0, fontSize: '18px', color: '#fff' }}>challenge your freinds</h4>
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

export default HomeMobile;
