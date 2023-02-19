import Joi from "joi";
import { useContext, useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import { BlogContext } from "../../Context/BlogContext";
import { Blog } from "../../Types/types";
import { getLabelError, validateSquemas } from "../../Utils/Validations";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./style.css";

type BlogParams = {
  id: string;
};

const blogEsquema = Joi.object({
  content: Joi.string().required().min(5).label('Content'),
  title: Joi.string().required().min(5).label('Title'),
  description: Joi.string().required().min(5).label('Description'),
  id: Joi.string().required(),
  date: Joi.date().required(),
  img: Joi.string()
});


const EditeBlog = ({ history }: RouteComponentProps) => {
  const [blog, setBlog] = useState<Blog>();
  const { getBlogs, onEditBlog } = useContext(BlogContext);  
  const [errors, setErrors] = useState<any>({});
  const { id } = useParams<BlogParams>();

  useEffect(() => {
    if (id) {
      const blogFiltered = getBlogs().find((item) => item.id === id);
      setBlog(blogFiltered);
    }
  }, [id, getBlogs]);

  if (!blog) return <>There is not blog available!</>;

  const handleBlogChange = (name: string, value: string) => {
    const blog_: any = { ...blog };
    blog_[name] = value;
    setBlog(blog_);
  };

  const saveBlog = () => {
    const errors = validateSquemas(blogEsquema, blog);
    setErrors(errors);

    if (Object.keys(errors).length > 0) return;

    onEditBlog(blog);
    history.push("/blog/" + blog.id);
  };

  return (
    <div>
      <button onClick={saveBlog} className="float-end btn btn-primary">
        Save
      </button>
      {blog.img && (
        <div className="mb-5 image-box">
          <img height={"100px"} src={blog.img} alt="..." />
        </div>
      )}
      <div className=" col-12">
        <div className="blog-title col-6 mb-3 mt-4">
          <h4>Title</h4>
          <input
            className="form-control col-6"
            value={blog.title}
            onChange={(e) => handleBlogChange("title", e.target.value)}
          />          
          {getLabelError("title", errors)}
        </div>
        <div className="blog-title col-6 mb-3 mt-4">
          <h4>Image</h4>
          <input
            className="form-control col-6"
            value={blog.img}
            onChange={(e) => handleBlogChange("img", e.target.value)}
          />
        </div>
        <div className="blog-title col-6 mb-3 mt-2">
          <h4>Description</h4>
          <input
            className="form-control col-6"
            value={blog.description}
            onChange={(e) => handleBlogChange("description", e.target.value)}
          />
          {getLabelError("description", errors)}
        </div>
        <div className="blog-title col-6 mb-5 mt-2">
          <h4>Content</h4>
          <ReactQuill theme="snow" value={blog.content} onChange={(e) => handleBlogChange("content", e)} />
          {getLabelError("content", errors)}
        </div>
      </div>
    </div>
  );
};

export default EditeBlog;
