const Bloglist = ({ blogs, title, deleteRow }) => {
  return (
    <div className="home">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.author}</h2>
          <p>{blog.year}</p>
          <button onClick={() => deleteRow(blog.id)}>Click to delete</button>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
