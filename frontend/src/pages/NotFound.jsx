import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>404</h1>
            <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" style={styles.homeLink}>Go Back Home</Link>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '50px',
        fontFamily: 'Poppins, sans-serif',
    },
    heading: {
        fontSize: '4em',
        color: '#1aac83',
    },
    message: {
        fontSize: '1.2em',
        color: '#555',
    },
    homeLink: {
        marginTop: '20px',
        display: 'inline-block',
        textDecoration: 'none',
        color: '#fff',
        backgroundColor: '#1aac83', 
        padding: '10px 20px',
        borderRadius: '4px',
        fontSize: '1em',
    },
};

export default NotFound;
