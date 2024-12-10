import "./Post.css";
export default function Post({ post }) {
  const { title, body, id, userId } = post;
  return (
    <div className="post">
      <h4>Title: {title}</h4>
      <p>
        <small>Post id: {id} </small>
      </p>
      <p>
        <small>User id: {userId} </small>
      </p>
      <p>{body}</p>
    </div>
  );
}
