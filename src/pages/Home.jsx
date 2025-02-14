import { useNavigate, useLocation } from 'react-router-dom';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
// import { FaMapMarkerAlt, FaCompass, FaGlobeAmericas } from 'react-icons/fa';
import charImage from '../assets/char.png';
import cloudImage from '../assets/cloud.png';
import worldImage from '../assets/world.png';
import storesImage from '../assets/stores.png';
import medalImage from '../assets/medal.png';
import logsImage from '../assets/logs.png';
import phoneImage from '../assets/phone.png';
import { FaGlobeAmericas, FaAward, FaUserFriends } from 'react-icons/fa';

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

  // Compute scale based on window width so the entire layout (our "picture") scales together.
  const [scale, setScale] = useState(window.innerWidth / BASE_WIDTH);
  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth / BASE_WIDTH);
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
  const greenContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,  // time between each child animating
        delayChildren: 0.2,    // delay before the first child animates
      },
    },
  };

  const greenItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  // --- End Green Section Variants ---

  return (
    <div>
      <h1>Home Debug</h1>
      <p>If you see this text, Home is mounting correctly.</p>
    </div>
  );
}

export default Home;