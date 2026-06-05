"use client"
import { useState } from "react";
import { AD_BANNERS, newsData } from "./Data";


function AdBanner({index=0}) {
   const banner =
    AD_BANNERS[index % AD_BANNERS.length];
  return (
    <div className="w-full my-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
          <img  src={banner} alt="Advertisement" className="w-full h-auto block" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children, color = "bg-red-600", className = "" }) {
  return (
    <span className={`inline-block ${color} text-white text-sm sm:text-base font-bold px-4 py-1.5 rounded-full tracking-wide ${className}`}>
      {children}
    </span>
  );
}

function TrendingDot() {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
      ट्रेन्डिङ
    </span>
  );
}

function NewsCard({ title, desc, image, time }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
      <div className="overflow-hidden">
        <img src={image} alt={title} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      </div>
      <div className="p-4">
        {time && <p className="text-xs text-gray-400 mb-1.5">{time}</p>}
        <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug group-hover:text-[#BB5776] transition-colors">{title}</h3>
        {desc && <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed line-clamp-2">{desc}</p>}
      </div>
    </div>
  );
}

function SideNewsItem({ title, image, time }) {
  return (
    <div className="group flex gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300 cursor-pointer">
      <div className="shrink-0 overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-24 h-20 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      </div>
      <div className="flex flex-col justify-between py-0.5 min-w-0">
        <h4 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-3 group-hover:text-[#BB5776] transition-colors">{title}</h4>
        {time && <p className="text-xs text-gray-400 mt-1">{time}</p>}
      </div>
    </div>
  );
}

 function page() {
  const [activeProvince, setActiveProvince] = useState("बागमती");
  const [activeHealth, setActiveHealth] = useState("नेत्ररोग");
   
  const { featured, mainStory, sideNews, latestCards, healthCategories, healthSide, provinces, localNews, special,diasporaNews,labourNews  } = newsData;

  return (
    <div className="min-h-screen bg-[#f7f7f8] font-Noto_Sans_Devanagari">
      {/* ── FEATURED ARTICLE ───────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex flex-col gap-5 p-5 sm:p-8">
            <div className="flex justify-center">
             
            </div>

            <h1 className="text-center font-black leading-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-950 max-w-3xl mx-auto">
              {featured.title}
            </h1>

            <div className="flex flex-col items-center gap-1">
              <span className="text-sm font-semibold text-gray-700">{featured.source}</span>
              
            </div>

            <div className="rounded-2xl overflow-hidden">
              <img src={featured.image} alt={featured.title} className="w-full h-56 sm:h-72 md:h-[420px] object-cover hover:scale-[1.02] transition-transform duration-700" loading="lazy" />
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-justify max-w-4xl mx-auto">
              {featured.content}
            </p>
          </div>
        </div>
      </div>

     
         <AdBanner index={2} />

      {/* ── MAIN + SIDE NEWS GRID ───────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* Featured big story */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer h-full min-h-[320px]">
              <img src={mainStory.image} alt={mainStory.title} className="w-full h-full object-cover min-h-[320px] sm:min-h-[420px] group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute top-4 left-4">
                
              </div>
              <h2 className="absolute bottom-5 left-5 right-5 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-snug">
                {mainStory.title}
              </h2>
            </div>
          </div>

          {/* Side list */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            {sideNews.map((item, id) => (
              <SideNewsItem key={id} {...item} />
            ))}
          </div>

          {/* Ads column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {[
              "https://www.onlinekhabar.com/wp-content/uploads/2026/05/Desktop-BBA_BCA.gif",
              "https://www.onlinekhabar.com/wp-content/uploads/2026/05/300x150px_new.gif",
              "https://www.onlinekhabar.com/wp-content/uploads/2026/05/sdlg-logo_300x150px.jpg",
            ].map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <img src={src} alt="Ad" className="w-full h-auto block" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <AdBanner index={3} />

      {/* ── LATEST NEWS CARDS ───────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <SectionLabel color="bg-gray-900">ताजा समाचार</SectionLabel>
            <TrendingDot />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {latestCards.map((card, id) => (
              <NewsCard key={id} title={card.title} image={card.image} />
            ))}
          </div>
        </div>
      </div>

      <AdBanner index={5} />

      {/* ── HEALTH SECTION ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 sm:p-8">

          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
            <h2 className="text-[#125384] text-2xl sm:text-3xl font-black">
              स्वास्थ्य
            </h2>

            <div className="overflow-x-auto">
              <div className="flex gap-2 min-w-max pb-1">
                {healthCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveHealth(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all whitespace-nowrap ${activeHealth === cat ? "bg-[#125384] text-white border-[#125384]" : "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:text-blue-600"}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8">
              <div className="rounded-2xl overflow-hidden">
                <img src="https://www.onlinekhabar.com/wp-content/uploads/2026/05/budget-for-health-1024x500.png" alt="Health" className="w-full h-56 sm:h-72 md:h-96 object-cover hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3 ">
              {healthSide.map((item, id) => (
                <SideNewsItem key={id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <AdBanner index={0} />

      {/* ── DIASPORA + LABOUR ───────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 sm:p-8">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

            {/* Diaspora */}
            <div className="xl:col-span-8">
              <div className="flex items-center gap-3 mb-5">
                <SectionLabel color="bg-[#9D1943]">प्रवास</SectionLabel>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                <div className="sm:col-span-7">
                  <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
                    <img src="https://npcdn.ratopati.com/media/news/707432736_1288232226812914_2349031563756711891_n_tp2RsTOoxd.jpg" alt="" className="w-full h-60 sm:h-80 md:h-[380px] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <h2 className="absolute bottom-4 left-4 right-4 text-white text-base sm:text-lg md:text-xl font-bold leading-snug">
                      बेलायतमा पहिलो धार्मिक भेला सम्पन्न, सन् २०२७ मा पहिलो आध्यात्मिक महोत्सव आयोजना हुने
                    </h2>
                  </div>
                </div>
                <div className="sm:col-span-5 flex flex-col gap-3">
                  {diasporaNews.map((items, id) => (
                    <SideNewsItem key={id} title= {items.title} image={items.image}/>
                  ))}
                </div>
              </div>
            </div>

            {/* Labour */}
            <div className="xl:col-span-4">
              <div className="flex items-center gap-3 mb-5">
                <SectionLabel color="bg-[#9D1943]">श्रम / वैदेशिक रोजगार</SectionLabel>
              </div>
              <div className="flex flex-col gap-3">
                {labourNews.map((item, id) => (
                  <SideNewsItem key={id} title={item.title} image={item.image} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdBanner index={1} />

      {/* ── LOCAL GOVERNMENT ────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 sm:p-8">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <SectionLabel color="bg-[#9D1943]" className="text-base sm:text-lg">प्रदेश / स्थानीय सरकार</SectionLabel>
            <div className="overflow-x-auto">
              <div className="flex gap-2 min-w-max pb-1">
                {provinces.map((p) => (
                  <button
                    key={p}
                    onClick={() => setActiveProvince(p)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all whitespace-nowrap ${activeProvince === p ? "bg-[#9D1943] text-white border-[#9D1943]" : "bg-white text-gray-700 border-gray-200 hover:border-red-300 hover:text-red-600"}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden">
                <img src="https://www.imagekhabar.com/wp-content/uploads/2026/01/bepatta.jpg" alt="" className="w-full h-64 sm:h-80 object-cover hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 leading-snug text-gray-900">
बेपत्ता सम्बन्धी मुख्य समाचार
              </h2>
              <p className="mt-3">बेपत्ता व्यक्तिको खोजीका लागि प्रहरी र स्थानीयवासी संयुक्त रूपमा परिचालन भएका छन्।
घटनाबारे थप जानकारी जुटाउँदै सम्बन्धित निकायले अनुसन्धानलाई अगाडि बढाइरहेको छ।</p>
<p className="mt-3">बेपत्ता भएका व्यक्तिको खोजी कार्य तीव्र पारिएको छ भने सम्बन्धित निकायले अनुसन्धानलाई अगाडि बढाइरहेका छन्। परिवारजनले छिटो खोजी गरी सुरक्षित उद्धारको माग गरेका छन्।</p>
            </div>
            <div className="flex flex-col gap-4">
              {localNews.map((item, i) => (
                <SideNewsItem key={i} title={item.title} image={item.image} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <AdBanner index={2} />

      {/* ── SPECIAL NEWS ────────────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {special.map((group, gi) => (
               
              <div key={gi} className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer">
              <SectionLabel color="bg-[#9D1943]" className="text-base sm:text-lg mt-0 mb-2">स्पेशल न्यूज</SectionLabel>
                <div className="overflow-hidden">
                  <img src={group.main.image} alt={group.main.title} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4">
                  
                  <h4 className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-4">{group.main.title}</h4>
                  <div className="flex flex-col gap-3">
                    {group.sub.map((sub, si) => (
                      <div key={si} className="flex gap-3 items-center group/sub">
                         
                        <div className="shrink-0 rounded-lg overflow-hidden">
                          <img src={sub.image} alt={sub.title} className="w-14 h-14 object-cover group-hover/sub:scale-110 transition-transform duration-300" loading="lazy" />
                        </div>
                        <p className="text-sm  font-bold  leading-snug group-hover/sub:text-[#9D1943] transition-colors ">{sub.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      </div>
    
  );
}
export default page