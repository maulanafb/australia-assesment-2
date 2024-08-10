"use client";

import { useSession } from "next-auth/react";
import OperationForm from "./OperationForm";

interface Operation {
  type: string;
  rightArgument: number;
  result: number;
  username: string;
}

interface Post {
  _id: string;
  username: string;
  startingNumber: number;
  operations: Operation[];
}

interface PostItemProps {
  post: Post;
  onOperationAdded: () => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, onOperationAdded }) => {
  return (
    <div className="border border-gray-300 shadow-sm rounded-lg p-4 mb-6 bg-white">
      <div className="flex items-center mb-4">
        <div className="text-lg font-semibold text-gray-700">
          {post.username}
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-gray-600">
          <span className="font-medium">Starting Number:</span>{" "}
          {post.startingNumber}
        </p>
        <ul className="space-y-2">
          {post.operations.map((op, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 bg-gray-100 rounded"
            >
              <div className="text-gray-800 font-medium">{op.username}</div>
              <div className="text-gray-600">
                {op.type} {op.rightArgument} = {op.result}
              </div>
            </li>
          ))}
        </ul>
        <OperationForm postId={post._id} onOperationAdded={onOperationAdded} />
      </div>
    </div>
  );
};

export default PostItem;
