import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Homepage = () => {
    const {data:blogs,loading,error} = useFetch("http://localhost:8000/blogs") ;
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {loading && <div>Loading.....</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
        </div>
    );
}
 
export default Homepage;