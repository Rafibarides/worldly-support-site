import { useNavigate } from 'react-router-dom';

function TermsOfUse() {
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
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ ...headingStyle, textAlign: 'center', fontSize: '32px' }}>Terms of Use for Worldly</h1>
      
      <div style={sectionStyle}>
        <p style={paragraphStyle}>
          By using <em>Worldly</em>, you agree to the following terms. Please read them carefully.
        </p>
        
        <h2 style={sectionHeadingStyle}>1. Acceptance of Terms</h2>
        <p style={paragraphStyle}>
          These Terms of Use ("Terms") govern your access to and use of the <em>Worldly</em> app ("the Service"). 
          By downloading or using the app, you agree to be bound by these Terms.
        </p>
        
        <h2 style={sectionHeadingStyle}>2. User Accounts</h2>
        <p style={paragraphStyle}>
          To use certain features, you may be required to create an account using a username. 
          You are responsible for any activity under your username.
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>You may optionally upload a profile picture.</li>
          <li style={listItemStyle}>Do not impersonate others or use inappropriate usernames or images.</li>
        </ul>
        
        <h2 style={sectionHeadingStyle}>3. User Conduct</h2>
        <p style={paragraphStyle}>
          You agree to use <em>Worldly</em> only for lawful purposes. You may not:
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>Harass or bully other players</li>
          <li style={listItemStyle}>Attempt to hack, disrupt, or reverse-engineer the app</li>
          <li style={listItemStyle}>Upload any offensive or harmful content</li>
        </ul>
        <p style={paragraphStyle}>
          Violations may result in account suspension or termination.
        </p>
        
        <h2 style={sectionHeadingStyle}>4. Intellectual Property</h2>
        <p style={paragraphStyle}>
          All content, logos, designs, and gameplay in <em>Worldly</em> are the intellectual property of 
          Rafi Barides Media and may not be copied, reused, or modified without permission.
        </p>
        
        <h2 style={sectionHeadingStyle}>5. Termination</h2>
        <p style={paragraphStyle}>
          We reserve the right to suspend or terminate access to the app at any time, 
          especially if a user violates these Terms.
        </p>
        
        <h2 style={sectionHeadingStyle}>6. Disclaimer</h2>
        <p style={paragraphStyle}>
          <em>Worldly</em> is provided "as is" without warranties of any kind. While we strive for 
          accuracy and availability, we make no guarantees about performance or uptime.
        </p>
        
        <h2 style={sectionHeadingStyle}>7. Privacy</h2>
        <p style={paragraphStyle}>
          Your use of <em>Worldly</em> is also governed by our{' '}
          <a href="/privacy-policy" style={{color: '#7ebd64', textDecoration: 'underline'}}>
            Privacy Policy
          </a>
          , which outlines how we handle your data.
        </p>
        
        <h2 style={sectionHeadingStyle}>8. Changes to Terms</h2>
        <p style={paragraphStyle}>
          We may update these Terms occasionally. Continued use of the app after changes 
          are made means you accept the new terms.
        </p>
        
        <h2 style={sectionHeadingStyle}>9. Contact</h2>
        <p style={paragraphStyle}>
          For any questions about these Terms, please contact us:<br />
          <span style={{fontSize: '18px'}}>📧</span>{' '}
          <a href="mailto:rafibaridesstudio@gmail.com" style={emailStyle}>
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

export default TermsOfUse; 