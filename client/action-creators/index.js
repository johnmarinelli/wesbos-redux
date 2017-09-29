/*
 * increment
 */
export const increment = (index) => ({
  type: 'INCREMENT_LIKES',
  index
});

/*
 * add comment
 */
export const addComment = (postId, author, text) => ({
  type: 'ADD_COMMENT',
  postId,
  author,
  text
});

/*
 * remove comment
 */
export const removeComment = (postId, index) => ({
  type: 'REMOVE_COMMENT',
  postId,
  index
});
