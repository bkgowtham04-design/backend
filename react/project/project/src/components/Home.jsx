import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  const handleNavigateToTopics = () => {
    setActiveTab('topics');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-sky-500 selection:text-white">
      {/* Sticky Header / Navbar */}
      <header className="sticky top-0 z-40 w-full glass shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            {/* Logo */}
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center shadow-md shadow-sky-500/20">
              <svg className="w-5 h-5 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-sky-400 via-indigo-200 to-amber-200 bg-clip-text text-transparent">
              DevCore Hub
            </span>
          </div>

          <nav className="flex space-x-1">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'home'
                  ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('topics')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === 'topics'
                  ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
              }`}
            >
              Topics
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'home' ? (
          /* HOME TAB VIEW */
          <div className="space-y-12 animate-fadeIn">
            {/* Intro Welcome Hero */}
            <div className="text-center max-w-3xl mx-auto mb-16 mt-4">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                Master the Core Technologies of Modern Web Development
              </h1>
              <p className="text-slate-400 text-lg md:text-xl">
                Dive deep into React component architecture, hooks, and advanced states, powered by the fundamental mechanics of modern asynchronous JavaScript.
              </p>
            </div>

            {/* Banner 1: React Details */}
            <div className="relative overflow-hidden rounded-3xl border border-sky-500/10 bg-slate-900/40 glow-react transition-all duration-500 hover:border-sky-500/20 group">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-950/20 via-transparent to-transparent pointer-events-none"></div>
              {/* React SVG Background graphic */}
              <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-5 group-hover:opacity-10 transition-opacity duration-500 hidden md:flex items-center justify-center p-8">
                <svg className="w-full h-full text-sky-400" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
                  <title>React Logo</title>
                  <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
                  <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                  </g>
                </svg>
              </div>

              <div className="relative p-8 md:p-12 lg:p-16 flex flex-col md:w-3/4 justify-between z-10">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-4 tracking-wide uppercase">
                    Frontend library
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                    React: Declarative, Component-Based UI
                  </h2>
                  <p className="text-slate-300 text-base md:text-lg mb-6 leading-relaxed">
                    React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Build encapsulated components that manage their own state, then compose them to make complex UIs.
                  </p>
                  
                  {/* React Details bullets */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-slate-400 text-sm"><strong className="text-slate-200">Virtual DOM</strong> for ultra-fast UI updates</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-slate-400 text-sm"><strong className="text-slate-200">Component State</strong> and powerful React Hooks</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-slate-400 text-sm"><strong className="text-slate-200">Unidirectional Flow</strong> ensuring clean data cycles</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-slate-400 text-sm"><strong className="text-slate-200">Context API</strong> for simplified state management</span>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={handleNavigateToTopics}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold tracking-wide transition-all duration-300 shadow-lg shadow-sky-500/20 hover:scale-102 cursor-pointer group"
                  >
                    Explore React Topics
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Banner 2: JavaScript Details */}
            <div className="relative overflow-hidden rounded-3xl border border-amber-500/10 bg-slate-900/40 glow-js transition-all duration-500 hover:border-amber-500/20 group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-950/10 via-transparent to-transparent pointer-events-none"></div>
              {/* JS Large text logo graphic in background */}
              <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-5 group-hover:opacity-10 transition-opacity duration-500 hidden md:flex items-center justify-center p-8">
                <span className="text-amber-400 font-extrabold text-9xl tracking-tighter">JS</span>
              </div>

              <div className="relative p-8 md:p-12 lg:p-16 flex flex-col md:w-3/4 justify-between z-10">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4 tracking-wide uppercase">
                    Core Programming Language
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
                    JavaScript: The Engine of the Web
                  </h2>
                  <p className="text-slate-300 text-base md:text-lg mb-6 leading-relaxed">
                    JavaScript is a lightweight, interpreted, or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js. Understanding closures, scoping, prototypes, and asynchronous patterns is crucial for any expert React developer.
                  </p>

                  {/* JavaScript Details bullets */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-slate-400 text-sm"><strong className="text-slate-200">Asynchronous Power</strong> with Promises & Async/Await</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-slate-400 text-sm"><strong className="text-slate-200">Lexical Closures</strong> for data encapsulation</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-slate-400 text-sm"><strong className="text-slate-200">Modern ES6+ Syntax</strong> (Destructuring, Spread, Arrow Fn)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-slate-400 text-sm"><strong className="text-slate-200">V8 Engine Optimization</strong> & Javascript Event Loop</span>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={handleNavigateToTopics}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold tracking-wide transition-all duration-300 shadow-lg shadow-amber-400/20 hover:scale-102 cursor-pointer group"
                  >
                    Explore JavaScript Topics
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* TOPICS TAB VIEW */
          <div className="space-y-8 animate-fadeIn text-center py-20 border border-dashed border-slate-800 rounded-3xl bg-slate-900/10">
            <svg className="w-12 h-12 text-slate-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12M8.25 17.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <h2 className="text-3xl font-extrabold text-white">Topics Space</h2>
            <p className="text-slate-400 max-w-sm mx-auto text-sm">
              The card content inside this tab has been removed per your request. You can now use this space for custom layouts or future topic lists.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <span className="font-extrabold text-lg text-white">DevCore Hub</span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm">
                A premium dashboard to master standard development technologies. Get code details, best practices, and interactive concept walkthroughs in React and JavaScript.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">React</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><span className="hover:text-sky-400 cursor-pointer transition-colors" onClick={handleNavigateToTopics}>Components & Props</span></li>
                <li><span className="hover:text-sky-400 cursor-pointer transition-colors" onClick={handleNavigateToTopics}>State Management</span></li>
                <li><span className="hover:text-sky-400 cursor-pointer transition-colors" onClick={handleNavigateToTopics}>Context API</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">JavaScript</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><span className="hover:text-amber-400 cursor-pointer transition-colors" onClick={handleNavigateToTopics}>Asynchronous Patterns</span></li>
                <li><span className="hover:text-amber-400 cursor-pointer transition-colors" onClick={handleNavigateToTopics}>ES6+ Architecture</span></li>
                <li><span className="hover:text-amber-400 cursor-pointer transition-colors" onClick={handleNavigateToTopics}>Closures & Scope</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row md:justify-between md:items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} DevCore Hub. Built for modern React developers.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
              <span className="hover:text-slate-300 cursor-pointer">Source Code</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
