import React, { useState, useEffect, useRef } from "react";
import { AlbumImage } from "@/types";
import Lightbox from "@/src/components/Lightbox";
import Cover from "@/src/features/invitation/Cover";
import Header from "@/src/features/invitation/Header";
import Ceremony from "@/src/features/invitation/Ceremony";
import Album from "@/src/features/invitation/Album";
import Timeline from "@/src/features/invitation/Timeline";
import Location from "@/src/features/invitation/Location";
import WeddingParty from "@/src/features/invitation/WeddingParty";
import GiftEnvelope from "@/src/features/gift/GiftEnvelope";
import Guestbook from "@/src/features/invitation/Guestbook";

// ✅ Base path theo Vite (GH Pages / Netlify / Render đều ổn)
const BASE = import.meta.env.BASE_URL; // vd: "/" hoặc "/Wedding-invitations/"

// ✅ Danh sách ảnh album (luôn trỏ đúng về public/img/... theo BASE)
const WEDDING_ALBUM: AlbumImage[] = [
  { id: 2, url: `${BASE}img/ngay-cuoi_2.webp`, thumb: `${BASE}img/ngay-cuoi_2.webp` },
  { id: 3, url: `${BASE}img/ngay-cuoi_3.webp`, thumb: `${BASE}img/ngay-cuoi_3.webp` },
  { id: 4, url: `${BASE}img/ngay-cuoi_4.webp`, thumb: `${BASE}img/ngay-cuoi_4.webp` },
  { id: 5, url: `${BASE}img/ngay-cuoi_5.webp`, thumb: `${BASE}img/ngay-cuoi_5.webp` },
  { id: 6, url: `${BASE}img/ngay-cuoi_6.webp`, thumb: `${BASE}img/ngay-cuoi_6.webp` },
  { id: 7, url: `${BASE}img/ngay-cuoi_7.webp`, thumb: `${BASE}img/ngay-cuoi_7.webp` },
  { id: 8, url: `${BASE}img/ngay-cuoi_8.webp`, thumb: `${BASE}img/ngay-cuoi_8.webp` },
  { id: 9, url: `${BASE}img/ngay-cuoi_9.webp`, thumb: `${BASE}img/ngay-cuoi_9.webp` },
  { id: 10, url: `${BASE}img/ngay-cuoi_10.webp`, thumb: `${BASE}img/ngay-cuoi_10.webp` },
  { id: 11, url: `${BASE}img/ngay-cuoi_11.webp`, thumb: `${BASE}img/ngay-cuoi_11.webp` },
  { id: 12, url: `${BASE}img/ngay-cuoi_12.webp`, thumb: `${BASE}img/ngay-cuoi_12.webp` },
  { id: 13, url: `${BASE}img/ngay-cuoi_13.webp`, thumb: `${BASE}img/ngay-cuoi_13.webp` },
  { id: 14, url: `${BASE}img/ngay-cuoi_14.webp`, thumb: `${BASE}img/ngay-cuoi_14.webp` },
  { id: 15, url: `${BASE}img/ngay-cuoi_15.webp`, thumb: `${BASE}img/ngay-cuoi_15.webp` },
  { id: 16, url: `${BASE}img/ngay-cuoi_16.webp`, thumb: `${BASE}img/ngay-cuoi_16.webp` },
];

const App: React.FC = () => {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showGiftModal, setShowGiftModal] = useState(false);
  const [showMapModal, setShowMapModal] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  const bgMusicRef = useRef<HTMLAudioElement | null>(null);
  const openSoundRef = useRef<HTMLAudioElement | null>(null);

  const handleOpenInvitation = () => {
    setIsOpening(true);

    // Hiệu ứng âm thanh khi mở thư
    if (openSoundRef.current) openSoundRef.current.play().catch(() => { });

    setTimeout(() => {
      setIsOpen(true);

      // ✅ Nhạc nền từ public/music/...
      if (bgMusicRef.current) {
        bgMusicRef.current.play().catch((err) => {
          console.log("Autoplay blocked or music error:", err);
        });
      }
    }, 1200);
  };

  useEffect(() => {
    if (bgMusicRef.current) bgMusicRef.current.muted = isMuted;
  }, [isMuted]);

  return (
    <div
      className={`min-h-screen bg-[#8b2b2b] selection:bg-rose-200 ${showGiftModal || galleryIndex !== null ? "overflow-hidden" : ""
        } font-sans transition-colors duration-500`}
    >
      <audio
        ref={openSoundRef}
        src="https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"
        preload="auto"
      />

      {/* ✅ ĐƯỜNG DẪN NHẠC NỀN CHUẨN THEO BASE */}
      <audio ref={bgMusicRef} src={`${BASE}music/nhac-nen.mp3`} loop preload="auto" />

      {(isOpen || isOpening) && (
        <div className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[150]">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all transform hover:scale-110 active:scale-90 overflow-hidden ${isMuted ? "bg-gray-500" : "bg-[#b32d2e]"
              }`}
          >
            {!isMuted && (
              <div className="absolute inset-0 border-2 border-white/20 rounded-full animate-spin-slow pointer-events-none"></div>
            )}
            <span className={`text-xl sm:text-2xl z-10 ${!isMuted ? "animate-pulse" : ""}`}>
              {isMuted ? "🔇" : "🎵"}
            </span>
          </button>
        </div>
      )}

      {!isOpen ? (
        <Cover isOpening={isOpening} onOpen={handleOpenInvitation} />
      ) : (
        <div className="animate-fade-in-up pb-20">
          <div className="max-w-screen-md mx-auto bg-[#fdf6e3] shadow-2xl relative overflow-hidden min-h-screen">
            <Header />

            <Ceremony />

            <Album images={WEDDING_ALBUM} onImageClick={setGalleryIndex} />

            <Timeline />

            <WeddingParty />

            <Location onShowMap={() => setShowMapModal(true)} />

            <div className="h-16 bg-[#8b2b2b] bg-pattern-red opacity-90 shadow-inner"></div>

            <Guestbook />

            <GiftEnvelope onClick={() => setShowGiftModal(true)} />

            <div className="bg-[#8b2b2b] py-20 text-center border-t-8 border-[#d4af37]">
              <p className="text-white text-4xl sm:text-5xl font-serif mb-6 italic tracking-widest uppercase">
                Thịnh & Ngọc
              </p>
              <div className="h-[1px] w-24 bg-white/20 mx-auto mb-6"></div>
              <p className="text-white/30 text-[11px] tracking-[0.6em] uppercase font-bold">
                Lễ Thành Hôn 28-02-2026
              </p>
            </div>
          </div>
        </div>
      )}

      {galleryIndex !== null && (
        <Lightbox
          images={WEDDING_ALBUM}
          currentIndex={galleryIndex}
          onClose={() => setGalleryIndex(null)}
          onNext={() => setGalleryIndex((galleryIndex + 1) % WEDDING_ALBUM.length)}
          onPrev={() => setGalleryIndex((galleryIndex - 1 + WEDDING_ALBUM.length) % WEDDING_ALBUM.length)}
          onSelect={(idx) => setGalleryIndex(idx)}
        />
      )}

      {showGiftModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#8b2b2b]/90 backdrop-blur-md"
            onClick={() => setShowGiftModal(false)}
          ></div>

          <div className="relative w-full max-w-2xl bg-[#fdf6e3] rounded-3xl shadow-2xl overflow-hidden animate-zoom-in border border-[#d4af37]/20">
            <div className="bg-[#8b2b2b] py-6 text-center relative">
              <h3 className="text-2xl sm:text-3xl font-serif italic text-white tracking-widest">
                Hộp Mừng Cưới
              </h3>
              <button
                onClick={() => setShowGiftModal(false)}
                className="absolute top-1/2 -translate-y-1/2 right-6 text-white text-3xl opacity-60 hover:opacity-100 transition-opacity"
              >
                ✕
              </button>
            </div>

            <div className="p-8 sm:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="text-center">
                  <p className="text-[#8b2b2b] font-bold mb-6 font-serif text-lg">
                    Chú Rể - Hoàng Thịnh
                  </p>

                  <div className="w-48 h-48 mx-auto bg-white p-3 rounded-2xl mb-4 shadow-xl border border-stone-100">
                    <img
                      src={`${BASE}img/qr1.webp`}
                      alt="QR Groom"
                      className="w-full h-full rounded-xl"
                      loading="lazy"
                    />
                  </div>

                  <p className="text-xs text-stone-400 mb-1">VietinBank</p>
                  <p className="font-bold text-gray-800 text-sm">106876543440</p>
                  <p className="text-stone-700 text-xs font-bold mt-1">TRAN VAN THINH</p>
                </div>

                <div className="text-center">
                  <p className="text-[#8b2b2b] font-bold mb-6 font-serif text-lg">
                    Cô Dâu - Hồng Ngọc
                  </p>

                  <div className="w-48 h-48 mx-auto bg-white p-3 rounded-2xl mb-4 shadow-xl border border-stone-100">
                    <img
                      src={`${BASE}img/qr2.webp`}
                      alt="QR Bride"
                      className="w-full h-full rounded-xl"
                      loading="lazy"
                    />
                  </div>

                  <p className="text-xs text-stone-400 mb-1">Vietcombank</p>
                  <p className="font-bold text-gray-800 text-sm">0961000038320</p>
                  <p className="text-stone-700 text-xs font-bold mt-1">TRAN THI NGOC</p>
                </div>
              </div>
              <p className="mt-10 text-center text-stone-500 text-sm italic">
                Cảm ơn bạn đã đồng hành cùng chúng mình trong ngày trọng đại!
              </p>
            </div>
          </div>
        </div>
      )}

      {showMapModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#8b2b2b]/90 backdrop-blur-md" onClick={() => setShowMapModal(false)}></div>

          <div className="relative w-full max-w-4xl bg-[#fdf6e3] rounded-3xl shadow-2xl overflow-hidden animate-zoom-in border border-[#d4af37]/20">
            <div className="bg-[#8b2b2b] py-4 px-6 flex justify-between items-center text-white relative">
              <h3 className="text-xl sm:text-2xl font-serif italic tracking-widest w-full text-center">
                Bản Đồ Chỉ Đường
              </h3>
              <button
                onClick={() => setShowMapModal(false)}
                className="absolute right-6 text-3xl opacity-60 hover:opacity-100 transition-opacity"
              >
                ✕
              </button>
            </div>

            {(() => {
              const DEST_LAT = 20.007877;
              const DEST_LNG = 106.126263;

              const embedSrc = `https://www.google.com/maps?q=${DEST_LAT},${DEST_LNG}&z=16&output=embed`;
              const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${DEST_LAT},${DEST_LNG}&travelmode=driving`;

              return (
                <div className="p-2 sm:p-4 bg-white">
                  <div className="h-[50vh] sm:h-[60vh] rounded-2xl overflow-hidden">
                    <iframe
                      src={embedSrc}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="mt-3 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
                    <div className="text-sm text-gray-600">
                      Tọa độ: {DEST_LAT}, {DEST_LNG}
                    </div>

                    <a
                      href={directionsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#8b2b2b] px-4 py-2 text-white font-semibold hover:opacity-95"
                    >
                      🚗 Chỉ đường trên Google Maps
                    </a>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Quicksand:wght@300;400;500;600;700&display=swap');
        
        body { font-family: 'Quicksand', sans-serif; background-color: #8b2b2b; margin: 0; padding: 0; }
        h1, h2, h3, h4, .font-serif { font-family: 'Playfair Display', serif; }
        
        .rotate-x-180 { transform: rotateX(180deg); }
        .pattern-dragon { 
          background-image: url("https://www.transparenttextures.com/patterns/oriental-tiles.png");
          filter: invert(1);
        }
        .bg-pattern-red {
          background-image: url("https://www.transparenttextures.com/patterns/oriental-tiles.png");
          background-color: #8b2b2b;
        }
        
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        
        .animate-fade-in-up { animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-zoom-in { animation: zoomIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
        
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-thin::-webkit-scrollbar { width: 5px; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: #d4af37; border-radius: 10px; }
        
        .text-shadow-lg { text-shadow: 0 10px 20px rgba(0,0,0,0.4); }
      `}</style>
    </div>
  );
};

export default App;
