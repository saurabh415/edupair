import { FaExchangeAlt, FaUserGraduate, FaCoins, FaHandshake, FaBook, FaUsers, FaChartLine, FaGlobe } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import '../styles/pages/_home.scss'

const Feature = ({ icon: Icon, title, description }) => (
  <div className="home__feature">
    <div className="home__feature-icon">
      <Icon size={24} />
    </div>
    <h3 className="home__feature-title">{title}</h3>
    <p className="home__feature-description">{description}</p>
  </div>
)

const Step = ({ number, icon: Icon, title, description }) => (
  <div className="home__how-it-works-step">
    <div className="home__how-it-works-step-number">{number}</div>
    <div className="home__how-it-works-step-icon">
      <Icon size={24} />
    </div>
    <h3 className="home__how-it-works-step-title">{title}</h3>
    <p className="home__how-it-works-step-description">{description}</p>
  </div>
)

const Home = () => {
  const navigate = useNavigate()

  const handleStartJourney = () => {
    navigate('/profile')
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="home__hero">
        <div className="container">
          <div>
            <h1 className="home__hero-title">
              Learn, Teach, Grow Together
            </h1>
            <p className="home__hero-subtitle">
              Join our vibrant community of learners and educators. Share your expertise, 
              learn new skills, and earn credits along the way. Education has never been 
              more accessible and engaging.
            </p>
            <button className="home__hero-button" onClick={handleStartJourney}>
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="home__features">
        <div className="container">
          <h2 className="home__how-it-works-title">Why Choose EduPair?</h2>
          <div className="home__feature-grid">
            <Feature
              icon={FaExchangeAlt}
              title="Skill Exchange"
              description="Trade your expertise for new knowledge in a supportive learning environment"
            />
            <Feature
              icon={FaUsers}
              title="Community Learning"
              description="Connect with passionate learners and educators from around the world"
            />
            <Feature
              icon={FaCoins}
              title="Credit System"
              description="Earn credits by teaching and use them to learn from others"
            />
            <Feature
              icon={FaChartLine}
              title="Track Progress"
              description="Monitor your learning journey and celebrate your achievements"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="home__how-it-works">
        <div className="container">
          <h2 className="home__how-it-works-title">How It Works</h2>
          <div className="home__how-it-works-grid">
            <Step
              number="1"
              icon={FaUserGraduate}
              title="Create Your Profile"
              description="Showcase your skills and learning interests to connect with the right people"
            />
            <Step
              number="2"
              icon={FaBook}
              title="Offer Sessions"
              description="Create learning sessions to share your expertise with others"
            />
            <Step
              number="3"
              icon={FaCoins}
              title="Earn Credits"
              description="Get rewarded with credits for every successful teaching session"
            />
            <Step
              number="4"
              icon={FaGlobe}
              title="Expand Knowledge"
              description="Use your credits to learn from experts in various fields"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 