import { usePost } from "../../contexts/PostContext";
import PostItem from "./card/PostItem";

function PostList() {
  const { posts } = usePost();

  return (
    <div className="mt-3 d-flex flex-column space-y-4">
      {posts?.map((post) => (
        <PostItem
          key={post.id}
          title={post.title}
          image={post.image}
          post={post}
        />
      ))}
    </div>
  );
}

export default PostList;
