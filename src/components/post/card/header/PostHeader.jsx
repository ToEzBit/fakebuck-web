import { useState } from "react";
import { Link } from "react-router-dom";
import { deletePost } from "../../../../api/post";
import { timeSince } from "../../../../services/dateFormat";
import UserIcon from "../../../common/UserIcon";
import Modal from "../../../ui/Modal";
import PostForm from "../../form/PostForm";

function PostHeader({ post }) {
  const {
    User: { id, firstName, lastName, profilePic },
    createdAt,
    id: postId,
  } = post;

  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };

  const handleDeletePost = async () => {
    await deletePost(postId);
  };

  return (
    <>
      <div className="d-flex align-items-center space-x-2">
        <Link to={`/profile/${id}`}>
          <UserIcon src={profilePic} size="40" />
        </Link>
        <div className="d-flex flex-column flex-fill">
          <a
            href="/"
            className="text-dark fw-bold no-underline hover-underline text-3.5"
          >
            {firstName} {lastName}
          </a>
          <small className="text-muted text-3">{timeSince(createdAt)}</small>
        </div>
        <button
          className="btn rounded-circle h-9 w-9 position-relative hover-bg-gray-200"
          data-bs-toggle="dropdown"
        >
          <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
        </button>
        <div className="dropdown-menu dropdown-menu-end">
          <button
            className="dropdown-item"
            type="button"
            onClick={() => {
              setOpen(true);
              setIsEdit(true);
            }}
          >
            Edit
          </button>
          <button
            className="dropdown-item"
            type="button"
            onClick={handleDeletePost}
          >
            Delete
          </button>
        </div>
      </div>
      <Modal open={open} onClose={closeModal} title="Edit Post">
        <PostForm
          open={open}
          onClose={closeModal}
          isEdit={isEdit}
          postId={postId}
          setIsEdit={setIsEdit}
        />
      </Modal>
    </>
  );
}

export default PostHeader;
