import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewsCard = ({ article }) => {
  const navigate = useNavigate()
  const [isBookmarked, setIsBookmarked] = useState(false)

  if (!article) return null

  const handleBookmark = (e) => {
    e.stopPropagation()
    setIsBookmarked(!isBookmarked)
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    if (!isBookmarked) {
      bookmarks.push(article.id)
    } else {
      bookmarks = bookmarks.filter((bid) => bid !== article.id)
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  }

  const handleShare = (e, platform) => {
    e.stopPropagation()
    const text = `Check out: ${article.title}`
    const url = window.location.href

    if (platform === 'copy') {
      navigator.clipboard.writeText(url)
    }
  }

  return (
    <div
      onClick={() => navigate(`/reader/${article.id}`)}
      className="group cursor-pointer rounded-lg overflow-hidden bg-white border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-200 hover-lift h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-48 bg-gray-100">
        {article.urlToImage ? (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-4xl">📰</span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur text-purple-600 text-xs font-bold rounded-full capitalize animate-fade-scale shadow-sm">
          {article.category || 'News'}
        </div>

        {/* Action Buttons Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={handleBookmark}
            className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur transition-all ${
              isBookmarked
                ? 'bg-purple-500 text-white'
                : 'bg-white/30 text-white hover:bg-white/50'
            }`}
            title="Bookmark article"
          >
            {isBookmarked ? '★' : '☆'}
          </button>
          <button
            onClick={(e) => handleShare(e, 'copy')}
            className="w-12 h-12 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center text-white transition-all backdrop-blur"
            title="Copy link"
          >
            🔗
          </button>
        </div>

        {/* Views Badge */}
        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/40 backdrop-blur text-white text-xs rounded-lg">
          👁️ {article.views || 1200}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        {/* Title & Description */}
        <div>
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-purple-600 transition mb-2 leading-tight text-gray-900">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
            {article.description || 'Read more for the full story...'}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          {/* Author & Date */}
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xs font-bold">
              {article.author?.name?.charAt(0) || 'N'}
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-xs">
                {article.author?.name || 'News Team'}
              </p>
              <p className="text-xs text-gray-500">
                {new Date(article.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Read More Arrow */}
          <div className="text-purple-600 group-hover:translate-x-1 transition-transform text-lg">
            →
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
