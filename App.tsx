
import React from 'react';
import Header from './components/Header';
import Converter from './components/Converter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      
      <main>
        {/* HERO SECTION - Keyword Optimized H1 */}
        <section className="py-12 md:py-20 max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            Private & Secure Image Suite
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Free Online Image <br />
            <span className="text-indigo-600">
              Converter & Editor
            </span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Convert JPG to PNG, WebP, or BMP in seconds. Compress and resize images locally for 100% privacy—no server uploads required.
          </p>
        </section>

        {/* TOOL SECTION */}
        <section id="tool" className="mb-20">
          <Converter />
        </section>

        {/* HOW TO USE SECTION - SEO Context */}
        <section className="py-20 bg-white border-y border-slate-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">How to Use Our Image Converter</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto">1</div>
                <h3 className="font-bold text-lg">Upload Photo</h3>
                <p className="text-slate-500 text-sm">Drag and drop your image or click to select a file from your device.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto">2</div>
                <h3 className="font-bold text-lg">Choose Settings</h3>
                <p className="text-slate-500 text-sm">Select target format (PNG, JPG, WebP), resize dimensions, or adjust compression quality.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto">3</div>
                <h3 className="font-bold text-lg">Download Result</h3>
                <p className="text-slate-500 text-sm">Click download to save your new image instantly. Processing is 100% local!</p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-24 max-w-6xl mx-auto px-4">
           <h2 className="text-center text-sm font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">Why Choose Us?</h2>
           <h3 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">The Professional Choice for Image Editing</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900">Format Flexibility</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Seamlessly switch between PNG, JPG, WEBP, and BMP. Our tool auto-detects formats for the fastest workflow.</p>
              </article>

              <article className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900">Smart Compression</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Reduce file sizes by up to 90% without losing visible quality. Perfect for optimizing web speed.</p>
              </article>

              <article className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900">Precision Resize</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Resize images while maintaining aspect ratio. Ideal for social media profile pictures and ads.</p>
              </article>
           </div>
        </section>

        {/* FAQ SECTION - For Google Snippets */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">Is this image converter safe to use?</h4>
                <p className="text-slate-500 text-sm">Yes, 100%. Our tool operates entirely within your browser. We never upload your images to any server, meaning your privacy is guaranteed.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">What image formats are supported?</h4>
                <p className="text-slate-500 text-sm">We currently support converting between JPG, PNG, WEBP, and BMP. You can also compress or resize any of these formats.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2">Do I need to sign up to use the tool?</h4>
                <p className="text-slate-500 text-sm">No account or registration is required. Browse&Convert is free for everyone with no hidden limits.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-24 border-t border-slate-200 bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs font-bold uppercase tracking-widest">
          <p>© 2024 Browse&Convert Studio - Fast. Free. Local.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <span className="hover:text-indigo-600 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-indigo-600 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-indigo-600 transition-colors cursor-pointer">Support</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
