import Link from "next/link";

interface INProps{
    article: IArticle;
}

const MainNewsList = ({article} : INProps) => {
    return (
        <Link href={`/news/${article.id}`}>
        <div className="p-5 border-t border-gray-300 flex flex-col gap-2" key={article.id}>
            <p className="text-red-600 font-bold">{article.category}</p>
            <h3 className="text-xl font-bold">{article.title}</h3>
        </div>
        </Link>
    );
};

export default MainNewsList;