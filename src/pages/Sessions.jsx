import { useState } from 'react'
import { useUser } from '../context/UserContext'
import { FaPlus, FaUserGraduate, FaClock, FaCoins, FaCheck, FaBook } from 'react-icons/fa'
import '../styles/pages/_sessions.scss'

const Sessions = () => {
  const { user, addCredits, spendCredits } = useUser()
  const [sessions, setSessions] = useState([])
  const [newSession, setNewSession] = useState({
    title: '',
    skill: '',
    description: '',
    duration: '30',
    credits: '5'
  })

  const handleCreateSession = () => {
    if (newSession.title && newSession.skill && newSession.description) {
      const session = {
        id: Date.now(),
        ...newSession,
        teacher: user?.name || 'Anonymous',
        status: 'available',
        image: `https://source.unsplash.com/random/400x300/?${newSession.skill.toLowerCase()}`
      }
      setSessions([...sessions, session])
      setNewSession({
        title: '',
        skill: '',
        description: '',
        duration: '30',
        credits: '5'
      })
    }
  }

  const handleJoinSession = (session) => {
    if (spendCredits(parseInt(session.credits))) {
      const updatedSessions = sessions.map(s => 
        s.id === session.id ? { ...s, status: 'in-progress' } : s
      )
      setSessions(updatedSessions)
    }
  }

  const handleCompleteSession = (session) => {
    const updatedSessions = sessions.map(s => 
      s.id === session.id ? { ...s, status: 'completed' } : s
    )
    setSessions(updatedSessions)
    addCredits(parseInt(session.credits))
  }

  return (
    <div className="container">
      <div className="sessions">
        <div className="sessions__header">
          <h1 className="sessions__header-title">Learning Sessions</h1>
          <p className="sessions__header-subtitle">Create or join learning sessions to share knowledge and earn credits</p>
        </div>

        {/* Create Session Form */}
        <div className="sessions__form">
          <h2 className="sessions__form-title">
            <FaPlus />
            Create a New Session
          </h2>
          <div className="sessions__form-group">
            <input
              className="sessions__form-input"
              type="text"
              placeholder="Session Title"
              value={newSession.title}
              onChange={(e) => setNewSession({ ...newSession, title: e.target.value })}
            />
            <select
              className="sessions__form-select"
              value={newSession.skill}
              onChange={(e) => setNewSession({ ...newSession, skill: e.target.value })}
            >
              <option value="">Select Skill</option>
              {user?.skills?.map((skill) => (
                <option key={skill} value={skill}>{skill}</option>
              ))}
            </select>
            <input
              className="sessions__form-input"
              type="text"
              placeholder="Description"
              value={newSession.description}
              onChange={(e) => setNewSession({ ...newSession, description: e.target.value })}
            />
            <div className="sessions__form-row">
              <select
                className="sessions__form-select"
                value={newSession.duration}
                onChange={(e) => setNewSession({ ...newSession, duration: e.target.value })}
              >
                <option value="30">30 minutes</option>
                <option value="60">1 hour</option>
                <option value="90">1.5 hours</option>
              </select>
              <select
                className="sessions__form-select"
                value={newSession.credits}
                onChange={(e) => setNewSession({ ...newSession, credits: e.target.value })}
              >
                <option value="5">5 credits</option>
                <option value="10">10 credits</option>
                <option value="15">15 credits</option>
              </select>
            </div>
          </div>
          <button className="sessions__form-button" onClick={handleCreateSession}>
            <FaPlus />
            Create Session
          </button>
        </div>

        {/* Available Sessions */}
        <div>
          <h2 className="sessions__header-title">Available Sessions</h2>
          <div className="sessions__grid">
            {sessions.filter(s => s.status === 'available').map((session) => (
              <div key={session.id} className="sessions__card">
                <div className="sessions__card-header">
                  <h3 className="sessions__card-title">{session.title}</h3>
                </div>
                <div className="sessions__card-body">
                  <img src={session.image} alt={session.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0.5rem', marginBottom: '1rem' }} />
                  <p className="sessions__card-text">
                    <FaBook />
                    Skill: {session.skill}
                  </p>
                  <p className="sessions__card-text">
                    <FaUserGraduate />
                    Teacher: {session.teacher}
                  </p>
                  <p className="sessions__card-text">
                    <FaClock />
                    Duration: {session.duration} minutes
                  </p>
                  <p className="sessions__card-text">
                    <FaCoins />
                    Credits: {session.credits}
                  </p>
                  <p className="sessions__card-text">{session.description}</p>
                </div>
                <div className="sessions__card-footer">
                  <button className="sessions__card-button" onClick={() => handleJoinSession(session)}>
                    Join Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Sessions */}
        <div>
          <h2 className="sessions__header-title">My Sessions</h2>
          <div className="sessions__grid">
            {sessions.filter(s => s.status !== 'available').map((session) => (
              <div key={session.id} className="sessions__card">
                <div className="sessions__card-header">
                  <h3 className="sessions__card-title">{session.title}</h3>
                </div>
                <div className="sessions__card-body">
                  <img src={session.image} alt={session.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0.5rem', marginBottom: '1rem' }} />
                  <p className="sessions__card-text">
                    <FaBook />
                    Skill: {session.skill}
                  </p>
                  <p className="sessions__card-text">
                    <FaUserGraduate />
                    Teacher: {session.teacher}
                  </p>
                  <p className="sessions__card-text">
                    <FaClock />
                    Duration: {session.duration} minutes
                  </p>
                  <p className="sessions__card-text">
                    <FaCoins />
                    Credits: {session.credits}
                  </p>
                  <p className="sessions__card-text">
                    <FaCheck />
                    Status: {session.status}
                  </p>
                </div>
                <div className="sessions__card-footer">
                  {session.status === 'in-progress' && (
                    <button 
                      className="sessions__card-button sessions__card-button--success" 
                      onClick={() => handleCompleteSession(session)}
                    >
                      Complete Session
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sessions 