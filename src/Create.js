const Create = () => {
  return (
    <div className="Create-blog">
      <h2>Add new blog</h2>
      <form>
        <label>Title</label>
        <input type="text" required />
        <label>Content</label>
        <textarea required></textarea>
        <label>Author</label>
        <select>
          <option>Josi</option>
          <option>Yosi</option>
        </select>
        <button>Add blog</button>
      </form>
    </div>
  );
};

export default Create;
