import Image from "next/image";

interface CategoryNewsGridProps {
    article: IArticle;
}

const CategoryNewsGrid = ({ article }: CategoryNewsGridProps) => {
    return (
        <div className="">
            <Image
                className="rounded-t-lg"
                src={article.imageUrl}
                alt={article.imageAlt}
                width={800}
                height={400}
            />
            <div className="p-5 flex flex-col gap-2">
                <p className="text-red-600 font-bold">{article.category}</p>
                <h2 className="text-2xl font-bold">{article.title}</h2>
                <p className="line-clamp-2">
                    {article.description}
                </p>
                <p className="text-sm text-gray-500">
                    {new Intl.DateTimeFormat("bn-BD", {
                        day: "numeric",
                        month: "long",
                    }).format(new Date(article.firstPublished))}
                    {", "}
                    {new Intl.DateTimeFormat("bn-BD", {
                        year: "numeric",
                    }).format(new Date(article.firstPublished))}
                    {" এ "}
                    {new Intl.DateTimeFormat("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                    }).format(new Date(article.firstPublished))}
                </p>
            </div>
        </div>
    );
};

export default CategoryNewsGrid;