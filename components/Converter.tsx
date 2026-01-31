
import React, { useState, useRef, useCallback } from 'react';
import { FileData, SUPPORTED_FORMATS, ImageFormat, FormatOption, ToolMode } from '../types';
import { formatSize, getMimeTypeLabel, processImage, getImageDimensions } from '../utils/imageUtils';

interface ToolTabsProps {
  mode: ToolMode;
  setMode: (mode: ToolMode) => void;
}

const ToolTabs: React.FC<ToolTabsProps> = ({ mode, setMode }) => (
  <div className="flex p-1 bg-slate-100 rounded-2xl mb-8 w-fit mx-auto">
    {(['convert', 'compress', 'resize'] as ToolMode[]).map((m) => (
      <button
        key={m}
        onClick={() => setMode(m)}
        className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
          mode === m 
            ? 'bg-white text-indigo-600 shadow-sm' 
            : 'text-slate-500 hover:text-slate-700'
        }`}
      >
        {m.charAt(0).toUpperCase() + m.slice(1)}
      </button>
    ))}
  </div>
);

const Converter: React.FC = () => {
  const [fileData, setFileData] = useState<FileData | null>(null);
  const [mode, setMode] = useState<ToolMode>('convert');
  const [targetFormat, setTargetFormat] = useState<FormatOption>(SUPPORTED_FORMATS[0]);
  const [quality, setQuality] = useState(80);
  const [resizeWidth, setResizeWidth] = useState<number>(0);
  const [resizeHeight, setResizeHeight] = useState<number>(0);
  const [aspectRatio, setAspectRatio] = useState<number>(1);
  
  const [converting, setConverting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file.');
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      const url = e.target?.result as string;
      const dims = await getImageDimensions(url);
      
      setFileData({
        file,
        previewUrl: url,
        originalFormat: file.type as ImageFormat,
        name: file.name,
        size: file.size,
        width: dims.width,
        height: dims.height,
      });
      
      setResizeWidth(dims.width);
      setResizeHeight(dims.height);
      setAspectRatio(dims.width / dims.height);

      const otherFormats = SUPPORTED_FORMATS.filter(f => f.mimeType !== file.type);
      if (otherFormats.length > 0) {
        setTargetFormat(otherFormats[0]);
      }
    };
    reader.readAsDataURL(file);
  }, []);

  const handleWidthChange = (val: number) => {
    setResizeWidth(val);
    setResizeHeight(Math.round(val / aspectRatio));
  };

  const handleHeightChange = (val: number) => {
    setResizeHeight(val);
    setResizeWidth(Math.round(val * aspectRatio));
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const handleConvert = async () => {
    if (!fileData) return;
    setConverting(true);
    try {
      const options = {
        quality: mode === 'compress' ? quality / 100 : 0.9,
        width: mode === 'resize' ? resizeWidth : undefined,
        height: mode === 'resize' ? resizeHeight : undefined,
      };

      const finalMime = mode === 'convert' ? targetFormat.mimeType : fileData.originalFormat;
      const finalExt = mode === 'convert' ? targetFormat.extension : (fileData.name.split('.').pop() || 'jpg');

      const convertedDataUrl = await processImage(fileData.previewUrl, finalMime, options);
      const link = document.createElement('a');
      const baseName = fileData.name.substring(0, fileData.name.lastIndexOf('.')) || fileData.name;
      link.download = `${baseName}_pixelshifted.${finalExt}`;
      link.href = convertedDataUrl;
      link.click();
    } catch (err) {
      console.error(err);
      alert('Action failed. Please try again.');
    } finally {
      setConverting(false);
    }
  };

  const reset = () => {
    setFileData(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      {!fileData ? (
        <>
          <ToolTabs mode={mode} setMode={setMode} />
          <div 
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`group relative border-2 border-dashed rounded-3xl p-16 text-center transition-all cursor-pointer ${
              isDragging 
                ? 'border-indigo-500 bg-indigo-50/50 scale-[1.01]' 
                : 'border-slate-200 hover:border-indigo-300 bg-white shadow-sm'
            }`}
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={onFileChange} 
              className="hidden" 
              accept="image/*"
            />
            <div className="mb-6 mx-auto w-20 h-20 bg-indigo-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Drop image to {mode}</h2>
            <p className="text-slate-500 mb-8">Fast, free and secure local processing</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['JPG', 'PNG', 'WEBP', 'BMP'].map(f => (
                <span key={f} className="px-3 py-1 bg-slate-100 text-[10px] font-bold text-slate-500 rounded-lg uppercase">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <ToolTabs mode={mode} setMode={setMode} />
          
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50">
            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-full md:w-2/5 group">
                  <div className="aspect-square bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 relative">
                    <img 
                      src={fileData.previewUrl} 
                      alt="Preview" 
                      className="w-full h-full object-contain p-4 transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-slate-600 shadow-sm border border-slate-100 uppercase">
                      {getMimeTypeLabel(fileData.originalFormat)}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between px-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{formatSize(fileData.size)}</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{fileData.width}x{fileData.height}</span>
                  </div>
                </div>

                <div className="flex-1 space-y-8 w-full">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 truncate">
                      {fileData.name}
                    </h3>
                    <p className="text-indigo-600 text-sm font-semibold mt-1">Ready for {mode}</p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-6">
                    {mode === 'convert' && (
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Select Output Format</label>
                        <div className="grid grid-cols-2 gap-3">
                          {SUPPORTED_FORMATS.map(f => (
                            <button
                              key={f.mimeType}
                              onClick={() => setTargetFormat(f)}
                              className={`p-3 rounded-xl border-2 transition-all font-bold text-sm ${
                                targetFormat.mimeType === f.mimeType
                                  ? 'border-indigo-600 bg-indigo-600 text-white'
                                  : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-200'
                              }`}
                            >
                              {f.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {mode === 'compress' && (
                      <div className="space-y-4">
                         <div className="flex justify-between items-center">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Compression Quality</label>
                            <span className="text-indigo-600 font-bold">{quality}%</span>
                         </div>
                         <input 
                            type="range" 
                            min="1" 
                            max="100" 
                            value={quality} 
                            onChange={(e) => setQuality(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                         />
                         <p className="text-[10px] text-slate-400 font-medium italic">Lower quality results in smaller file sizes.</p>
                      </div>
                    )}

                    {mode === 'resize' && (
                      <div className="space-y-4">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Dimensions (px)</label>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                             <span className="text-[10px] text-slate-400 uppercase font-bold">Width</span>
                             <input 
                                type="number" 
                                value={resizeWidth} 
                                onChange={(e) => handleWidthChange(parseInt(e.target.value) || 0)}
                                className="w-full p-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none font-bold text-slate-700"
                             />
                          </div>
                          <div className="space-y-2">
                             <span className="text-[10px] text-slate-400 uppercase font-bold">Height</span>
                             <input 
                                type="number" 
                                value={resizeHeight} 
                                onChange={(e) => handleHeightChange(parseInt(e.target.value) || 0)}
                                className="w-full p-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none font-bold text-slate-700"
                             />
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-bold uppercase">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                           <span>Aspect Ratio Locked</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={handleConvert}
                      disabled={converting}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center space-x-2 active:scale-95"
                    >
                      {converting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span>Download {mode === 'convert' ? targetFormat.label : 'Image'}</span>
                        </>
                      )}
                    </button>
                    <button 
                      onClick={reset}
                      className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-600 rounded-2xl transition-colors font-bold border border-slate-200"
                    >
                      New File
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-[10px] font-bold uppercase tracking-widest pt-4">
             <div className="flex items-center space-x-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 003.207 4.02M19.189 6.5l.314.168M16.561 20.211a11.305 11.305 0 01-2.835 2.191m5.036-2.091c.147-.133.284-.274.41-.423m0 0a11.301 11.301 0 002.191-2.835m-5.036 2.091A11.303 11.303 0 0116.561 20.211z"></path></svg>
                <span>Zero Server Uploads</span>
             </div>
             <div className="flex items-center space-x-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <span>Hardware Accelerated</span>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Converter;
