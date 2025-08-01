export default function Comments({ comments }) {
  return (
    <div>
      <h3>Comments:</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.content}</p>
            <small>{comment.createdAt}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
