import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const {data:blog, pending, error} = useFetch("http://localhost:9000/posts/" + id);

    return (
        
      <div className="blog-details">
        {pending && <div>Please wait</div>}
        {error && <div>You have some problem!</div>}
        {blog && 
        <article>
           <h2> { blog.title } </h2>
           <p> { blog.author } </p>
        </article>
            
        }
      </div>

    );


}

export default BlogDetails;