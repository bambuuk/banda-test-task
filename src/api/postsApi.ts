import { Post } from "@/types/Post";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], string>({
      query: () => "/posts",
    }),
    getPostById: builder.query<Post, string>({
      query: (id) => `/posts/${id}`,
    }),
    getCommentsForPost: builder.query<Comment[], string>({
      query: (id) => `/posts/${id}/comments`,
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery, useGetCommentsForPostQuery } = postsApi;