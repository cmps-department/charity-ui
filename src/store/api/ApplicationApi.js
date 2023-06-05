import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from '../../auth/settings';


export const ApplicationApi = createApi({
  reducerPath: 'ApplicationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: async (headers) => {
      const access_token = await getToken()
      if (access_token) {
        headers.set("Authorization", "Bearer " + access_token);
      }
    }
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (status = "APPROVED") => `/applications?status=${status}`,
    }),
    getPostById: builder.query({
      query: (id) => `/applications/${id}`,
    }),
    createPost: builder.mutation({
      query: (body) => ({
        url: '/applications',
        method: 'POST',
        body,
      })
    }),
    updatePost: builder.mutation({
      query: (body) => ({
        url: `/applications/${body.id}`,
        method: 'PUT',
        body: body,
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/applications/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery, useCreatePostMutation, useUpdatePostMutation, useDeletePostMutation } = ApplicationApi;
