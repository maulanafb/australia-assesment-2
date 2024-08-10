"use client";

import PostItem from "./PostItem";

interface Operation {
  type: string;
  rightArgument: number;
  result: number;
  username: string;
}

interface Post {
  _id: string;
  startingNumber: number;
  operations: Operation[];
  username: string;
}

interface PostListProps {
  posts: Post[];
  onOperationAdded: () => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onOperationAdded }) => {
  return (
    <div className="max-w-2xl mx-auto">
      {posts.map((post) => (
        <PostItem
          key={post._id}
          post={post}
          onOperationAdded={onOperationAdded}
        />
      ))}
    </div>
  );
};

export default PostList;
