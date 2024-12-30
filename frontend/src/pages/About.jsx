const About = () => {
    return (
        <div className="about">
            <section className="about-hero">
                <h1>About Us</h1>
                <p>
                Welcome to FitUp! We're passionate about helping individuals achieve their fitness goals 
                with a simple, effective, and intuitive tool for managing workouts. Whether you're a fitness enthusiast, 
                a beginner on your journey, or a professional trainer, FitUp is designed to provide you with 
                the tools and insights you need to stay on track and motivated. Our goal is to make fitness tracking 
                accessible and enjoyable for everyone, turning your fitness journey into a rewarding experience.
                </p>
            </section>

            <section className="mission">
                <h2>Our Mission</h2>
                <div className="missionPara">
                <p>
                    <br/>At FitUp, our mission is to empower everyone to lead a healthier, more active lifestyle. 
                </p>
                <ul>
                    <li>We aim to simplify the process of tracking workouts and celebrating progress.</li>
                    <li>By providing a seamless way to monitor your routines, set achievable goals, and reflect on your achievements, we hope to 
                inspire confidence and consistency in building fitness habits that last a lifetime.</li>
                </ul>
                </div>
                    
            </section>

            <section className="team">
                <h2>Meet the Team<br/></h2>
                <div className="team-cards">
                    <div className="card">
                        <h3>John Doe</h3>
                        <p className="title">Founder & CEO</p>
                        <p>
                            John is a fitness enthusiast and entrepreneur dedicated to creating tools that 
                            simplify fitness tracking. With a background in health sciences and years of 
                            experience in app development, she leads the vision of FitUp.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Jane Smith</h3>
                        <p className="title">Lead Developer </p>
                        <p>
                            Jane is the tech wizard behind FitUp, ensuring the app is fast, 
                            secure, and user-friendly. He brings his passion for coding and fitness to 
                            the team, bridging the gap between technology and wellness.
                        </p>
                    </div>
                    <div className="card">
                        <h3>Emily Johnson</h3>
                        <p className="title">Marketing Specialist</p>
                        <p>
                            Emily drives the marketing efforts, spreading the word about FitUp. 
                            With her expertise in branding and community building, she connects users 
                            worldwide to our fitness solutions.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
