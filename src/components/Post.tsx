import Image from "next/image"
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { ElementNode } from '@graphcms/rich-text-types'

interface AllProps{
    title: string;
    subtitle: string;
    author: string;
    urlImage: string;
    createdAt: string;
    content:{
        json: ElementNode[];
    }
}

export function Post({title, subtitle, author, createdAt, urlImage, content}: AllProps){
    return(
        <div className="bg-white p-10 mt-10 rounded-lg">
            <div className="flex flex-col mb-5">
                <h1 className="text-2xl mb-5">{title}</h1>
                <div className="flex flex-row gap-5">
                    <p>{author}</p>
                    <p>{createdAt}</p>
                </div>
            </div>
            <div>
                <Image src={urlImage} alt="thumb" height={720} width={1280}/>
            </div>
            <div className="mt-5 text-md">
                <p>O assunto de hoje é: {subtitle}</p>
                <p className="my-5">Vamos começar:</p>
                <div className="flex flex-col gap-5">
                    <RichText 
                        content={content.json}
                        renderers={{
                            p: ({children}) => <p className="">{children}</p>,
                            code_block: ({children}) => <pre className="bg-gray-100 p-5 my-5 text-lg border-b-2 border-blue-400 whitespace-pre-wrap overflow-auto">{children}</pre>,
                            h2: ({children}) => <h2 className="font-semibold">{children}</h2>
                        }}
                    />
                </div>

            </div>
        </div>
    )
}