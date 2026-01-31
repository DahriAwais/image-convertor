
import React from 'react';
import Header from './components/Header';
import Converter from './components/Converter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      
      <main>
        {/* HERO SECTION - CLEAN H1 */}
        <section className="py-12 md:py-20 max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            100% Secure & Private
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Free Online Image Converter
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Quickly convert your images to JPG, PNG, or WebP. Use our <strong>private image converter</strong> to keep your data safe.
          </p>
        </section>

        {/* TOOL SECTION - ID for internal link */}
        <section id="tool" className="mb-20">
          <Converter />
        </section>

        {/* HOW TO USE SECTION - H2 tag */}
        <section id="how-to" className="py-20 bg-white border-y border-slate-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">How to Convert Images Online</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto">1</div>
                <h3 className="font-bold text-lg text-slate-800">Upload Image</h3>
                <p className="text-slate-500 text-sm">Select your file for conversion.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto">2</div>
                <h3 className="font-bold text-lg text-slate-800">Choose Format</h3>
                <p className="text-slate-500 text-sm">Pick PNG, JPG, or WebP.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto">3</div>
                <h3 className="font-bold text-lg text-slate-800">Download</h3>
                <p className="text-slate-500 text-sm">Save your file instantly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION - H2 tag + Schema relevance */}
        <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Image Conversion FAQ</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-2">Is this image converter free?</h3>
                <p className="text-slate-500 text-sm">Yes, Browse&Convert is a completely free online tool for all users.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-2">Are my photos uploaded to a server?</h3>
                <p className="text-slate-500 text-sm">No. We use <a href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API" target="_blank" className="text-indigo-600 underline">Canvas API</a> to process everything in your browser.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-24 border-t border-slate-200 bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs font-bold uppercase tracking-widest">
          <p>© 2024 Browse&Convert - Built for Speed & Privacy</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#tool" className="hover:text-indigo-600 transition-colors">Converter</a>
            <a href="#faq" className="hover:text-indigo-600 transition-colors">Privacy FAQ</a>
            <a href="https://github.com" target="_blank" className="hover:text-indigo-600 transition-colors">Source</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
