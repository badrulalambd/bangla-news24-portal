import MainNewsLarge from "@/components/newsgrid/MainNewsLarge";
import MostReadNewsList from "@/components/newsgrid/MostReadNewsList";

export default async function Home() {

  // Main News with large box and list
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const newsData = await res.json();
  const mainNews = newsData.data[0];
  const news = mainNews.articles;

  // Most read news - top-right section
  const mostReadRes = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const mostReadData = await mostReadRes.json();
  const mostReadNews = mostReadData.data;

 

  return (
    <div>
      <div className="max-w-7xl mx-auto py-4 px-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="col-span-1 lg:col-span-2">
          {/* Main News - top-left section */}
          <MainNewsLarge
            news={news}
          />
        </div>

        {/* Most read news - top-right section */}
        <div className="col-span-1 lg:col-span-1">
          <MostReadNewsList 
          mostReadNews={mostReadNews}
          />
        </div>
      </div>
    </div>
  );
}
