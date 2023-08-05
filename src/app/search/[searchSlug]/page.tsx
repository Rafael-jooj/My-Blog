'use client'
import { gql, useQuery } from '@apollo/client';
import { Header } from "@/components/Header";
import { CardPost } from "@/components/CardPost";
import { Loading } from '@/components/Loading';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';

export default function Search({params}: {params: {searchSlug: string}}){

    console.log(params?.searchSlug)

    const GET_ALL_POSTS = gql`
    query GetAllPosts {
      posts(orderBy: createdAt_DESC) {
        id
        slug
        subtitle
        title
        createdAt
        coverImage {
          url
        }
        author {
          name
        }
      }
    }
  `
  interface AllPosts{
    posts: {
      id: string;
      slug: string;
      subtitle: string;
      title: string;
      createdAt: string;
      coverImage: {
        url: string;
      }
      author: {
        name: string;
      }
    }[]
  }

  const { loading, data, error } = useQuery<AllPosts>(GET_ALL_POSTS);

  if(loading) return <Loading/>
  if (error) return <div>Erro ao carregar os posts.</div>;

  return (
    <>
      <Header/>
      <main className="w-full max-w-[1120px] flex flex-row mx-auto pb-12 min-h-[100vh] gap-10">
        <div className="max-w-[800px]">
          {
            data?.posts
                .filter((post) => post.title.toLowerCase().includes(params.searchSlug?.toLowerCase()))
                .slice(0, 5)
                .map((post, index) => {
                    return(
                        <CardPost
                            key={index}
                            title={post.title}
                            subtitle={post.subtitle}
                            slug={post.slug}
                            author={post.author.name}
                            createdAt={format(new Date(post.createdAt), "dd 'de' MMM 'de' yyyy", {locale: ptBR})}
                            urlImage={post.coverImage.url}
                        />
                    )
                })
          }
        </div>
        <div className="max-w-[320px]">
          <div className="bg-white p-5 rounded-lg mt-10">
              <h2 className="text-2xl mb-5">Posts recentes</h2>
              <div className="w-20 h-1 bg-blue-400 border-r-[40px] border-orange-500"></div>
              <div className="flex flex-col mt-5 gap-5">
                {
                  data?.posts.slice(0, 5).map((post)=>{
                    return(
                      <Link href={`/artigo/${post.slug}`} key={post.id}>
                        <p className="border-b-2 p-2 cursor-pointer">{post.title}</p>
                      </Link>
                    )
                  })
                }
              </div>
          </div>
        </div>
      </main>
    </>
  )
}