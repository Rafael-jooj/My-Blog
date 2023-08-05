'use client'
import { gql, useQuery } from '@apollo/client';

export async function getPosts() {
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

  const { loading, data, error } = await useQuery<AllPosts>(GET_ALL_POSTS)

  return data
}