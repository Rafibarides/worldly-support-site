import { useNavigate } from 'react-router-dom';

function Support() {
  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: 'white',
    color: '#f6ca5f',
    borderRadius: '10px',
    boxShadow: '0px 4px 0px rgba(211, 211, 211, 1)',
    margin: '20px 10px',
    padding: '8px 10px',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'Quicksand',
    fontWeight: '800',
    width: '6rem',
    fontSize: '0.7rem',
  };

  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Quicksand',
    color: '#333',
  };

  const sectionStyle = {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '25px',
    margin: '20px 0',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  };

  const headingStyle = {
    color: '#7ebd64',
    marginBottom: '15px',
  };

  const sectionHeadingStyle = {
    color: '#f6ca5f',
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
    color: '#7ebd64',
    fontSize: '18px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ ...headingStyle, textAlign: 'center', fontSize: '32px' }}>Support for Worldly</h1>
      
      <div style={sectionStyle}>
        <p style={paragraphStyle}>
          We're committed to providing a smooth and enjoyable experience for all Worldly players. 
          If you ever run into issues, we're here to help.
        </p>
        
        <h2 style={sectionHeadingStyle}>1. In-App Settings</h2>
        <p style={paragraphStyle}>You are always in control of your experience:</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <strong>Notifications:</strong> You can toggle notifications on or off at any time from within the app's settings.
          </li>
          <li style={listItemStyle}>
            <strong>Background Music:</strong> Background music and sound effects can be turned off in the settings menu if you prefer a quieter game.
          </li>
        </ul>
        
        <h2 style={sectionHeadingStyle}>2. Contact for Support</h2>
        <p style={paragraphStyle}>
          If you experience a bug, have questions, or need help with anything related to Worldly, 
          please don't hesitate to reach out.
        </p>
        <p style={{...paragraphStyle, textAlign: 'center', margin: '25px 0'}}>
          <span style={{fontSize: '24px'}}>📧</span> <a href="mailto:rafibaridesstudio@gmail.com" style={emailStyle}>
            rafibaridesstudio@gmail.com
          </a>
        </p>
        <p style={paragraphStyle}>
          We aim to respond to all inquiries within 48 hours.
        </p>
        
        <h2 style={sectionHeadingStyle}>3. Updates & Improvements</h2>
        <p style={paragraphStyle}>
          We're always working on improving Worldly. If you have suggestions, we'd love to hear from you. 
          Your feedback helps make the game better for everyone.
        </p>
      </div>
      
      <button 
        style={buttonStyle}
        onClick={() => navigate('/')}
      >
        Back to Home
      </button>
    </div>
  );
}

export default Support;