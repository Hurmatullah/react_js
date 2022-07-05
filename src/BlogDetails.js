import {useParams} from "react-router-dom";
import useFetch from "./useFetch";
import {useHistory} from "react-router-dom";

const BlogDetails = () => {
  const {id} = useParams();
  const {
    data: blog,
    pending,
    error,
  } = useFetch("http://localhost:9000/posts/" + id);
  const history = useHistory();

  const handleDelete = () => {
    setTimeout(() => {
      fetch("http://localhost:9000/posts/" + blog.id, {
        method: "DELETE",
      }).then(() => {
        history.push("/");
      });
    }, 1000);
  };

  return (
    <div className="blog-details">
      {pending && <div>Please wait</div>}
      {error && <div>You have some problem!</div>}
      {blog && (
        <article>
          <h2> {blog.title} </h2>
          <p> {blog.author} </p>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
