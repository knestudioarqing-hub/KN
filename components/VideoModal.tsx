import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';

      // Load the SmartPlayer SDK script
      const script = document.createElement('script');
      script.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
      script.async = true;
      document.head.appendChild(script);

      // Handle Escape key
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleEsc);

      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleEsc);
        // We keep the script in head to avoid reloading it multiple times if they open/close
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  const videoUrl = `https://scripts.converteai.net/da5f55a8-f6e0-4978-97fc-c710132f652a/players/691eabadd55a0071a20f8ae9/v4/embed.html${window.location.search || '?'}&vl=${encodeURIComponent(window.location.href)}`;

  return (
    <div 
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-300"
    >
      <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl shadow-2xl border border-white/10 overflow-hidden ring-1 ring-brand-orange/20">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-[110] p-2 bg-black/50 hover:bg-brand-orange text-white rounded-full transition-all duration-300 group shadow-lg"
          aria-label="Close video"
        >
          <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Video Embed Container */}
        <div id="ifr_691eabadd55a0071a20f8ae9_wrapper" className="w-full h-full">
           <iframe 
              frameBorder="0" 
              allowFullScreen 
              src={videoUrl}
              id="ifr_691eabadd55a0071a20f8ae9" 
              className="w-full h-full"
              referrerPolicy="origin"
              title="Demo Reel Video"
            ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;