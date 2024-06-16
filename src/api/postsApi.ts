import { Post } from "@/types/Post";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getRandomColor } from "@/services/getRandomColor";
import { getRandomInitials } from "@/services/getRandomInitials";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], string>({
      query: () => "/posts",
      transformResponse: (response: Post[]) => {
        const userIdToColorMap: { [key: number]: string } = {};
        const userIdToInitials: { [key: number]: string } = {};

        return response
          .sort((a, b) => a.userId - b.userId)
          .map((post, index) => {
            if (index === 0 || post.userId !== response[index - 1].userId) {
              if (!userIdToColorMap[post.userId]) {
                const color = getRandomColor();
                userIdToColorMap[post.userId] = color;
              }
            }

            if (index === 0 || post.userId !== response[index - 1].userId) {
              if (!userIdToInitials[post.userId]) {
                const initials = getRandomInitials();
                userIdToInitials[post.userId] = initials;
              }
            }

            return {
              ...post,
              color: userIdToColorMap[post.userId],
              initials: userIdToInitials[post.userId],
            };
          });
      },
    }),
    getPostById: builder.query<Post, string>({
      query: (id) => `/posts/${id}`,
    }),
    getCommentsForPost: builder.query<Comment[], string>({
      query: (id) => `/posts/${id}/comments`,
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostByIdQuery,
  useGetCommentsForPostQuery,
} = postsApi;
