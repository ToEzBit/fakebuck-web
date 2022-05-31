import React, { useContext, useState, useEffect } from "react";
import { createPost, editPost } from "../../../api/post";
import { AuthContext } from "../../../contexts/AuthContext";
import SavePostButton from "./SavePostButton";
import TextArea from "./TextArea";
import UploadImage from "./UploadImage";
import Spinner from "../../common/Spinner";
import { usePost } from "../../../contexts/PostContext";
import { initPost } from "../../../action/postAction";

function PostForm({ open, onClose, isEdit, setIsEdit, postId }) {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const { dispatch, posts } = usePost();

  useEffect(() => {
    setTitle("");
    setImage(null);
  }, [open]);

  const handleClickSavePost = async () => {
    try {
      setLoading(true);
      if (isEdit) {
        const res = await editPost(title, image, postId);
        onClose();
        setIsEdit(false);
      } else {
        const res = await createPost(title, image);
        onClose();
      }

      //validate
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <TextArea
        placeholder={`What's on your mine ${user.firstName} <3 ~`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <UploadImage
        value={image}
        onChange={(e) => {
          if (e.target.files[0]) {
            setImage(e.target.files[0]);
          }
        }}
        onDelete={() => setImage(null)}
      />
      <SavePostButton onClick={handleClickSavePost} />
    </>
  );
}

export default PostForm;
