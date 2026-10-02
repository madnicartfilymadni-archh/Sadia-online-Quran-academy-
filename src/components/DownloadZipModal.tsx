import React, { useState } from 'react';
import { Download, CheckCircle, FolderArchive, FileCode, Sparkles, X } from 'lucide-react';

interface DownloadZipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadZipModal: React.FC<DownloadZipModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    const link = document.createElement('a');
    link.href = '/sadia-online-quran-academy-complete.zip';
    link.download = 'sadia-online-quran-academy-complete.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-950 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <FolderArchive className="w-4 h-4 text-emerald-400" />
            <span>Complete Project Source Code</span>
          </div>
          
          <h3 className="text-2xl font-bold text-white">
            Download 1 Complete ZIP File
          </h3>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1">
            Sadia Online Quran Academy – Full React + Tailwind Codebase
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-xs sm:text-sm space-y-2">
            <div className="font-bold text-slate-900 flex items-center gap-2">
              <FileCode className="w-4 h-4 text-emerald-700" />
              <span>Is ZIP File Me Shamil Files:</span>
            </div>
            <ul className="space-y-1 text-slate-600 pl-6 list-disc">
              <li>All React Components (`Hero`, `Courses`, `About`, `Teacher`, `Contact`, etc.)</li>
              <li>Islamic imagery &amp; visual assets (`src/assets/images/`)</li>
              <li>Course syllabus &amp; Academy data (`src/data/academyData.ts`)</li>
              <li>`package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`</li>
              <li>Tailwind CSS setup with Amiri, Outfit &amp; Plus Jakarta fonts</li>
            </ul>
          </div>

          {downloaded ? (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-700 shrink-0" />
              <div>
                <strong>ZIP File Download Shuru Ho Chuki Hai!</strong>
                <p className="text-xs text-emerald-800 mt-0.5">
                  Check your browser Downloads folder.
                </p>
              </div>
            </div>
          ) : null}

          <div className="space-y-3">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="w-full py-4 px-6 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
            >
              <Download className="w-5 h-5" />
              <span>{downloading ? 'Downloading ZIP...' : 'Download 1 Complete ZIP File Now (1.6 MB)'}</span>
            </button>

            <a
              href="/sadia-online-quran-academy-complete.zip"
              download="sadia-online-quran-academy-complete.zip"
              className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 text-center"
            >
              <span>Direct Link: /sadia-online-quran-academy-complete.zip</span>
            </a>
          </div>

          <div className="pt-1 text-center text-xs text-slate-500">
            Extract karke simply <code className="bg-slate-100 px-1 py-0.5 rounded text-emerald-800 font-mono">npm install</code> aur <code className="bg-slate-100 px-1 py-0.5 rounded text-emerald-800 font-mono">npm run dev</code> chalayein.
          </div>
        </div>
      </div>
    </div>
  );
};
