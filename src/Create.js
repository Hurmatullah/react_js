import {useState} from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, content, author};

    fetch("http://localhost:9000/posts", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
    });
  };

  return (
    <div className="Create-blog">
      <h2>Add new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Content</label>
        <textarea
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <label>Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="josi">Josi</option>
          <option value="yosi">Yosi</option>
        </select>
        <button>Add blog</button>
      </form>
      <p>{title}</p>
      <p>{content}</p>
      <p>{author}</p>
    </div>
  );
};

export default Create;
