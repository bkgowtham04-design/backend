import React, { useState, useRef } from 'react'

const AudioPlayer = ({ articleText }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [speed, setSpeed] = useState(1)
  const synth = useRef(null)

  const handlePlay = () => {
    if (isPlaying) {
      window.speechSynthesis.pause()
      setIsPlaying(false)
    } else {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume()
      } else {
        window.speechSynthesis.cancel()
        const utterance = new SpeechSynthesisUtterance(articleText || 'No content to read')
        utterance.rate = speed
        utterance.onstart = () => setIsPlaying(true)
        utterance.onend = () => setIsPlaying(false)
        window.speechSynthesis.speak(utterance)
        synth.current = utterance
      }
      setIsPlaying(true)
    }
  }

  const handleStop = () => {
    window.speechSynthesis.cancel()
    setIsPlaying(false)
    setProgress(0)
  }

  return (
    <div className="w-full bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6">
      <div className="space-y-6">
        {/* Player Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-cyan-400">🔊 Text-to-Speech Reader</h3>
          <span className="text-xs text-gray-500">Powered by Web Speech API</span>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-3 items-center">
          <button
            onClick={handlePlay}
            className={`px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2 ${
              isPlaying
                ? 'bg-orange-600 hover:bg-orange-500'
                : 'bg-cyan-600 hover:bg-cyan-500'
            }`}
          >
            {isPlaying ? (
              <>
                <span>⏸</span> Pause
              </>
            ) : (
              <>
                <span>▶</span> Play
              </>
            )}
          </button>

          <button
            onClick={handleStop}
            className="px-6 py-3 rounded-lg font-semibold transition bg-slate-700 hover:bg-slate-600 flex items-center gap-2"
          >
            <span>⏹</span> Stop
          </button>

          {/* Speed Control */}
          <div className="flex items-center gap-3 ml-auto">
            <label className="text-sm font-semibold text-gray-400">Speed:</label>
            <select
              value={speed}
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
              className="px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white text-sm focus:outline-none focus:border-cyan-500"
            >
              <option value={0.5}>0.5x</option>
              <option value={0.75}>0.75x</option>
              <option value={1}>1x</option>
              <option value={1.25}>1.25x</option>
              <option value={1.5}>1.5x</option>
              <option value={2}>2x</option>
            </select>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 text-center">
            {isPlaying ? 'Playing...' : 'Ready to listen'}
          </p>
        </div>

        {/* Info */}
        <div className="p-3 rounded-lg bg-slate-700/50 border border-slate-700">
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-cyan-400">💡 Tip:</span> Use the speech player to
            listen to articles while working on other tasks.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AudioPlayer
