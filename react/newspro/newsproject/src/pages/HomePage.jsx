import React, { useState, useContext, useEffect } from 'react'
import NewsCard from '../components/NewsCard'
import FilterPanel from '../components/FilterPanel'
import { NewsContext } from '../context/NewsContext'
import { fallbackNews } from '../data/fallbackNews'

const HomePage = () => {
  const { news, searchNews, filterByCategory } = useContext(NewsContext) || {}
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('latest')
  const [displayNews, setDisplayNews] = useState(fallbackNews)

  useEffect(() => {
    let filtered = news || fallbackNews

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        (article) => article.category?.toLowerCase() === selectedCategory.toLowerCase()
      )
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (article) =>
          article.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Sort
    if (sortBy === 'latest') {
      filtered = [...filtered].sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
      )
    } else if (sortBy === 'oldest') {
      filtered = [...filtered].sort(
        (a, b) => new Date(a.publishedAt) - new Date(b.publishedAt)
      )
    } else if (sortBy === 'trending') {
      filtered = [...filtered].sort((a, b) => (b.views || 0) - (a.views || 0))
    }

    setDisplayNews(filtered)
  }, [searchQuery, selectedCategory, sortBy, news])

  const categories = [
    'all',
    'technology',
    'business',
    'sports',
    'entertainment',
    'health',
    'science',
    'politics',
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white border-b border-gray-200 py-8 px-4 sm:px-6 lg:px-8\">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 gradient-text-purple">
            Latest News
          </h1>
          <p className="text-gray-600 text-lg">
            Discover and explore the most important stories
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filter Panel */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Search Bar */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Search News
                </label>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition"
                />
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Categories
                </label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition capitalize font-medium text-sm ${
                        selectedCategory === category
                          ? 'bg-purple-600 text-white'
                          : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-500'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort Options */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition text-sm"
                >
                  <option value="latest">Latest</option>
                  <option value="oldest">Oldest</option>
                  <option value="trending">Trending</option>
                </select>
              </div>

              {/* Results Count */}
              <div className="p-4 rounded-lg bg-white border border-gray-300">
                <p className="text-sm text-gray-700">
                  Found <span className="font-bold text-purple-600">{displayNews.length}</span>{' '}
                  articles
                </p>
              </div>
            </div>
          </aside>

          {/* News Grid */}
          <div className="lg:col-span-3">
            {displayNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayNews.map((article, index) => (
                  <NewsCard key={article.id || index} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Load More Button */}
      <div className="flex justify-center pb-16">
        <button className="px-8 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition">
          Load More Articles
        </button>
      </div>
    </div>
  )
}

export default HomePage