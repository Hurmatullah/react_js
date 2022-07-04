import { Link } from "react-router-dom";

const Bloglist = ({ blogs, title }) => {
  return (
    <div className="home">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <Link to={`/blogs/${blog.id}`} key={blog.id}>
          <div className="blog-preview">
            <h2>{blog.author}</h2>
            <p>{blog.year}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Bloglist;
