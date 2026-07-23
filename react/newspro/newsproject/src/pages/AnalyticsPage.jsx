import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fallbackNews } from '../data/fallbackNews'

const AnalyticsPage = () => {
  const navigate = useNavigate()
  const [readingStats, setReadingStats] = useState({
    totalArticlesRead: 0,
    totalTimeSpent: 0,
    averageReadingTime: 0,
    favoriteCategory: 'Technology',
  })
  const [categoryStats, setCategoryStats] = useState([])
  const [weeklyActivity, setWeeklyActivity] = useState([])
  const [topArticles, setTopArticles] = useState([])

  useEffect(() => {
    // Generate mock analytics data
    const categories = [...new Set(fallbackNews.map((a) => a.category))]
    const categoryData = categories.map((cat) => ({
      name: cat,
      count: Math.floor(Math.random() * 30) + 5,
      percentage: 0,
    }))

    const total = categoryData.reduce((sum, cat) => sum + cat.count, 0)
    categoryData.forEach((cat) => {
      cat.percentage = Math.round((cat.count / total) * 100)
    })

    // Weekly activity
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const weeklyData = days.map((day) => ({
      day,
      articles: Math.floor(Math.random() * 15) + 2,
    }))

    setCategoryStats(categoryData)
    setWeeklyActivity(weeklyData)
    setTopArticles(fallbackNews.slice(0, 5))
    setReadingStats({
      totalArticlesRead: 145,
      totalTimeSpent: 4320, // minutes
      averageReadingTime: 30,
      favoriteCategory: categoryData[0]?.name || 'Technology',
    })
  }, [])

  const maxWeeklyArticles = Math.max(...weeklyActivity.map((w) => w.articles))

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
            Analytics & Insights
          </h1>
          <p className="text-gray-400">Your personalized news reading statistics</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-lg bg-gradient-to-br from-cyan-900/30 to-cyan-900/10 border border-cyan-700/30 hover:border-cyan-500/50 transition">
            <div className="text-gray-400 text-sm font-semibold mb-2">Articles Read</div>
            <div className="text-4xl font-bold text-cyan-400">{readingStats.totalArticlesRead}</div>
            <div className="text-xs text-gray-500 mt-2">This month</div>
          </div>

          <div className="p-6 rounded-lg bg-gradient-to-br from-purple-900/30 to-purple-900/10 border border-purple-700/30 hover:border-purple-500/50 transition">
            <div className="text-gray-400 text-sm font-semibold mb-2">Time Spent</div>
            <div className="text-4xl font-bold text-purple-400">
              {Math.round(readingStats.totalTimeSpent / 60)}h
            </div>
            <div className="text-xs text-gray-500 mt-2">Total reading time</div>
          </div>

          <div className="p-6 rounded-lg bg-gradient-to-br from-blue-900/30 to-blue-900/10 border border-blue-700/30 hover:border-blue-500/50 transition">
            <div className="text-gray-400 text-sm font-semibold mb-2">Avg. Read Time</div>
            <div className="text-4xl font-bold text-blue-400">
              {readingStats.averageReadingTime}m
            </div>
            <div className="text-xs text-gray-500 mt-2">Per article</div>
          </div>

          <div className="p-6 rounded-lg bg-gradient-to-br from-green-900/30 to-green-900/10 border border-green-700/30 hover:border-green-500/50 transition">
            <div className="text-gray-400 text-sm font-semibold mb-2">Top Category</div>
            <div className="text-4xl font-bold text-green-400 capitalize">
              {readingStats.favoriteCategory}
            </div>
            <div className="text-xs text-gray-500 mt-2">Most read</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Category Breakdown */}
          <div className="lg:col-span-2 p-6 rounded-lg bg-slate-800/50 border border-slate-700">
            <h2 className="text-2xl font-bold mb-6">Reading by Category</h2>
            <div className="space-y-4">
              {categoryStats.map((cat) => (
                <div key={cat.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold capitalize">{cat.name}</span>
                    <span className="text-cyan-400 font-bold">
                      {cat.percentage}% ({cat.count})
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full transition-all duration-500"
                      style={{ width: `${cat.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Activity Chart */}
          <div className="p-6 rounded-lg bg-slate-800/50 border border-slate-700">
            <h2 className="text-2xl font-bold mb-6">Weekly Activity</h2>
            <div className="flex items-end justify-between h-48 gap-2">
              {weeklyActivity.map((week) => (
                <div key={week.day} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t transition-all hover:from-cyan-400 hover:to-blue-400"
                    style={{
                      height: `${(week.articles / maxWeeklyArticles) * 100}%`,
                      minHeight: '4px',
                    }}
                    title={`${week.articles} articles`}
                  />
                  <span className="text-xs text-gray-400 mt-2">{week.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Articles */}
        <div className="mt-8 p-6 rounded-lg bg-slate-800/50 border border-slate-700">
          <h2 className="text-2xl font-bold mb-6">Top Trending Articles</h2>
          <div className="space-y-4">
            {topArticles.map((article, index) => (
              <div
                key={article.id}
                className="flex items-center justify-between p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition group cursor-pointer"
                onClick={() => navigate(`/reader/${article.id}`)}
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="text-2xl font-bold text-cyan-400 w-8 text-center">#{index + 1}</div>
                  <div className="flex-1">
                    <h3 className="font-bold group-hover:text-cyan-400 transition line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-400 capitalize mt-1">{article.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-cyan-400">{article.views || 5000 + index * 100}</div>
                  <div className="text-xs text-gray-500">views</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-700/30">
          <h2 className="text-2xl font-bold mb-4">📊 Personalized Insights</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">•</span>
              <span>
                You spend an average of <strong>{readingStats.averageReadingTime} minutes</strong> per
                article. Try reading summaries for a quicker update!
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">•</span>
              <span>
                Your most-read category is <strong>{readingStats.favoriteCategory}</strong>. We've
                curated more articles in this category for you.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">•</span>
              <span>
                You're most active on <strong>Wednesday and Thursday</strong>. Check back on these
                days for fresh content!
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">•</span>
              <span>
                Try exploring <strong>Science & Health</strong> category - it's trending this week!
              </span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default AnalyticsPage
