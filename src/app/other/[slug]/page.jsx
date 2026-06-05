'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { news, otherNews, sportsNews } from '@/app/Data';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";




const trending = [
  'वित्तीय अपराध',
  'जेन्जी पुस्ता',
  'अन्तर्राष्ट्रिय बैंकिङ',
  'भारतीय बैंकिङ',
  'हाइलाइट',
  'राष्ट्र बैंक',
  'बैंक-वित्त',
];

 function page() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('fresh');
  const [copied, setCopied] = useState(false);

  const article = otherNews.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50 px-4 text-center">
        <span className="text-6xl">📰</span>
        <h1 className="text-2xl font-bold text-gray-800">समाचार फेला परेन</h1>
        <p className="text-gray-500 text-sm">यो समाचार हटाइएको वा सारिएको हुन सक्छ।</p>
        <Link
          href="/news"
          className="mt-2 px-5 py-2.5 bg-[#A81947] text-white rounded-xl text-sm font-semibold hover:bg-[#A81947] transition"
        >
          ← समाचारमा फर्कनुस्
        </Link>
      </div>
    );
  }

  const relatedNews = news.filter((item) => item.slug !== slug).slice(0, 4);
  const sidebarNews = news.filter((item) => item.slug !== slug).slice(0, 5);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(article.title || '');

  const handleCopy = () => {
    navigator.clipboard?.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* ── STICKY HEADER ── */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <Link href="/" className="text-[#A81947] font-extrabold text-xl tracking-tight shrink-0">
            बैंकिङ खबर
          </Link>
          <Link
            href="/other"
            className="shrink-0 flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 px-3 py-1.5 rounded-lg hover:border-[#A81947] hover:text-[#A81947] transition"
          >
            ← समाचार
          </Link>
        </div>
      </header>

      {/* ── TRENDING BAR ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-2 overflow-x-auto scrollbar-hide">
          <span className="shrink-0 text-xs font-bold text-[#A81947] bg-red-50 border border-red-100 px-2.5 py-1 rounded">
            ट्रेन्डिङ:
          </span>
          {trending.map((item, i) => (
            <span
              key={i}
              className="shrink-0 text-xs px-3 py-1 bg-gray-100 rounded-full whitespace-nowrap text-gray-600 hover:bg-[#A81947] hover:text-white cursor-pointer transition"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── TOP AD ── */}
      <div className="max-w-6xl mx-auto px-4 pt-4">
        <img
          src="https://bankingkhabar.com/wp-content/uploads/2026/02/Paywear-900-x-100-px.gif"
          alt="विज्ञापन"
          className="w-full rounded-xl"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
      </div>

      {/* ── MAIN GRID ── */}
      <div className="max-w-6xl mx-auto px-4 py-5 grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* ════ ARTICLE ════ */}
        <article className="lg:col-span-8 space-y-5">

          {/* Category */}
          {article.category && (
            <span className="inline-block bg-red-50 text-[#A81947] text-xs font-semibold px-3 py-1 rounded-full border border-red-100">
              {article.category}
            </span>
          )}

          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-extrabold leading-snug text-gray-900">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-gray-500 border-t border-b border-gray-200 py-3">
            {article.date && (
              <span className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18"/>
                </svg>
                {article.date}
              </span>
            )}
            {article.author && (
              <span className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
                {article.author}
              </span>
            )}
            {article.location && (
              <span className="flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
                </svg>
                {article.location}
              </span>
            )}
          </div>

          {/* Hero image */}
          {article.image && (
            <div className="rounded-2xl overflow-hidden border border-gray-200">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 md:h-[420px] object-cover"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
            </div>
          )}

          {/* Description lead */}
          {article.description && (
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium border-l-4 border-[#A81947] pl-4 py-0.5 bg-red-50 rounded-r-lg">
              {article.description}
            </p>
          )}

          {/* Share buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold bg-blue-50 text-[#125384] border-blue-100 hover:bg-[#125384] hover:text-white hover:border-[#125384] transition"
            >
              <FaFacebook className='text-2xl' />

              
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold bg-sky-50 text-[#125384] border-sky-100 hover:bg-[#125384] hover:text-white hover:border-[#125384] transition"
            >
             <FaTwitter className='text-2xl'  />
</a>
            <a
              href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-200 transition"
            >
             <MdEmail className='text-2xl'  />

            </a>
         
              
          </div>

          {/* Body content */}
          {article.content && (
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              {String(article.content)
                .split('\n')
                .filter(Boolean)
                .map((para, id) => <p key={id}>{para}</p>)}
            </div>
          )}

          {/* Mid-article ad */}
          <img
            src="https://bankingkhabar.com/wp-content/uploads/2026/03/car-loan.gif"
            alt="विज्ञापन"
            className="w-full rounded-xl"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />

          {/* Tags */}
          {Array.isArray(article.tags) && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {article.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full border border-gray-200 hover:bg-red-50 hover:text-red-700 hover:border-red-100 cursor-pointer transition"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Related news */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-5 bg-[#A81947] rounded-full shrink-0" />
              <h2 className="text-lg font-bold text-gray-900">सम्बन्धित समाचार</h2>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedNews.map((item) => (
                <Link
                  key={item.id}
                  href={`/other/${item.slug}`}
                  className="group relative rounded-xl overflow-hidden border border-gray-200 hover:border-red-300 transition block"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.background = '#f3f4f6';
                      e.currentTarget.style.minHeight = '176px';
                      e.currentTarget.style.display = 'block';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-sm font-semibold leading-snug line-clamp-2">
                      {item.title}
                    </p>
                    {item.date && (
                      <p className="text-white/60 text-xs mt-1">{item.date}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Back button */}
          <div className="pt-2 pb-8">
            <Link
              href="/other"
              className="inline-flex items-center gap-2 bg-[#A81947] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#A81947] transition"
            >
              ← सबै समाचार हेर्नुस्
            </Link>
          </div>
        </article>

        {/* ════ SIDEBAR ════ */}
        <aside className="lg:col-span-4 space-y-4 lg:sticky lg:top-[72px] lg:self-start">

          {/* Sidebar ad */}
          <img
            src="https://bankingkhabar.com/wp-content/uploads/2026/04/nepal-life-insurance.gif"
            alt="विज्ञापन"
            className="w-full rounded-xl border border-gray-200"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />

          {/* Latest / Trending widget */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="flex border-b border-gray-100">
              {['fresh', 'trending'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2.5 text-sm font-bold transition border-b-2 ${
                    activeTab === tab
                      ? 'text-[#A81947] border-[#A81947]'
                      : 'text-gray-400 border-transparent hover:text-gray-700'
                  }`}
                >
                  {tab === 'fresh' ? 'ताजा' : 'ट्रेन्डिङ'}
                </button>
              ))}
            </div>

            <div className="p-3 divide-y divide-gray-100">
              {sidebarNews.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.slug}`}
                  className="flex gap-3 group py-3 first:pt-0 last:pb-0"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-14 object-cover rounded-lg shrink-0 group-hover:opacity-90 transition"
                    onError={(e) => {
                      e.currentTarget.style.background = '#f3f4f6';
                      e.currentTarget.style.minHeight = '56px';
                    }}
                  />
                  <div className="flex flex-col justify-center gap-0.5 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-[#A81947] transition line-clamp-2">
                      {item.title}
                    </p>
                    {item.date && (
                      <p className="text-xs text-gray-400">{item.date}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>

         

        </aside>
      </div>
    </div>
  );
}
export default page