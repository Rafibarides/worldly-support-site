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
    color: '#f6ca5f',
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ ...headingStyle, textAlign: 'center', fontSize: '32px' }}>About Worldly</h1>
      
      <div style={sectionStyle}>
        <p style={paragraphStyle}>
          Most Americans can't find Afghanistan on a map — in fact, only 17% could in a National Geographic study. 
          Worldly was built to change that.
        </p>
        
        <p style={paragraphStyle}>
          This fast-paced geography game makes learning the world addictive. Players compete in real time to 
          guess countries based on outlines, flags, or capital cities. Whether you're racing the clock or 
          challenging a friend, each round sharpens your global awareness — no flashcards required.
        </p>
        
        <p style={paragraphStyle}>
          Earn points, climb the leaderboard, and collect continent badges by correctly identifying all 
          countries in each region across multiple games. Unlock the coveted World Badge by mastering all 
          196 countries — three times.
        </p>
      </div>
      
      <div style={{ ...sectionStyle, ...howToPlayStyle }}>
        <h2 style={headingStyle}>How to Play</h2>
        
        <div style={stepStyle}>
          <h3 style={stepTitleStyle}>Find Friends & Start a Game</h3>
          <p style={paragraphStyle}>
            Add friends and challenge them to a head-to-head geography showdown. You can also join public 
            games to play with people around the world.
          </p>
        </div>
        
        <div style={stepStyle}>
          <h3 style={stepTitleStyle}>Guess Countries to Fill the Map</h3>
          <p style={paragraphStyle}>
            Each game gives you a blank map. Start typing country names — correct guesses will light up the 
            map and get you closer to victory. Use clues like outlines, flags, or capital cities depending 
            on the game mode.
          </p>
        </div>
        
        <div style={stepStyle}>
          <h3 style={stepTitleStyle}>Race to 196</h3>
          <p style={paragraphStyle}>
            The first player to correctly guess all 196 countries wins. It's fast, fun, and surprisingly intense.
          </p>
        </div>
        
        <div style={stepStyle}>
          <h3 style={stepTitleStyle}>Track Your Progress</h3>
          <p style={paragraphStyle}>
            Earn continent badges by mastering each region. Collect all 7 to unlock the ultimate prize: the World Badge.
          </p>
        </div>
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

export default About;