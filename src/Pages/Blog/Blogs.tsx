import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../../Context/BlogContext";
import { Blog } from "../../Types/types";

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const { getBlogs } = useContext(BlogContext);

  useEffect(() => {
    setBlogs(getBlogs().sort((a, b) => (a.date < b.date ? 1 : -1)));
  }, [getBlogs]);

  const articleItem = (blog: Blog) => {
    let link: JSX.Element;
    if (blog.img) {
      link = (
        <Link
          className="text-decoration-none row text-body"
          to={`/blog/${blog.id}`}
        >
          <div className="col-md-3 header-blog">{blog.title}</div>
          <div className="col-md-6 description-blog">{blog.description}</div>
          <div className="col-md-2 description-blog text-center">
            <img className="col-md-12" src={blog.img} alt={blog.title} />
          </div>
          <p>Author: Anonymous </p>
        </Link>
      );
    } else
      link = (
        <Link
          className="text-decoration-none row  text-body"
          to={`/blog/${blog.id}`}
        >
          <div className="col-md-5 header-blog over-laping-blog title">
            {blog.title}
          </div>
          <div className="col-md-7 description-blog over-laping-blog-description">
            {blog.description}
          </div>
          <p>Author: Anonymous </p>
        </Link>
      );

    return (
      <article
        key={blog.id}
        className="col-md-10 col-xs-12 col-lg-7 col-xs-12 mb-3 border-top blogs-container pe-2"
      >
        {link}
      </article>
    );
  };

  return (
    <>
      <div className="mb-5 col-md-12 ">
        <h2 className="">Blogs</h2>
        <Link className="btn btn-outline-primary float-end" to="/blog/new">
          Add new blog
        </Link>
      </div>
      <div>{blogs.map((blog) => (articleItem(blog)))}</div>
    </>
  );
}
