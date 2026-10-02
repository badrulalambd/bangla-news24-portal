import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface INews {
    id: string;
    title: string;
    description: string;

}

const CategoryMarque = async () => {

    const res = await fetch("https://news-api-v2.vercel.app/api/news");
    const data = await res.json();
    const newsTitle = data.data;

    return (
        <div className="bg-red-700 text-white">
            <div className="max-w-7xl mx-auto px-5 flex">
                <div className="bg-red-800 py-2 px-4">
                    <span className="font-bold">সর্বশেষ</span>
                </div>
                <MarqueeText direction="right" duration={10} className="py-2">
                    {
                        newsTitle.map((news: INews) =>
                            <span key={news.id}>
                                <span>
                                    {news.title}
                                </span>
                                <span className="mx-2">•</span>
                            </span>
                        )
                    }
                </MarqueeText>
            </div>
        </div>
    );
};

export default CategoryMarque;