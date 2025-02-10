import { useNavigate } from 'react-router-dom';

function About() {
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

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>About Worldly</h1>
      <button 
        style={buttonStyle}
        onClick={() => navigate('/')}
      >
        Back to Home
      </button>
    </div>
  );
}

export default About;