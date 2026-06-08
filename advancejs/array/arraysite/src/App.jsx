import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : [
      { id: 1, text: 'Design unique UI', completed: false, priority: 'high', createdAt: new Date() },
      { id: 2, text: 'Implement animations', completed: false, priority: 'medium', createdAt: new Date() },
      { id: 3, text: 'Add micro-interactions', completed: true, priority: 'low', createdAt: new Date() },
      { id: 4, text: 'Deploy to production', completed: false, priority: 'high', createdAt: new Date() },
    ]
  })
  
  const [newTask, setNewTask] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPriority, setSelectedPriority] = useState('all')
  const [viewMode, setViewMode] = useState('grid') // grid or list
  const [animatedTaskId, setAnimatedTaskId] = useState(null)

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // Get filtered and searched tasks
  const getFilteredTasks = () => {
    let filtered = [...tasks]

    if (filterType === 'completed') {
      filtered = filtered.filter(task => task.completed === true)
    } else if (filterType === 'pending') {
      filtered = filtered.filter(task => task.completed === false)
    }

    if (searchTerm) {
      filtered = filtered.filter(task => 
        task.text.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedPriority !== 'all') {
      filtered = filtered.filter(task => task.priority === selectedPriority)
    }

    return filtered
  }

  const addTask = () => {
    if (newTask.trim()) {
      const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1
      setTasks([{
        id: newId,
        text: newTask,
        completed: false,
        priority: 'medium',
        createdAt: new Date()
      }, ...tasks])
      setNewTask('')
      
      // Trigger animation
      setAnimatedTaskId(newId)
      setTimeout(() => setAnimatedTaskId(null), 500)
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const updatePriority = (id, newPriority) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, priority: newPriority } : task
    ))
  }

  // Statistics using reduce
  const stats = tasks.reduce((acc, task) => {
    acc.total++
    if (task.completed) acc.completed++
    else acc.pending++
    acc[task.priority]++
    return acc
  }, { total: 0, completed: 0, pending: 0, high: 0, medium: 0, low: 0 })

  const completionRate = Math.round((stats.completed / stats.total) * 100) || 0

  const filteredTasks = getFilteredTasks()

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="content-wrapper">
        {/* Header with Stats */}
        <header className="glass-header">
          <div className="header-content">
            <div className="logo-section">
              <div className="logo-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M21 12V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h1>FlowSpace</h1>
                <p>Task Management Reimagined</p>
              </div>
            </div>
            
            <div className="stats-grid">
              <div className="stat-chip">
                <span className="stat-label">Completion</span>
                <span className="stat-value">{completionRate}%</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${completionRate}%` }}></div>
                </div>
              </div>
              <div className="stat-chip">
                <span className="stat-label">Tasks</span>
                <span className="stat-value">{stats.total}</span>
              </div>
              <div className="stat-chip">
                <span className="stat-label">Done</span>
                <span className="stat-value">{stats.completed}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="main-container">
          {/* Add Task Section */}
          <div className="glass-card add-task-card">
            <div className="input-group">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="What's on your mind?"
                onKeyPress={(e) => e.key === 'Enter' && addTask()}
                className="fancy-input"
              />
              <button onClick={addTask} className="fancy-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Add Task
              </button>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="glass-card controls-bar">
            <div className="control-group">
              <label>Filter</label>
              <div className="chip-group">
                {['all', 'pending', 'completed'].map(type => (
                  <button
                    key={type}
                    className={`chip ${filterType === type ? 'active' : ''}`}
                    onClick={() => setFilterType(type)}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="control-group">
              <label>Priority</label>
              <div className="chip-group">
                {['all', 'high', 'medium', 'low'].map(priority => (
                  <button
                    key={priority}
                    className={`chip priority-${priority} ${selectedPriority === priority ? 'active' : ''}`}
                    onClick={() => setSelectedPriority(priority)}
                  >
                    {priority === 'all' ? 'All' : priority}
                  </button>
                ))}
              </div>
            </div>

            <div className="control-group">
              <label>Search</label>
              <div className="search-wrapper">
                <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search tasks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>

            <div className="control-group">
              <label>View</label>
              <div className="chip-group">
                <button
                  className={`chip ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  ⊞ Grid
                </button>
                <button
                  className={`chip ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  ☰ List
                </button>
              </div>
            </div>
          </div>

          {/* Tasks Display */}
          <div className={`tasks-container ${viewMode}`}>
            {filteredTasks.length > 0 ? (
              filteredTasks.map(task => (
                <div 
                  key={task.id} 
                  className={`task-card glass-card priority-${task.priority} ${task.completed ? 'completed' : ''} ${animatedTaskId === task.id ? 'animate-in' : ''}`}
                >
                  <div className="task-card-header">
                    <div className="priority-indicator"></div>
                    <button 
                      className="checkbox"
                      onClick={() => toggleTask(task.id)}
                    >
                      {task.completed && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      )}
                    </button>
                    <span className="task-text">{task.text}</span>
                    <div className="task-actions">
                      <div className="priority-selector">
                        {['high', 'medium', 'low'].map(p => (
                          <button
                            key={p}
                            className={`priority-btn ${p} ${task.priority === p ? 'active' : ''}`}
                            onClick={() => updatePriority(task.id, p)}
                            title={`Set ${p} priority`}
                          />
                        ))}
                      </div>
                      <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M4 7H20M10 11V16M14 11V16M5 7L6 19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19L19 7M9 7V4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="task-card-footer">
                    <span className="task-date">
                      {new Date(task.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-state glass-card">
                <div className="empty-icon">✨</div>
                <h3>All caught up!</h3>
                <p>No tasks found with current filters</p>
              </div>
            )}
          </div>

          {/* Array Methods Demo Section */}
          <div className="glass-card methods-showcase">
            <h3 className="showcase-title">⚡ Array Methods in Action</h3>
            <div className="methods-grid">
              <div className="method-card">
                <code>.reduce()</code>
                <p>Calculated {stats.completed} completed out of {stats.total} tasks</p>
              </div>
              <div className="method-card">
                <code>.filter()</code>
                <p>Filtering {filteredTasks.length} tasks from {tasks.length} total</p>
              </div>
              <div className="method-card">
                <code>.map()</code>
                <p>Rendering {filteredTasks.length} task cards</p>
              </div>
              <div className="method-card">
                <code>.sort()</code>
                <button onClick={() => setTasks([...tasks].sort((a,b) => b.id - a.id))}>
                  Sort by newest
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App