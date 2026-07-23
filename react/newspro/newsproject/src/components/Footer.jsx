import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-600 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-4 flex items-center gap-2">
              <span className="text-2xl">📰</span>
              NewsPro
            </h3>
            <p className="text-sm text-gray-600">
              Your trusted source for breaking news and in-depth reporting from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-purple-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/bookmarks" className="text-gray-600 hover:text-purple-600 transition">
                  Bookmarks
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="text-gray-600 hover:text-purple-600 transition">
                  Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-sm">Categories</h4>
            <ul className="space-y-2 text-sm">
              {['Technology', 'Business', 'Sports', 'Entertainment'].map((cat) => (
                <li key={cat}>
                  <a href="#" className="text-gray-600 hover:text-purple-600 transition">
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-sm">Status</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-gray-600">API: Operational</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-gray-600">Database: Connected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2024 NewsPro. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-gray-600 hover:text-purple-600 transition">
                Privacy
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition">
                Terms
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
