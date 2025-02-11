import { motion } from 'framer-motion';
// import { FaUserAlt } from 'react-icons/fa'; // Using a sample icon as the welcome character
import { useNavigate } from 'react-router-dom';
import signUpImage from '../assets/sign-up.png';

function Home() {
  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: 'white',
    color: '#f6ca5f',
    borderRadius: '10px',
    boxShadow: '0px 4px 0px rgba(211, 211, 211, 1)',
    margin: '0 10px',
    padding: '8px 10px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Quicksand',
    fontWeight: '800',
    width: '6rem',
    fontSize: '0.7rem',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '30px',
  };

  const imageStyle = {
    width: '200px',  // Adjust size as needed
    height: 'auto', 
    marginBottom: '20px',
    backgroundColor: 'white',
    borderRadius: '100%',
    padding: '5%',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: 'center', padding: '20px' }}
    >
      <img 
        src={signUpImage} 
        alt="Sign Up" 
        style={imageStyle}
      />
      {/* Welcome character icon */}
      {/* <FaUserAlt color="#f6ca5f" size={48} /> */}
      <h1 style={{ color: '#ffffff', fontFamily: 'Quicksand' }}>Welcome to Worldly</h1>
      
      <div style={buttonContainerStyle}>
        <button 
          style={buttonStyle}
          onClick={() => navigate('/about')}
        >
          About
        </button>
        <button 
          style={buttonStyle}
          onClick={() => navigate('/support')}
        >
          Support
        </button>
        <button 
          style={buttonStyle}
          onClick={() => navigate('/privacy-policy')}
        >
          Privacy Policy
        </button>
      </div>

      {/* QR code for Apple Store link (replace the src with your actual QR image path or URL) */}
      {/* <img
        src="/path/to/qr-code.png"
        alt="QR code for Apple Store"
        style={{ marginTop: '20px' }}
      /> */}
    </motion.div>
  );
}

Home.propTypes = {
  // Add any props if you use them
};

export default Home;