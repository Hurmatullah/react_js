import { Link } from "react-router-dom";

const Bloglist = ({ blogs, title }) => {
  return (
    <div className="home">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
              <h2 id="text-headlines">Title is: {blog.title}</h2>
              <p id="text-paragraph">Author is: {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
