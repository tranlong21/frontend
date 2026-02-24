import React, { useState, useEffect } from 'react';
import { Comment } from '@/types';

const Guestbook: React.FC = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    // console.log("API_BASE:", import.meta.env.VITE_API_URL);
    const API_URL = `${import.meta.env.VITE_API_URL}/api/v1/guestbook`;


    // Load comments from backend on mount
    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        setIsLoading(true);
        console.log('Fetching comments from:', API_URL);
        try {
            const response = await fetch(API_URL);
            console.log('Fetch response status:', response.status);
            if (response.ok) {
                const data = await response.json();
                console.log('Fetched comments:', data.items.length);
                setComments(data.items);
            } else {
                console.error('Fetch failed with status:', response.status);
            }
        } catch (error) {
            console.error('Error fetching comments detail:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedName = name.trim();
        const trimmedMessage = message.trim();

        if (!trimmedName || !trimmedMessage) return;

        setIsSubmitting(true);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: trimmedName,
                    message: trimmedMessage
                }),
            });

            if (response.ok) {
                const newComment = await response.json();
                setComments([newComment, ...comments]);
                setName('');
                setMessage('');
            } else {
                const errorData = await response.json();
                alert(`Lỗi: ${errorData.message || 'Không thể gửi lời chúc'}`);
            }
        } catch (error) {
            console.error('Error submitting comment:', error);
            alert('Có lỗi xảy ra khi kết nối tới máy chủ.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const formatDate = (isoString: string) => {
        try {
            const date = new Date(isoString);
            return date.toLocaleString('vi-VN', {
                hour: '2-digit',
                minute: '2-digit',
                day: 'numeric',
                month: 'numeric',
                year: 'numeric'
            });
        } catch (e) {
            return isoString;
        }
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
                    {isLoading ? (
                        <div className="text-center py-10 text-stone-400 italic flex flex-col items-center gap-4">
                            <div className="w-10 h-10 border-4 border-[#8b2b2b]/20 border-t-[#8b2b2b] rounded-full animate-spin"></div>
                            <p>Đang tải lời chúc...</p>
                        </div>
                    ) : (
                        <>
                            {comments.map((comment, index) => (
                                <div key={comment.id || index} className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h4 className="font-bold text-[#8b2b2b] text-lg font-serif">{comment.name}</h4>
                                        <span className="text-xs text-stone-400 italic">{formatDate(comment.createdAt)}</span>
                                    </div>
                                    <p className="text-stone-600 leading-relaxed font-medium">{comment.message}</p>
                                </div>
                            ))}

                            {comments.length === 0 && (
                                <div className="text-center py-10 text-stone-400 italic">
                                    Chưa có lời chúc nào. Hãy là người đầu tiên gửi lời chúc nhé!
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Guestbook;
