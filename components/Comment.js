const Comment = ({ comment }) => (
  <div className="comment">
    <div className="comment-user">{comment.user}</div>
    <div className="comment-content" dangerouslySetInnerHTML={{ __html: comment.content }} />

    {/* 第二層巢狀留言, 使用自己本身的組件 */}
    {comment.comments && (
      <div className="nested-comments">
        {comment.comments.map(nestedComment => (
          <Comment key={nestedComment.id} comment={nestedComment} />
        ))}
      </div>
    )}

    <style jsx>{`
      .comment {
        margin-bottom: 1.5em;
      }

      .comment-user {
        font-size: 0.9rem;
        font-weight: bold;
        margin-bottom: 0.5em;
      }

      .comment-content {
        font-size: 0.9rem;
        line-height: 1.6;
      }

      .comment-content :global(p) {
        margin: 0;
        margin-bottom: 0.8em;
        word-wrap: break-word;
      }

      .comment-content :global(a) {
        color: #f60;
        text-decoration: underline;
      }

      .comment-content :global(pre) {
        max-width: 100%;
        overflow: scroll;
      }

      .nested-comments {
        margin-top: 1em;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
        padding-left: 1em;
      }
    `}</style>

    <style global jsx>{``}</style>
  </div>
)

export default Comment
