
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">Browse&Convert</span>
        </a>
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-sm font-semibold text-slate-500">
            <li><a href="#tool" className="text-indigo-600 hover:text-indigo-700">Converter Tool</a></li>
            <li><a href="#how-to" className="hover:text-indigo-600 transition-colors">How it Works</a></li>
            <li><a href="#faq" className="hover:text-indigo-600 transition-colors">FAQ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
