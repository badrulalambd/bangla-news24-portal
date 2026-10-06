import CategoryNewsGrid from "@/components/newsgrid/CategoryNewsGrid";

interface IProps {
  params: Promise<{
    categoryid: string;
  }>;
}

const NewsCategorypage = async ({ params } : IProps) => {

    const { categoryid } = await params;

    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryid}`);
    const data = await res.json();
    const categoryNews = data.data; 



    return (
        <div className="max-w-7xl mx-auto py-5 flex flex-col gap-5">
           <h2 className="text-3xl font-bold border-b-3 border-red-600 pb-2">{data.title}</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                categoryNews.map((article : IArticle) => <CategoryNewsGrid 
                key={article.id}
                article={article}
                />)
            }
           </div>
        </div>
    );
};

export default NewsCategorypage;