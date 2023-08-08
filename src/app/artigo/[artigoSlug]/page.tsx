'use client'
import Aside from "@/components/Aside"
import { Header } from "@/components/Header"
import { Loading } from "@/components/Loading"
import { Post } from "@/components/Post"
import { gql, useQuery } from "@apollo/client"


export default function Postagem({params}: {params: {artigoSlug: string}}){

    const GET_POST = gql`
        query GetPost($slugPost: String){
            post(where: {slug: $slugPost}){
                id
                title
                subtitle
                content{
                    json
                }
                author{
                    name
                }
                createdAt
                coverImage{
                    url
                }
            }
        }
    `
    
    interface PostProps{
        post:{
            id: string;
            title: string;
            subtitle: string;
            createdAt: string;
            content:{
                json: [];
            }
            author:{
                name: string;
            }
            coverImage:{
                url: string;
            }
        }
    }

    const { loading, data, error } = useQuery<PostProps>(GET_POST, {variables: { slugPost: params.artigoSlug }})

    console.log(params.artigoSlug)
    console.log(data?.post)

    if(loading) return <Loading/>

    return(
        <>
            <Header/>
            <main className="w-full max-w-[1120px] flex mx-auto pb-12 min-h-[100vh] gap-10 p-5">
                <div className="max-w-[1120px]">
                        <Post
                            title={data?.post.title!}
                            subtitle={data?.post.subtitle!}
                            author={data?.post.author.name!}
                            urlImage={data?.post.coverImage.url!}
                            createdAt={data?.post.createdAt!}
                            content={data?.post.content!}
                        />
                </div>
                {/* <div className="max-w-[320px]">
                    <Aside/>
                </div> */}
            </main>
        </>
    )
}