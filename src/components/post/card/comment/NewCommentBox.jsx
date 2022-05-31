import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
import UserIcon from "../../../common/UserIcon";
import { createCommentAction } from "../../../../action/postAction";
import { createComment } from "../../../../api/post";
import { useError } from "../../../../contexts/errorContext";
import { usePost } from "../../../../contexts/PostContext";

function NewCommentBox({ postId }) {
  const [title, setTitle] = useState("");
  const { user } = useAuth();
  const { id, profilePic } = user;
  const { dispatch } = usePost();
  const { setError } = useError();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createComment(title, postId);
      dispatch(
        createCommentAction({ comment: res.data.comment, postId, user })
      );
      setTitle("");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="d-flex pt-1">
      <Link to={`profile/${id}`}>
        <UserIcon size="32" src={profilePic} />
      </Link>
      <form className="flex-grow-1 ms-2" onSubmit={handleSubmit}>
        <input
          className="form-control rounded-pill  shadow-none border-0 bg-gray-200 focus-bg-gray-200 h-9 text-3.5"
          placeholder="Write a comment..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
}

export default NewCommentBox;
