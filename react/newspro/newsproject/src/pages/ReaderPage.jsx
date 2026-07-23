import React, { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AudioPlayer from '../components/AudioPlayer'
import CommentsSection from '../components/CommentsSection'
import ShinyText from '../components/reactbits/ShinyText'
import { NewsContext } from '../context/NewsContext'
import { fallbackNews } from '../data/fallbackNews'

const ReaderPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { news } = useContext(NewsContext) || {}
  const [article, setArticle] = useState(null)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('article')

  useEffect(() => {
    // Simulate fetching article
    const allNews = news || fallbackNews
    const foundArticle = allNews.find((item) => item.id == id)
    setArticle(foundArticle || allNews[0])
    setLoading(false)
  }, [id, news])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
          <p className="text-gray-400 mt-4">Loading article...</p>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
    // Store bookmark in localStorage
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')
    if (!isBookmarked) {
      bookmarks.push(article.id)
    } else {
      bookmarks = bookmarks.filter((bid) => bid !== article.id)
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  }

  const handleShare = async (platform) => {
    const text = `Check out this article: ${article.title}`
    const url = window.location.href

    if (platform === 'copy') {
      navigator.clipboard.writeText(url)
      alert('Link copied to clipboard!')
    } else if (platform === 'twitter') {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
        '_blank'
      )
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition"
          >
            <span>←</span>
            <span>Back to News</span>
          </button>
          <div className="flex items-center gap-4">
            <button
              onClick={handleBookmark}
              className={`px-4 py-2 rounded-lg transition ${
                isBookmarked
                  ? 'bg-cyan-600 text-white'
                  : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
              }`}
            >
              {isBookmarked ? '★ Bookmarked' : '☆ Bookmark'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Article Header */}
        <article>
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            {article.title}
          </h1>

          {/* Article Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <img
                src={article.author?.avatar || 'https://via.placeholder.com/40'}
                alt={article.author?.name || 'Author'}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-white font-semibold">{article.author?.name || 'News Team'}</p>
                <p className="text-sm text-gray-500">{article.author?.bio || 'Staff Writer'}</p>
              </div>
            </div>
            <div className="text-sm">
              <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
            </div>
            <div className="text-sm">
              <p>{article.views || 0} views</p>
            </div>
            <div className="text-sm">
              <span className="px-3 py-1 bg-slate-800 rounded-full capitalize">
                {article.category}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
            />
          )}

          {/* Tab Navigation */}
          <div className="flex gap-4 mb-8 border-b border-slate-800">
            <button
              onClick={() => setActiveTab('article')}
              className={`px-6 py-3 font-semibold transition border-b-2 ${
                activeTab === 'article'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              Article
            </button>
            <button
              onClick={() => setActiveTab('listen')}
              className={`px-6 py-3 font-semibold transition border-b-2 ${
                activeTab === 'listen'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              Listen (Audio)
            </button>
            <button
              onClick={() => setActiveTab('comments')}
              className={`px-6 py-3 font-semibold transition border-b-2 ${
                activeTab === 'comments'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              Comments
            </button>
          </div>

          {/* Article Content */}
          {activeTab === 'article' && (
            <div className="space-y-6 mb-12">
              {/* Description */}
              {article.description && (
                <p className="text-xl text-gray-300 leading-relaxed font-light">
                  {article.description}
                </p>
              )}

              {/* Full Content */}
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-400 leading-relaxed whitespace-pre-wrap">
                  {article.content ||
                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

${article.description || ''}`}
                </p>
              </div>

              {/* Share Buttons */}
              <div className="mt-12 pt-8 border-t border-slate-800">
                <p className="text-gray-400 mb-4 font-semibold">Share this article:</p>
                <div className="flex gap-4 flex-wrap">
                  <button
                    onClick={() => handleShare('twitter')}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition flex items-center gap-2"
                  >
                    <span>𝕏</span> Twitter
                  </button>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="px-6 py-3 bg-blue-700 hover:bg-blue-600 rounded-lg transition flex items-center gap-2"
                  >
                    <span>f</span> Facebook
                  </button>
                  <button
                    onClick={() => handleShare('copy')}
                    className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition flex items-center gap-2"
                  >
                    <span>🔗</span> Copy Link
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Audio Player Tab */}
          {activeTab === 'listen' && (
            <div className="py-12">
              <h2 className="text-2xl font-bold mb-6">Listen to this article</h2>
              <AudioPlayer articleText={article.title + '. ' + (article.description || '')} />
            </div>
          )}

          {/* Comments Tab */}
          {activeTab === 'comments' && (
            <div className="py-12">
              <h2 className="text-2xl font-bold mb-6">Comments & Discussion</h2>
              <CommentsSection articleId={article.id} />
            </div>
          )}
        </article>

        {/* Related Articles */}
        <section className="mt-16 pt-12 border-t border-slate-800">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(fallbackNews.slice(0, 3) || []).map((relatedArticle, index) => (
              <div
                key={relatedArticle.id || index}
                onClick={() => navigate(`/reader/${relatedArticle.id}`)}
                className="p-4 bg-slate-800 rounded-lg hover:bg-slate-700 cursor-pointer transition transform hover:scale-105"
              >
                {relatedArticle.urlToImage && (
                  <img
                    src={relatedArticle.urlToImage}
                    alt={relatedArticle.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="font-bold text-lg line-clamp-2">{relatedArticle.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{relatedArticle.category}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default ReaderPage
