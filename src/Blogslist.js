const Bloglist = (props) => {
  const blogs = props.blogs;
  const title = props.title;

  return (
    <div className="home">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.author}</h2>
          <p>Year of publish: {blog.year}</p>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
