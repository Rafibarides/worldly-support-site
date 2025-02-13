import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
// import { FaMapMarkerAlt, FaCompass, FaGlobeAmericas } from 'react-icons/fa';
import charImage from '../assets/char.png';
import cloudImage from '../assets/cloud.png';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  // Base design dimensions (in pixels)
  const BASE_WIDTH = 1200;
  const BASE_HEIGHT_GREEN = 800;
  const BASE_HEIGHT_WHITE = 800;
  const FULL_HEIGHT = BASE_HEIGHT_GREEN + BASE_HEIGHT_WHITE; // 1600px total height
  const OVERLAP_HEIGHT = 200;

  // Compute scale based on window width so the entire layout (our "picture") scales together.
  const [scale, setScale] = useState(window.innerWidth / BASE_WIDTH);
  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth / BASE_WIDTH);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Support', path: '/support' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
  ];

  // Nav button style now uses a fixed font size in pixels.
  const navButtonStyle = (path) => ({
    background: 'none',
    border: 'none',
    fontFamily: 'Quicksand',
    fontWeight: '800',
    fontSize: '12px', // fixed pixel value
    color: 'white',
    opacity: location.pathname === path ? 1 : 0.75,
    cursor: 'pointer',
  });

  // Download button style updated to use pixels.
  const downloadButtonStyle = {
    backgroundColor: 'white',
    color: '#f6ca5f',
    borderRadius: '10px',
    boxShadow: '0px 4px 0px rgba(211, 211, 211, 1)',
    padding: '12px 16px',
    border: 'none',
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

  // Overlapping section styling is now in fixed pixels.
  const overlappingSectionStyle = {
    position: 'absolute',
    top: `${BASE_HEIGHT_GREEN}px`,  // 800px – the bottom edge of the green section
    left: '50%',                    // center horizontally relative to BASE_WIDTH
    transform: 'translate(-50%, -50%)', // shift upward by half its height so half covers each section
    width: `${Math.round(0.6 * BASE_WIDTH)}px`,  // 60% of 1200 = 720px
    height: `${OVERLAP_HEIGHT}px`,  // 200px
    zIndex: 10,
    backgroundColor: 'grey', // adjust as needed
    padding: '20px',
    textAlign: 'center',
  };

  return (
    // Outer wrapper to center the scaled design
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
              height: `${BASE_HEIGHT_GREEN}px`,
              position: 'relative',
              overflow: 'hidden',
              paddingTop: '30px', // fixed top padding in pixels
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
                    >
                      Download
                    </motion.button>
                  </div>

                  {/* Right section with character and cloud images */}
                  <div style={{ flex: 1, position: 'relative', textAlign: 'right' }}>
                    <img
                      src={cloudImage}
                      alt="Cloud"
                      style={{
                        position: 'absolute',
                        top: '160px',    // 20% of 800px
                        right: '-10px', // roughly 10% of BASE_WIDTH
                        width: '230px',  // fixed width in pixels
                        zIndex: 0,
                      }}
                    />
                    <img
                      src={charImage}
                      alt="Character"
                      style={{ ...imageStyle, position: 'relative', zIndex: 1, right: '-100px' }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* White Section */}
          <div
            style={{
              backgroundColor: 'white',
              width: `${BASE_WIDTH}px`,
              height: `${BASE_HEIGHT_WHITE}px`,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: '960px',
                margin: '0 auto',
                textAlign: 'center',
                paddingTop: '320px', // fixed padding (e.g. 40% of 800px)
                color: '#7ebd64',
                fontFamily: 'Quicksand',
                fontSize: '40px',
              }}
            >
              White Section
            </div>
          </div>

          {/* Overlapping Section */}
          <div style={overlappingSectionStyle}>
            Overlapping Section
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;