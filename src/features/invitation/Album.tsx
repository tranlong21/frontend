import React from "react";
import { AlbumImage } from "@/types";

interface AlbumProps {
    images: AlbumImage[];
    onImageClick: (index: number) => void;
}

const Album: React.FC<AlbumProps> = ({ images, onImageClick }) => {
    return (
        <div className="py-20 px-6 sm:px-10 bg-[#f5ead5]/30">
            <div className="text-center mb-10">
                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#8b2b2b] italic">
                    Album Ảnh Cưới
                </h3>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-5xl mx-auto">
                {images.slice(0, 4).map((img, idx) => (
                    <div
                        key={img.id}
                        onClick={() => onImageClick(idx)}
                        className="relative group overflow-hidden rounded-xl shadow-lg aspect-[3/4] cursor-pointer bg-stone-200"
                    >
                        <img
                            src={img.thumb}
                            alt="Wedding Album"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />

                        {idx === 3 && images.length > 4 && (
                            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-xl sm:text-3xl font-bold backdrop-blur-[2px]">
                                <span>+{images.length - 4}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Album;
