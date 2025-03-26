import { useNavigate } from 'react-router-dom';

function PrivacyPolicy() {
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

  return (
    <div style={containerStyle}>
      <h1 style={{ ...headingStyle, textAlign: 'center', fontSize: '32px' }}>Privacy Policy for Worldly</h1>
      
      <div style={sectionStyle}>
        <p style={paragraphStyle}>
          Your privacy is important to us. This Privacy Policy explains how Worldly collects, uses, 
          and protects your data when you use our app.
        </p>
        
        <h2 style={sectionHeadingStyle}>1. Data We Collect</h2>
        <p style={paragraphStyle}>We only collect the following information:</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <strong>Username:</strong> Required to identify you in the game.
          </li>
          <li style={listItemStyle}>
            A valid email is required to create an account. Play Worldly does not send emails to its users.
          </li>
          <li style={listItemStyle}>
            <strong>Profile Picture (Optional):</strong> You may choose to upload a profile image, but it is not required.
          </li>
        </ul>
        <p style={paragraphStyle}>
          No other personal information is collected. We do not collect phone numbers, contacts, or location data.
        </p>
        
        <h2 style={sectionHeadingStyle}>2. How We Use Your Data</h2>
        <p style={paragraphStyle}>
          We use your username and profile picture solely to enable in-game functionality, such as displaying 
          your identity to friends or on leaderboards. We do not collect or store any other data.
        </p>
        <p style={paragraphStyle}>
          We do not sell, share, or use your data for advertising or analytics purposes.
        </p>
        
        <h2 style={sectionHeadingStyle}>3. Data Storage & Security</h2>
        <p style={paragraphStyle}>
          All data is stored securely using Firebase, a trusted backend platform by Google. 
          We use end-to-end encryption and best practices to protect your information.
        </p>
        <p style={paragraphStyle}>Your data is:</p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <strong>Private</strong> – Only visible to you and people you choose to interact with.
          </li>
          <li style={listItemStyle}>
            <strong>Encrypted</strong> – Both in transit and at rest.
          </li>
        </ul>
        
        <h2 style={sectionHeadingStyle}>4. Children's Privacy</h2>
        <p style={paragraphStyle}>
          Worldly is intended for users aged 13 and older. We do not knowingly collect data from 
          children under 13. If we become aware of a user under 13, their data will be promptly deleted.
        </p>
        
        <h2 style={sectionHeadingStyle}>5. Data Deletion</h2>
        <p style={paragraphStyle}>
          You can request deletion of your account and all associated data at any time by contacting 
          us at rafibaridesstudio@gmail.com. Deleting your account from app &gt; settings will clear 
          the database of all records related to your account.
        </p>
        
        <h2 style={sectionHeadingStyle}>6. Third-Party Services</h2>
        <p style={paragraphStyle}>
          We use Firebase for authentication and data storage. Firebase's privacy practices can be 
          found at <a href="https://firebase.google.com/support/privacy" style={{color: '#7ebd64', textDecoration: 'underline'}}>
          https://firebase.google.com/support/privacy</a>.
        </p>
        <p style={paragraphStyle}>
          We do not integrate with third-party advertisers or analytics providers.
        </p>
        
        <h2 style={sectionHeadingStyle}>7. Contact</h2>
        <p style={paragraphStyle}>
          If you have any questions or concerns, please contact us at:
          <br />
          <a href="mailto:rafibaridesstudio@gmail.com" style={{color: '#7ebd64', textDecoration: 'underline'}}>
            rafibaridesstudio@gmail.com
          </a>
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

export default PrivacyPolicy;