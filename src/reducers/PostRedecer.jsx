import { INIT, CREATE_COMMENT, DELETE_COMMENT } from "../action/postAction";

export const initial = {
  posts: [],
  // commentMapping: {1:[comments],2:[comments]},
  commentMapping: {},
};

export default function postReducer(state, action) {
  switch (action.type) {
    //dispatch ({type :"INIT",action:{payload:[]}})

    case INIT: {
      const commentMapping = action.payload.reduce((acc, el) => {
        acc[el.id] = el.Comments;
        return acc;
      }, {});
      return { ...state, posts: action.payload, commentMapping };
    }
    case CREATE_COMMENT: {
      // const idx = state.posts.findIndex(
      //   (el) => el.id === action.payload.postId
      // );
      // const newComments = [...state.posts[idx].Comments];
      // newComments.push({
      //   ...action.payload.comment,
      //   User: action.payload.user,
      // });
      // const newPosts = [...state.posts];
      // newPosts[idx] = { ...newPosts[idx], Comments: newComments };
      // return { ...state, posts: newPosts };
      const newComments = [...state.commentMapping[action.payload.postId]];
      newComments.push({
        ...action.payload.comment,
        User: action.payload.user,
      });
      return {
        ...state,
        commentMapping: {
          ...state.commentMapping,
          [action.payload.postId]: newComments,
        },
      };
    }
    case DELETE_COMMENT: {
      const newComments = [
        ...state.commentMapping[action.payload.postId],
      ].filter((el) => el.id !== action.payload.commentId);
      return {
        ...state,
        commentMapping: {
          ...state.commentMapping,
          [action.payload.postId]: newComments,
        },
      };
    }
    default:
      return state;
  }
}
