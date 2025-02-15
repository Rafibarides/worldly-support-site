// React import removed because it is not explicitly used with the new JSX transform.
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// The individual white card component reused for each card.
const WhiteCard = ({ icon, text }) => (
  <div
    style={{
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

// The WhiteCardSection component renders the entire white section.
const WhiteCardSection = ({ cards }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      style={{
        backgroundColor: 'white',
        padding: '20px',
        marginTop: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      {cards.map((card, index) => (
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
  );
};

WhiteCardSection.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default WhiteCardSection; 