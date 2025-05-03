import { useState } from 'react'
import { IoClose, IoAdd, IoBook, IoSchool } from 'react-icons/io5'
import { useUser } from '../context/UserContext'
import '../styles/pages/_profile.scss'

const Profile = () => {
  const { user, updateUser } = useUser()
  const [skills, setSkills] = useState(user?.skills || [])
  const [learning, setLearning] = useState(user?.learning || [])
  const [newSkill, setNewSkill] = useState('')
  const [newLearning, setNewLearning] = useState('')

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      const updatedSkills = [...skills, newSkill.trim()]
      setSkills(updatedSkills)
      updateUser({ ...user, skills: updatedSkills })
      setNewSkill('')
    }
  }

  const handleAddLearning = () => {
    if (newLearning.trim() && !learning.includes(newLearning.trim())) {
      const updatedLearning = [...learning, newLearning.trim()]
      setLearning(updatedLearning)
      updateUser({ ...user, learning: updatedLearning })
      setNewLearning('')
    }
  }

  const handleRemoveSkill = (skillToRemove) => {
    const updatedSkills = skills.filter(skill => skill !== skillToRemove)
    setSkills(updatedSkills)
    updateUser({ ...user, skills: updatedSkills })
  }

  const handleRemoveLearning = (learningToRemove) => {
    const updatedLearning = learning.filter(item => item !== learningToRemove)
    setLearning(updatedLearning)
    updateUser({ ...user, learning: updatedLearning })
  }

  return (
    <div className="container">
      <div className="profile">
        <div className="profile__header">
          <h1 className="profile__header-title">Your Profile</h1>
          <p className="profile__header-subtitle">Manage your skills and learning interests to connect with the right people</p>
        </div>

        {/* Skills Section */}
        <div className="profile__section">
          <h2 className="profile__section-title">
            <IoBook />
            Your Skills
          </h2>
          <div className="profile__input-group">
            <input
              className="profile__input"
              type="text"
              placeholder="Add a skill you can teach"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <button className="profile__button" onClick={handleAddSkill}>
              <IoAdd />
              Add
            </button>
          </div>
          <div className="profile__tags">
            {skills.map((skill) => (
              <div key={skill} className="profile__tag">
                <span>{skill}</span>
                <button
                  className="profile__tag-remove"
                  onClick={() => handleRemoveSkill(skill)}
                >
                  <IoClose />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Interests Section */}
        <div className="profile__section">
          <h2 className="profile__section-title">
            <IoSchool />
            Learning Interests
          </h2>
          <div className="profile__input-group">
            <input
              className="profile__input"
              type="text"
              placeholder="Add something you want to learn"
              value={newLearning}
              onChange={(e) => setNewLearning(e.target.value)}
            />
            <button className="profile__button" onClick={handleAddLearning}>
              <IoAdd />
              Add
            </button>
          </div>
          <div className="profile__tags">
            {learning.map((item) => (
              <div key={item} className="profile__tag profile__tag--learning">
                <span>{item}</span>
                <button
                  className="profile__tag-remove"
                  onClick={() => handleRemoveLearning(item)}
                >
                  <IoClose />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile 