import MostReadCard from "./MostReadCard";

interface MostReadNewsListProps {
    mostReadNews: IArticle[];
}

const MostReadNewsList = ({mostReadNews}: MostReadNewsListProps) => {

    return (
        <div className="bg-white border border-gray-300 rounded-lg p-5 flex flex-col gap-4">
            <h3 className="text-xl font-bold">সর্বাধিক পঠিত</h3>
            {
                mostReadNews.map((article : IArticle, index: number) => <MostReadCard 
                key={article.id}
                index={index}
                article={article}
                />)
            }
        </div>
    );
};

export default MostReadNewsList;