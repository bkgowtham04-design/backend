import React, { useState, useEffect } from 'react'

const CommentsSection = ({ articleId }) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [userName, setUserName] = useState('')

  useEffect(() => {
    // Load comments from localStorage
    const savedComments = JSON.parse(
      localStorage.getItem(`comments_${articleId}`) || '[]'
    )
    setComments(savedComments)
  }, [articleId])

  const handlePostComment = (e) => {
    e.preventDefault()
    if (newComment.trim() && userName.trim()) {
      const comment = {
        id: Date.now(),
        author: userName,
        text: newComment,
        date: new Date().toLocaleDateString(),
        avatar: String.fromCodePoint(0x1f60a + Math.floor(Math.random() * 0x10)),
        likes: 0,
      }
      const updatedComments = [comment, ...comments]
      setComments(updatedComments)
      localStorage.setItem(`comments_${articleId}`, JSON.stringify(updatedComments))
      setNewComment('')
    }
  }

  const handleDeleteComment = (commentId) => {
    const updatedComments = comments.filter((c) => c.id !== commentId)
    setComments(updatedComments)
    localStorage.setItem(`comments_${articleId}`, JSON.stringify(updatedComments))
  }

  const handleLikeComment = (commentId) => {
    const updatedComments = comments.map((c) =>
      c.id === commentId ? { ...c, likes: (c.likes || 0) + 1 } : c
    )
    setComments(updatedComments)
    localStorage.setItem(`comments_${articleId}`, JSON.stringify(updatedComments))
  }

  return (
    <div className="space-y-6">
      {/* Comment Form */}
      <div className="p-6 rounded-lg bg-slate-800 border border-slate-700">
        <h3 className="text-lg font-bold mb-4">Leave a Comment</h3>
        <form onSubmit={handlePostComment} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition"
            />
          </div>
          <div>
            <textarea
              placeholder="Share your thoughts..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition resize-none h-24"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition"
          >
            Post Comment
          </button>
        </form>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold">Comments ({comments.length})</h3>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="p-4 rounded-lg bg-slate-800 border border-slate-700 hover:border-slate-600 transition"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-lg">
                    {comment.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{comment.author}</p>
                    <p className="text-xs text-gray-500">{comment.date}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteComment(comment.id)}
                  className="text-gray-500 hover:text-red-400 transition text-sm"
                >
                  ✕
                </button>
              </div>

              <p className="text-gray-300 mb-3">{comment.text}</p>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleLikeComment(comment.id)}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition"
                >
                  <span>👍</span> Like ({comment.likes || 0})
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-8">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  )
}

export default CommentsSection
