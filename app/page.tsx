'use client'

import { useState } from 'react'

export default function HappinessCalculator() {
  const [sleep, setSleep] = useState(7)
  const [exercise, setExercise] = useState(3)
  const [social, setSocial] = useState(5)
  const [work, setWork] = useState(7)
  const [health, setHealth] = useState(8)
  const [showResult, setShowResult] = useState(false)

  const calculateHappiness = () => {
    const sleepScore = Math.min(sleep / 8 * 20, 20)
    const exerciseScore = Math.min(exercise / 5 * 20, 20)
    const socialScore = social * 2
    const workScore = work * 2
    const healthScore = health * 2
    
    return Math.round(sleepScore + exerciseScore + socialScore + workScore + healthScore)
  }

  const happinessScore = calculateHappiness()
  
  const getHappinessLevel = (score: number) => {
    if (score >= 90) return { level: 'Extremely Happy!', emoji: '🤩', color: '#10b981' }
    if (score >= 75) return { level: 'Very Happy', emoji: '😊', color: '#22c55e' }
    if (score >= 60) return { level: 'Pretty Happy', emoji: '🙂', color: '#84cc16' }
    if (score >= 45) return { level: 'Neutral', emoji: '😐', color: '#eab308' }
    if (score >= 30) return { level: 'Could Be Better', emoji: '😕', color: '#f97316' }
    return { level: 'Needs Improvement', emoji: '😢', color: '#ef4444' }
  }

  const result = getHappinessLevel(happinessScore)

  const reset = () => {
    setSleep(7)
    setExercise(3)
    setSocial(5)
    setWork(7)
    setHealth(8)
    setShowResult(false)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '24px',
        padding: '40px',
        maxWidth: '500px',
        width: '100%',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '8px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Happiness Calculator
        </h1>
        <p style={{
          textAlign: 'center',
          color: '#6b7280',
          marginBottom: '32px'
        }}>
          Rate different aspects of your life
        </p>

        {!showResult ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                😴 Sleep Quality (hours/night): {sleep}
              </label>
              <input
                type="range"
                min="0"
                max="12"
                value={sleep}
                onChange={(e) => setSleep(Number(e.target.value))}
                style={{ width: '100%', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#9ca3af', marginTop: '4px' }}>
                <span>0h</span>
                <span>12h</span>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                🏃 Exercise (days/week): {exercise}
              </label>
              <input
                type="range"
                min="0"
                max="7"
                value={exercise}
                onChange={(e) => setExercise(Number(e.target.value))}
                style={{ width: '100%', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#9ca3af', marginTop: '4px' }}>
                <span>0</span>
                <span>7</span>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                👥 Social Life (1-10): {social}
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={social}
                onChange={(e) => setSocial(Number(e.target.value))}
                style={{ width: '100%', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#9ca3af', marginTop: '4px' }}>
                <span>1</span>
                <span>10</span>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                💼 Work/School Satisfaction (1-10): {work}
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={work}
                onChange={(e) => setWork(Number(e.target.value))}
                style={{ width: '100%', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#9ca3af', marginTop: '4px' }}>
                <span>1</span>
                <span>10</span>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                ❤️ Health (1-10): {health}
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={health}
                onChange={(e) => setHealth(Number(e.target.value))}
                style={{ width: '100%', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: '#9ca3af', marginTop: '4px' }}>
                <span>1</span>
                <span>10</span>
              </div>
            </div>

            <button
              onClick={() => setShowResult(true)}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '12px',
                fontSize: '1.125rem',
                fontWeight: '600',
                cursor: 'pointer',
                marginTop: '16px',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(102, 126, 234, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Calculate My Happiness! ✨
            </button>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '6rem',
              marginBottom: '16px'
            }}>
              {result.emoji}
            </div>
            
            <div style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              color: result.color,
              marginBottom: '8px'
            }}>
              {happinessScore}%
            </div>
            
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: result.color,
              marginBottom: '24px'
            }}>
              {result.level}
            </div>

            <div style={{
              background: '#f3f4f6',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '24px',
              textAlign: 'left'
            }}>
              <h3 style={{ marginTop: 0, marginBottom: '12px', color: '#374151' }}>📊 Breakdown:</h3>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#6b7280', lineHeight: '1.8' }}>
                <li>Sleep: {sleep} hours</li>
                <li>Exercise: {exercise} days/week</li>
                <li>Social Life: {social}/10</li>
                <li>Work Satisfaction: {work}/10</li>
                <li>Health: {health}/10</li>
              </ul>
            </div>

            <div style={{
              background: '#fef3c7',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '24px',
              textAlign: 'left'
            }}>
              <h3 style={{ marginTop: 0, marginBottom: '8px', color: '#92400e' }}>💡 Tip:</h3>
              <p style={{ margin: 0, color: '#a16207' }}>
                {happinessScore < 60 
                  ? "Try focusing on sleep and exercise - they have the biggest impact on happiness!"
                  : happinessScore < 80
                  ? "You're doing well! Try to maintain a balance between work and social life."
                  : "Amazing! Keep up whatever you're doing - you're living your best life!"}
              </p>
            </div>

            <button
              onClick={reset}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Calculate Again 🔄
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
