import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate()

    const handleGetStarted = () => {
        navigate('/signup')
    }

    return (
        <div className="landing">
            <section className="hero">
                <h1>Welcome to FitUp</h1>
                <p>
                    Your ultimate companion for managing your fitness journey.<br/>
                    Add workouts, track progress, and achieve your goals—all in one place.
                </p>
                <button className="cta-button" onClick={handleGetStarted}>Get Started</button>
            </section>

            <section className="features">
                <h2>Why Choose Us?</h2>
                <div className="feature-cards">
                    <div className="card">
                        <h3>Add Your Workouts</h3>
                        <p>Easily log your daily exercises, including sets, reps, and weights.</p>
                    </div>
                    <div className="card">
                        <h3>Track Your Progress</h3>
                        <p>Visualize your fitness journey and monitor your improvements over time.</p>
                    </div>
                    <div className="card">
                        <h3>Stay Organized</h3>
                        <p>Keep your workouts organized and never miss a session with our intuitive interface.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing
