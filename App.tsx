
import React from 'react';
import Header from './components/Header';
import Converter from './components/Converter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      
      <main className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            Privacy Focused Image Suite
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Browse & <br />
            <span className="text-indigo-600">
              Convert
            </span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Convert, compress, and resize your images instantly. 
            All processing happens locally in your browser for 100% privacy.
          </p>
        </div>

        <Converter />

        <section className="mt-32 max-w-6xl mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Convert Any Image</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Seamlessly switch between PNG, JPG, WEBP, and BMP with high fidelity retention.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Pro Compression</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Reduce file size up to 90% while maintaining visual quality using advanced algorithms.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Smart Resizing</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Change dimensions with aspect ratio locking. Perfect for social media and web assets.</p>
              </div>
           </div>
        </section>
      </main>

      <footer className="mt-24 border-t border-slate-200 bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs font-bold uppercase tracking-widest">
          <p>© 2024 Browse&Convert Studio</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <span className="hover:text-indigo-600 transition-colors cursor-pointer">Security</span>
            <span className="hover:text-indigo-600 transition-colors cursor-pointer">Terms</span>
            <span className="hover:text-indigo-600 transition-colors cursor-pointer">API</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
