import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

function WhoWeAre() {
  const navigate = useNavigate();

  // Inject JSON-LD structured data for SEO
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Worldly",
      "alternateName": "Play Worldly",
      "url": "https://playworldly.com",
      "logo": "https://playworldly.com/logo.png",
      "description": "Worldly is a social geography game built around real-time gameplay, friendly competition, and curiosity about the world.",
      "foundingDate": "2025",
      "founder": {
        "@type": "Person",
        "name": "Rafi Barides",
        "jobTitle": "Founder & Developer",
        "description": "Brooklyn-raised singer songwriter and software engineer who developed Worldly and composed its original music."
      },
      "sameAs": [
        "https://apps.apple.com/app/play-worldly/id6743803487"
      ],
      "applicationCategory": "GameApplication",
      "operatingSystem": "iOS"
    });
    script.id = 'who-we-are-jsonld';
    
    // Remove existing script if present
    const existing = document.getElementById('who-we-are-jsonld');
    if (existing) existing.remove();
    
    document.head.appendChild(script);
    
    // Update document title for SEO
    document.title = 'Who We Are | Worldly - Social Geography Game by Rafi Barides';
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Learn about Worldly, a social geography game developed by Rafi Barides. Discover the story behind the app that makes learning geography engaging and fun.';
    
    // Add meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'Worldly, geography game, Rafi Barides, learn geography, social game, iOS game, country quiz, world map game, educational game';
    
    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.getElementById('who-we-are-jsonld');
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, []);

  const buttonStyle = {
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
    margin: '10px',
    width: '120px'
  };

  const containerStyle = {
    minHeight: '100vh',
    padding: '20px',
    fontFamily: 'Quicksand',
    color: 'white',
  };

  const contentContainerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    paddingTop: '80px',
  };

  const sectionStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    padding: '25px',
    margin: '20px 0',
  };

  const headingStyle = {
    color: 'white',
    marginBottom: '15px',
    textAlign: 'center',
    fontSize: '32px'
  };

  const subHeadingStyle = {
    color: 'white',
    fontSize: '22px',
    fontWeight: 'bold',
    marginTop: '25px',
    marginBottom: '15px',
  };

  const paragraphStyle = {
    lineHeight: '1.8',
    fontSize: '16px',
    marginBottom: '18px',
  };

  const navBarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(126, 189, 100, 0.9)',
    padding: '15px',
    zIndex: 100,
  };

  const navItemStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    color: 'white',
    opacity: 0.85,
    padding: '8px 16px',
    margin: '0 5px',
    cursor: 'pointer',
    fontFamily: 'Quicksand',
    fontWeight: '800',
    fontSize: '14px',
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Who We Are', path: '/who-we-are' },
    { label: 'Support', path: '/support' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Use', path: '/terms-of-use' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <div style={containerStyle}>
      {/* Persistent Navigation Bar */}
      <nav style={navBarStyle} role="navigation" aria-label="Main navigation">
        {navItems.map((item) => (
          <motion.button
            key={item.path}
            style={{
              ...navItemStyle,
              opacity: location.pathname === item.path ? 1 : 0.7,
            }}
            onClick={() => navigate(item.path)}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            aria-label={`Navigate to ${item.label}`}
          >
            {item.label}
          </motion.button>
        ))}
      </nav>

      <main style={contentContainerStyle}>
        <motion.article
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          itemScope
          itemType="https://schema.org/Article"
        >
          <motion.header variants={itemVariants}>
            <h1 style={headingStyle} itemProp="headline">Who We Are</h1>
          </motion.header>
          
          <motion.section variants={itemVariants} style={sectionStyle} aria-labelledby="about-worldly">
            <h2 id="about-worldly" style={subHeadingStyle}>About Worldly</h2>
            <p style={paragraphStyle} itemProp="description">
              <strong>Worldly</strong> is a social geography game built around real-time gameplay, 
              friendly competition, and curiosity about the world. Designed to make learning geography 
              engaging and fun, players challenge friends, explore a daily featured country, collect points, 
              and progress through guided learning modules that turn global knowledge into an interactive experience.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} style={sectionStyle} aria-labelledby="about-founder">
            <h2 id="about-founder" style={subHeadingStyle}>About the Founder</h2>
            <div itemScope itemType="https://schema.org/Person" itemProp="author">
              <p style={paragraphStyle}>
                Developed by Brooklyn-raised singer songwriter <strong itemProp="name">Rafi Barides</strong> and 
                released on iOS in 2025, Worldly reflects a rare blend of technical skill and creative passion. 
                Rafi is both a <span itemProp="jobTitle">software engineer</span> and a musician, deeply fascinated 
                by world geography and challenged himself to be able to draw the world map from memory. He also 
                composed the original music for Worldly, as well as music for an upcoming Turkish video game 
                set to release on Steam/Playstation.
              </p>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} style={sectionStyle} aria-labelledby="background">
            <h2 id="background" style={subHeadingStyle}>Background & Inspiration</h2>
            <p style={paragraphStyle}>
              Raised in a Mizrachi family with Levantine roots, Rafi&apos;s passion for understanding Middle East 
              and global cultures played a central role in inspiring the game. His musical background spans 
              Eastern maqam traditions, Mizrachi influences, and years performing Jewish music as a wedding 
              and bar mitzvah pianist after studying at the Mir Yeshivah in an ultra-Orthodox environment. 
              Alongside studying computer science, he long held aspirations toward aerospace engineering, 
              reflecting a lifelong curiosity about how complex systems—whether global, musical, or 
              technical—fit together.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} style={sectionStyle} aria-labelledby="mission">
            <h2 id="mission" style={subHeadingStyle}>Our Mission</h2>
            <p style={paragraphStyle}>
              <strong>Worldly was created from that same curiosity:</strong> a belief that learning the world 
              should feel alive, social, and meaningful. Our mission is to transform how people engage with 
              geography—making it not just educational, but genuinely enjoyable and socially connected.
            </p>
          </motion.section>

          <motion.aside variants={itemVariants} style={sectionStyle} aria-labelledby="app-info">
            <h2 id="app-info" style={subHeadingStyle}>Get Worldly</h2>
            <p style={paragraphStyle}>
              Worldly is available for download on iOS devices. Join thousands of players around the world 
              and start your geography journey today.
            </p>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <motion.button
                style={buttonStyle}
                onClick={() => window.open('https://apps.apple.com/app/play-worldly/id6743803487', '_blank')}
                whileHover={{
                  y: 4,
                  boxShadow: '0px 0px 0px rgba(211, 211, 211, 1)',
                }}
                transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                aria-label="Download Worldly on the App Store"
              >
                Download
              </motion.button>
            </div>
          </motion.aside>
          
          <motion.div variants={itemVariants} style={{textAlign: 'center'}}>
            <motion.button 
              variants={itemVariants}
              style={buttonStyle}
              onClick={() => navigate('/')}
              whileHover={{
                y: 4,
                boxShadow: '0px 0px 0px rgba(211, 211, 211, 1)',
              }}
              transition={{ type: 'spring', stiffness: 350, damping: 15 }}
              aria-label="Return to home page"
            >
              Back to Home
            </motion.button>
          </motion.div>
        </motion.article>
      </main>

      {/* Hidden structured content for SEO and LLM indexing */}
      <aside style={{ display: 'none' }} aria-hidden="true">
        <h2>Worldly App Summary</h2>
        <dl>
          <dt>App Name</dt>
          <dd>Worldly (Play Worldly)</dd>
          <dt>Category</dt>
          <dd>Social Geography Game, Educational Game</dd>
          <dt>Platform</dt>
          <dd>iOS (Apple App Store)</dd>
          <dt>Release Year</dt>
          <dd>2025</dd>
          <dt>Developer</dt>
          <dd>Rafi Barides</dd>
          <dt>Developer Background</dt>
          <dd>Brooklyn-raised software engineer, singer songwriter, and musician with Mizrachi heritage and Levantine roots</dd>
          <dt>Key Features</dt>
          <dd>Real-time multiplayer, daily featured country, points and badges, guided learning modules, 196 countries</dd>
          <dt>App Store Link</dt>
          <dd>https://apps.apple.com/app/play-worldly/id6743803487</dd>
          <dt>Website</dt>
          <dd>https://playworldly.com</dd>
          <dt>Contact Email</dt>
          <dd>rafibaridesstudio@gmail.com</dd>
        </dl>
      </aside>
    </div>
  );
}

export default WhoWeAre;

