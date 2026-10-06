import CategoryNewsGrid from "@/components/newsgrid/CategoryNewsGrid";
import MainNewsLarge from "@/components/newsgrid/MainNewsLarge";
import MostReadNewsList from "@/components/newsgrid/MostReadNewsList";

interface ICategory {
  title: string;
  curationId: string;
  articles: IArticle[];
}

export default async function Home() {

  // Main News with large box and list
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const newsData = await res.json();
  const mainNews = newsData.data[0];
  const news = mainNews.articles;

  const otherCategories = newsData.data.slice(1);

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
          <div className="mt-10">
            {
              otherCategories.map((category: ICategory) => (
                <div key={category.curationId} className="flex flex-col gap-5 mt-5">
                  <div className="border-b border-red-600 pb-5">
                    <h2 className="text-xl font-bold">{category.title}</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                      category.articles.map((article) => (
                        <div key={article.id} className="flex flex-col gap-2 bg-white border border-gray-300 rounded-lg">
                          <CategoryNewsGrid
                            article={article}
                          />
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
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
