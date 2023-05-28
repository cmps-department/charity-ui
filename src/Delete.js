import React from 'react';
import { useGetPostsQuery, useDeletePostMutation } from './Api';

function Delete() {
  const { data: posts, isLoading, isError } = useGetPostsQuery();
  const deletePostMutation = useDeletePostMutation();

  const handleDeletePost = async (postId) => {
    try {
      await deletePostMutation.mutateAsync(postId);
    } catch (error) {
      console.log('Error occurred while deleting post:', error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error occurred while fetching posts.</p>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.title}
          <button onClick={() => handleDeletePost(post.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default Delete;
