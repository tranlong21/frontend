import React, { useState, useEffect } from 'react';
import { Comment } from '@/types';

const Guestbook: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Load comments from local storage on mount
    useEffect(() => {
        const savedComments = localStorage.getItem('wedding-guestbook');
        if (savedComments) {
            setComments(JSON.parse(savedComments));
        } else {
            // Initial dummy data for demonstration
            setComments([
                { name: 'Hoàng Anh', message: 'Chúc mừng hạnh phúc hai bạn nhé!', time: '09:00 14/02/2026' },
                { name: 'Minh Thư', message: 'Happy Wedding! Mong hai bạn trăm năm hạnh phúc.', time: '08:45 14/02/2026' }
            ]);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !message.trim()) return;

        setIsSubmitting(true);

        // Simulate network delay
        setTimeout(() => {
            const newComment: Comment = {
                name: name,
                message: message,
                time: new Date().toLocaleString('vi-VN', { hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'numeric', year: 'numeric' })
            };

            const updatedComments = [newComment, ...comments];
            setComments(updatedComments);
            localStorage.setItem('wedding-guestbook', JSON.stringify(updatedComments));

            setName('');
            setMessage('');
            setIsSubmitting(false);
        }, 800);
    };

    return (
        <div className="py-16 px-6 bg-[#f9f9f9]" id="guestbook">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-3xl sm:text-5xl font-serif font-bold text-[#8b2b2b] mb-4 italic" style={{ fontFamily: "'Playfair Display', serif" }}>Sổ Lưu Bút</h3>
                    <div className="w-20 h-1 bg-[#d4af37]/40 mx-auto rounded-full"></div>
                </div>

                <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-stone-100 max-w-2xl mx-auto mb-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Nhập tên của bạn*"
                                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#8b2b2b]/20 focus:border-[#8b2b2b] transition-all bg-stone-50"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Nhập lời chúc của bạn*"
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#8b2b2b]/20 focus:border-[#8b2b2b] transition-all bg-stone-50 resize-none"
                                required
                            ></textarea>
                        </div>
                        <div className="flex justify-between items-center pt-2">
                            <span className="text-2xl animate-bounce">🪄</span>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`bg-[#8b2b2b] text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest hover:bg-[#6b1f1f] transition-all shadow-lg active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]`}
                            >
                                {isSubmitting ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : 'GỬI LỜI CHÚC'}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="space-y-4 max-w-2xl mx-auto max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
                    {comments.map((comment, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-baseline mb-2">
                                <h4 className="font-bold text-[#8b2b2b] text-lg font-serif">{comment.name}</h4>
                                <span className="text-xs text-stone-400 italic">{comment.time}</span>
                            </div>
                            <p className="text-stone-600 leading-relaxed font-medium">{comment.message}</p>
                        </div>
                    ))}

                    {comments.length === 0 && (
                        <div className="text-center py-10 text-stone-400 italic">
                            Chưa có lời chúc nào. Hãy là người đầu tiên gửi lời chúc nhé!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Guestbook;
