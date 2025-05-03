import React, { useState } from 'react'
import { FaCoins, FaHistory, FaInfoCircle, FaArrowUp, FaArrowDown } from 'react-icons/fa'
import '../styles/pages/_credits.scss'

const Credits = () => {
  const [transactions] = useState([
    {
      id: 1,
      type: 'earn',
      description: 'Completed teaching session on JavaScript',
      amount: 5,
      date: '2024-03-15'
    },
    {
      id: 2,
      type: 'spend',
      description: 'Joined learning session on React',
      amount: 3,
      date: '2024-03-14'
    },
    {
      id: 3,
      type: 'earn',
      description: 'Completed teaching session on Python',
      amount: 4,
      date: '2024-03-13'
    }
  ])

  const totalCredits = transactions.reduce((acc, transaction) => {
    return transaction.type === 'earn' ? acc + transaction.amount : acc - transaction.amount
  }, 0)

  return (
    <div className="credits">
      <div className="credits__header">
        <h1 className="credits__header-title">Your Credits</h1>
        <p className="credits__header-subtitle">
          Track your credits and see how you're contributing to the learning community
        </p>
      </div>

      <div className="credits__balance">
        <div className="credits__balance-label">Current Balance</div>
        <div className="credits__balance-amount">{totalCredits}</div>
        <div className="credits__balance-help">
          <FaCoins />
          <span>Credits available for learning sessions</span>
        </div>
      </div>

      <div className="credits__transactions">
        <h2 className="credits__transactions-title">
          <FaHistory />
          Transaction History
        </h2>
        <div className="credits__transactions-grid">
          {transactions.map(transaction => (
            <div key={transaction.id} className="credits__transaction">
              <div className="credits__transaction-header">
                {transaction.type === 'earn' ? (
                  <FaArrowUp className="credits__transaction-type--earn" />
                ) : (
                  <FaArrowDown className="credits__transaction-type--spend" />
                )}
                <span className={`credits__transaction-type credits__transaction-type--${transaction.type}`}>
                  {transaction.type === 'earn' ? 'Earned' : 'Spent'} {transaction.amount} credits
                </span>
              </div>
              <div className="credits__transaction-body">
                <p className="credits__transaction-description">{transaction.description}</p>
                <div className="credits__transaction-date">{transaction.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="credits__info">
        <div className="credits__info-header">
          <h2 className="credits__info-title">
            <FaInfoCircle />
            How Credits Work
          </h2>
        </div>
        <div className="credits__info-body">
          <div className="credits__info-item">
            <FaArrowUp />
            <div>
              <strong>Earn Credits:</strong> Teach others and share your knowledge. Each completed teaching session earns you credits.
            </div>
          </div>
          <div className="credits__info-item">
            <FaArrowDown />
            <div>
              <strong>Spend Credits:</strong> Use your earned credits to join learning sessions. Each learning session costs credits.
            </div>
          </div>
          <div className="credits__info-item">
            <FaCoins />
            <div>
              <strong>Credit Value:</strong> Each credit represents 30 minutes of teaching or learning time.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Credits 