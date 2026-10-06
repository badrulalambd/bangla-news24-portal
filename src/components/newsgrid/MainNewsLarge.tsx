import Image from "next/image";

interface IMainNewsProps {
    news: IArticle[];
}

const MainNewsLarge = ({ news }: IMainNewsProps) => {

    const [firstNews, ...otherNews] = news;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Main News Large */}
            <div className="bg-white border border-gray-300 rounded-lg">
                <Image
                    className="rounded-t-lg"
                    src={firstNews.imageUrl}
                    alt={firstNews.imageAlt}
                    width={800}
                    height={400}
                />
                <div className="p-5 flex flex-col gap-2">
                    <p className="text-red-600 font-bold">{firstNews.category}</p>
                    <h2 className="text-2xl font-bold">{firstNews.title}</h2>
                    <p>{firstNews.description}</p>
                </div>
            </div>
            {/* Other News */}
            <div className="bg-white border-t-0 border border-gray-300 rounded-lg">
                {
                    otherNews.slice(0, 4).map((article) => (
                        <div className="p-5 border-t border-gray-300 flex flex-col gap-2" key={article.id}>
                            <p className="text-red-600 font-bold">{article.category}</p>
                            <h3 className="text-xl font-bold">{article.title}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MainNewsLarge;