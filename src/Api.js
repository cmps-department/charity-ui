import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
  endpoints: (builder) => ({
    
    getPosts: builder.query({
      query: () => 'posts',
    }),

    
    getPostById: builder.query({
      query: (id) => `posts/${id}`,
    }),

    
    updatePost: builder.mutation({
      query: ({ id, ...post }) => ({
        url: `posts/${id}`,
        method: 'PUT',
        body: post,
      }),
    }),

    
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useUpdatePostMutation, useDeletePostMutation } = api;
