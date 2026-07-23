import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fallbackNews } from '../data/fallbackNews'

const BookmarksPage = () => {
  const navigate = useNavigate()
  const [bookmarkedArticles, setBookmarkedArticles] = useState([])
  const [filterCategory, setFilterCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid') // grid or list

  useEffect(() => {
    // Load bookmarked articles from localStorage
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    const bookmarkedNews = fallbackNews.filter((article) => bookmarks.includes(article.id))
    setBookmarkedArticles(bookmarkedNews)
  }, [])

  const handleRemoveBookmark = (articleId) => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    const updatedBookmarks = bookmarks.filter((id) => id !== articleId)
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks))
    setBookmarkedArticles(bookmarkedArticles.filter((article) => article.id !== articleId))
  }

  const filteredArticles = bookmarkedArticles.filter((article) => {
    const matchesCategory = filterCategory === 'all' || article.category === filterCategory
    const matchesSearch =
      searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description?.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const categories = ['all', ...new Set(bookmarkedArticles.map((a) => a.category))]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      {/* Header */}
      <header className="pt-8 pb-6 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="mb-6 flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition"
          >
            <span>←</span>
            <span>Back to News</span>
          </button>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            My Bookmarks
          </h1>
          <p className="text-gray-400">
            {bookmarkedArticles.length} saved articles for later reading
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls */}
        <div className="mb-8 space-y-6">
          {/* Search and View Mode */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder="Search bookmarks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-3 rounded-lg transition ${
                  viewMode === 'grid'
                    ? 'bg-cyan-600 text-white'
                    : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                }`}
              >
                ⊞ Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-3 rounded-lg transition ${
                  viewMode === 'list'
                    ? 'bg-cyan-600 text-white'
                    : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                }`}
              >
                ☰ List
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3">
              Filter by Category
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilterCategory(category)}
                  className={`px-4 py-2 rounded-full transition capitalize font-medium ${
                    filterCategory === category
                      ? 'bg-cyan-600 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Articles Display */}
        {filteredArticles.length > 0 ? (
          <div
            className={`${
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-4'
            }`}
          >
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className={`rounded-lg bg-slate-800 border border-slate-700 overflow-hidden hover:border-cyan-500 transition group ${
                  viewMode === 'list' ? 'flex gap-4 p-4' : ''
                }`}
              >
                {/* Image */}
                {article.urlToImage && (
                  <div className={viewMode === 'list' ? 'w-32 h-24 flex-shrink-0' : 'w-full h-48'}>
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>
                )}

                {/* Content */}
                <div className={viewMode === 'list' ? 'flex-1' : 'p-4'}>
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs px-2 py-1 bg-slate-700 rounded-full capitalize">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg line-clamp-2 mb-2 group-hover:text-cyan-400 transition">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                    {article.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <button
                      onClick={() => navigate(`/reader/${article.id}`)}
                      className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-sm transition"
                    >
                      Read Article
                    </button>
                    <button
                      onClick={() => handleRemoveBookmark(article.id)}
                      className="px-4 py-2 bg-red-600/20 text-red-400 hover:bg-red-600/30 rounded-lg text-sm transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No bookmarks found</h3>
            <p className="text-gray-500 mb-6">
              {bookmarkedArticles.length === 0
                ? 'Start bookmarking articles to save them for later reading'
                : 'No articles match your search or filter criteria'}
            </p>
            {bookmarkedArticles.length === 0 && (
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition"
              >
                Explore News
              </button>
            )}
          </div>
        )}
      </main>
    </div>
  )
}

export default BookmarksPage
