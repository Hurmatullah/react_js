import {useState} from "react";

const Create = () => {
  const [title, setTitle] = useState("");

  return (
    <div className="Create-blog">
      <h2>Add new blog</h2>
      <form>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Content</label>
        <textarea required></textarea>
        <label>Author</label>
        <select>
          <option>Josi</option>
          <option>Yosi</option>
        </select>
        <button>Add blog</button>
      </form>
      <p>{title}</p>
    </div>
  );
};

export default Create;
