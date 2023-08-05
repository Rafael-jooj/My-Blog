import Image from "next/image"
import Link from "next/link"

interface CardPostProps{
    title: string;
    subtitle: string;
    slug: string;
    author: string;
    createdAt: string;
    urlImage: string;
}

export function CardPost({title, subtitle, slug, author, createdAt, urlImage}: CardPostProps){
    return(
        <div className="bg-white p-10 mt-10 rounded-lg">
            <div className="flex flex-col mb-5">
                <Link href={`/artigo/${slug}`}>
                    <h1 className="text-2xl mb-5">{title}</h1>
                </Link>
                <div className="flex flex-row gap-5">
                    <p>{author}</p>
                    <p>{createdAt}</p>
                </div>
            </div>
            <div>
                <Link href={`/artigo/${slug}`}>
                    {/* <Image src="/THUMB.png" alt="thumb" height={720} width={1280}/> */}
                    <Image src={urlImage} alt="thumb" height={720} width={1280}/>
                </Link>
            </div>
            <div className="mt-5 text-md">
                <p>{subtitle}</p>
                <Link href={`/artigo/${slug}`}>
                    <button className="bg-blue-300 py-3 px-5 mt-5 rounded-lg">Ler Mais...</button>
                </Link>
            </div>
        </div>
    )
}