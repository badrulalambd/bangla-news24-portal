import Link from 'next/link';

interface IMRProps{
    article: IArticle;
    index: number
}

const MostReadCard = ({article, index} : IMRProps) => {
    return (
        <Link href={`/news/${article.id}`}>
            <div className="flex gap-2" key={article.id}>
                <span className="text-xl text-red-600 font-bold">{index + 1}</span>
                <h3 className="text-lg font-bold">{article.title}</h3>
            </div>
        </Link>
    );
};

export default MostReadCard;