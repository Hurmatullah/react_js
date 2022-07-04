import { useParams } from "react-router-dom";

const BlogDetails = () => {

    const { id } = useParams();

    return (

        <h2>This is Blog details - {id}</h2>

    );


}

export default BlogDetails;