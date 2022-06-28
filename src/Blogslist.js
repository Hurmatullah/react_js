const Bloglist = () => {
  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.author}</h2>
          <p>Year of publish: {blog.year}</p>
        </div>
      ))}
    </div>
  );
};
