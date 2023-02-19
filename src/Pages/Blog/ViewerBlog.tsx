import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BlogContext } from "../../Context/BlogContext";
import { Blog } from "../../Types/types";
import "./style.css";

type BlogParams = {
  id: string;
};

const ViewerBlog = () => {
  const [blog, setBlog] = useState<Blog>();
  const { getBlogs } = useContext(BlogContext);
  const { id } = useParams<BlogParams>();

  useEffect(() => {
    if (id) {
      const blogFiltered = getBlogs().find((item) => item.id === id);
      setBlog(blogFiltered);
    }
  }, [id, getBlogs]);

  if (!blog)
    return (
      <>
        <h1>There is not blog avaible!</h1>
        <h1>;(</h1>
      </>
    );

  return (
    <div>
      <Link
        className="float-end btn btn-outline-primary"
        to={"/edit/" + blog.id}
      >
        Edit
      </Link>
      {blog.img && (
        <div className="mb-5 image-box">
          <img src={blog.img} className="img-fluid" alt="..." />
        </div>
      )}
      <div className=" col-12">
        <h1 className="blog-title col-6 mb-3 mt-4 over-laping-blog title-edit">
          {blog.title}
        </h1>
        <div
          className="text-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      </div>
    </div>
  );
};

export default ViewerBlog;
