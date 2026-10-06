import Image from 'next/image';
import Link from 'next/link';

interface ICategory {
    title: string;
    topicId: string | null;
    url: string;
    scrapable: boolean;
}

const Navbar = async () => {
    const date = new Date().toLocaleDateString('bn-BD',
        { dateStyle: 'full' });

        const res = await fetch("https://news-api-v2.vercel.app/api/categories");
        const data = await res.json();
        const categories = data.data;

        const filteredCategories : ICategory[] = categories.filter((category : ICategory) => category.scrapable);


    return (
        <header className="py-4 px-5">
            <div className="relative max-w-7xl mx-auto flex justify-center items-start gap-4">
                <Link href="/">
                    <div className="flex items-center gap-4">
                        <div>
                            <Image src="/logo.webp" alt="News24 Logo" width={50} height={50} />
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>Bangla News 24</h2>
                            {date}
                        </div>
                    </div>
                </Link>
                <div className="absolute right-4 top-4 flex items-center gap-2">
                    <button className="btn btn-ghost">সাইন ইন</button>
                    <button className="btn bg-red-700 hover:bg-red-800 text-white">সাইন আপ</button>
                </div>
            </div>

            <nav className="max-w-7xl mx-auto mt-6 flex justify-center gap-5 overflow-x-auto">
                {
                    filteredCategories.map((ncategory : ICategory) => (
                        <Link key={ncategory.topicId} href={`/category/${ncategory.title}`} className='hover:text-red-600' >{ncategory.title}</Link>
                    ))
                }
            </nav>
        </header>
    );
};
export default Navbar;