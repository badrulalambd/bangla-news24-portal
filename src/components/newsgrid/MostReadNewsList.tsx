
interface MostReadNewsListProps {
    mostReadNews: IArticle[];
}

const MostReadNewsList = ({mostReadNews}: MostReadNewsListProps) => {

    return (
        <div className="bg-white border border-gray-300 rounded-lg p-5 flex flex-col gap-4">
            <h3 className="text-xl font-bold">সর্বাধিক পঠিত</h3>
            {
                mostReadNews.map((article, index) => (
                    <div className="flex gap-2" key={article.id}>
                        <span className="text-xl text-red-600 font-bold">{index + 1}</span>
                        <h3 className="text-lg font-bold">{article.title}</h3> 
                    </div>
                ))
            }
        </div>
    );
};

export default MostReadNewsList;