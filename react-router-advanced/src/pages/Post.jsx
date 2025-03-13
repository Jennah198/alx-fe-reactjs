import { useParams } from 'react-router-dom';

function Post() {
  const { postId } = useParams();
  return <div><h3>Post Details: {postId}</h3></div>;
}

export default Post;
