import Image from "next/image";

interface INewsProps{
    params: Promise<{
        newsid: string;
    }>
}

const NewsDetailpage = async ({params} : INewsProps) => {

    const {newsid} = await params;

    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsid}`);
    const data = await res.json();
    const news = data.data;

    console.log("News Detail: ", news);

    return (
        <div className="max-w-7xl mx-auto py-10">
            <h2 className="text-2xl font-bold">{news.title}</h2>
            <Image 
            src={news.imageUrl}
            width={1000}
            height={1000}
            alt="Ok"
            />
            <p>{news.text}</p>
        </div>
    );
};

export default NewsDetailpage;