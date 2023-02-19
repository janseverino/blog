import { useContext, useState } from "react";
import { BlogContext } from "../../Context/BlogContext";
import { Blog } from "../../Types/types";
import Joi from "joi";
import "./style.css";
import { getLabelError, validateSquemas } from "../../Utils/Validations";
import { RouteComponentProps } from "react-router-dom";
import { getBlogId } from "../../Data/blogs";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const blogEsquema = Joi.object({
  content: Joi.string().required().min(5).label('Content'),
  title: Joi.string().required().min(5).label('Title'),
  description: Joi.string().required().min(5).label('Description'),
  id: Joi.string().required(),
  date: Joi.date().required(),
  img:Joi.string()
});

const blogDefault: Blog = {
  content: "",
  title: "",
  description: "",
  date: new Date(),
  id: "",
  img:""
};

const NewBlog = (props: RouteComponentProps) => {
  const [blog, setBlog] = useState<Blog>(blogDefault);
  const [errors, setErrors] = useState<any>({});
  const { saveNewBlog } = useContext(BlogContext);

  const handleBlogChange = (name: string, value: string) => {
    const blog_: any = { ...blog };
    blog_[name] = value;
    setBlog(blog_);
  };

  const saveBlog = () => {
    const blog_: Blog = { ...blog, date: new Date(), id: getBlogId() };
    const errors = validateSquemas(blogEsquema, blog_);
    setErrors(errors);

    if (Object.keys(errors).length > 0) return;

    saveNewBlog(blog_);
    props.history.push("/blog");
  };

  return (
    <div>
      <button onClick={saveBlog} className="float-end btn btn-primary">
        Save
      </button>

      <div className=" col-12">
      {blog.img && (
        <div className="mb-5 image-box">
          <img height={"100px"} src={blog.img} alt="..." />
        </div>
      )}
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
          {getLabelError("content", errors)}
          <ReactQuill theme="snow" value={blog.content} onChange={(e) => handleBlogChange("content", e)} />
        </div>
      </div>
    </div>
  );
};

export default NewBlog;
