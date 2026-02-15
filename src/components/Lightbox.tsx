
import React, { useState, useEffect } from 'react';
import { AlbumImage } from '@/types';

interface LightboxProps {
  images: AlbumImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (index: number) => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, onClose, onNext, onPrev, onSelect }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state when index changes
  useEffect(() => {
    setIsLoading(true);
  }, [currentIndex]);

  // Preload next and previous images
  useEffect(() => {
    const preloadImage = (index: number) => {
      if (index >= 0 && index < images.length) {
        const img = new Image();
        img.src = images[index].url;
      }
    };

    const nextIndex = (currentIndex + 1) % images.length;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;

    preloadImage(nextIndex);
    preloadImage(prevIndex);
  }, [currentIndex, images]);

  return (
    <div className="fixed inset-0 z-[300] bg-black/95 animate-fade-in flex flex-col h-full overflow-hidden">
      <div className="flex items-center justify-between p-4 md:p-6 text-white z-[320] w-full">
        <div className="bg-black/50 px-4 py-1 rounded-full text-xs md:text-sm font-bold backdrop-blur-md border border-white/10">
          {currentIndex + 1} / {images.length}
        </div>
        <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/60 text-white text-2xl transition-all">✕</button>
      </div>

      <div className="flex-1 relative flex items-center justify-center px-4 md:px-12 pb-6 overflow-hidden" onClick={onClose}>
        <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 md:left-8 z-[330] w-12 h-12 flex items-center justify-center rounded-full bg-black/20 text-white/50 hover:text-white hover:bg-black/40 text-2xl">❮</button>
        <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 md:right-8 z-[330] w-12 h-12 flex items-center justify-center rounded-full bg-black/20 text-white/50 hover:text-white hover:bg-black/40 text-2xl">❯</button>

        <div className="w-full h-full flex items-center justify-center animate-zoom-in relative" onClick={(e) => e.stopPropagation()}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={images[currentIndex].url}
            alt="Wedding Full"
            className={`max-w-[95%] max-h-[90%] object-contain rounded-sm shadow-2xl transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>

      <div className="w-full bg-black/40 backdrop-blur-md border-t border-white/5 py-4 flex-shrink-0 z-[340]">
        <div className="max-w-screen-xl mx-auto px-6 overflow-x-auto scrollbar-none scroll-smooth">
          <div className="flex gap-2 justify-start md:justify-center items-center min-w-max pb-1">
            {images.map((img, idx) => (
              <div
                key={img.id}
                onClick={() => onSelect(idx)}
                className={`relative w-10 h-14 md:w-12 md:h-16 flex-shrink-0 rounded-md overflow-hidden cursor-pointer transition-all duration-300 transform ${currentIndex === idx ? 'ring-2 ring-red-500 scale-105 z-10 shadow-lg' : 'opacity-30 hover:opacity-100'}`}
              >
                <img src={img.thumb} className="w-full h-full object-cover" alt={`Thumb ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
