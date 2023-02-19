import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardBlog from "../../Components/CardBlog/CardBody";
import ImageHeroe from "../../Components/ImageHeroe/ImageHeroe";
import Video from "../../Components/Video/Video";
import { BlogContext } from "../../Context/BlogContext";
import { Blog } from "../../Types/types";

export default function Home() {
  const [recentsBlogs, setBlogRecents] = useState<Blog[]>([]);

  const { getBlogs } = useContext(BlogContext);
  useEffect(() => {
    const blogs = getBlogs();
    setBlogRecents(
      blogs.sort((a, b) => (a.date > b.date ? -1 : 1)).slice(0, 4)
    );
  }, [getBlogs]);

  return (
    <div className="ps-5 pe-5">
      <ImageHeroe />
      <h2 className="text-start mt-5 mb-3 border-bottom border-3">
        Most recents
      </h2>
      <div className="row col-12 pt-4 pe-0">
        {recentsBlogs.map((item) => (
          <div
            key={item.id}
            className="col-lg-6 col-sm-6 col-xs-Hey Hey 12 pe-0"
          >
            <CardBlog
              img={item.img}
              link={{ path: `/blog/${item.id}`, val: "See more" }}
              title={item.title}
              content={item.content}
            />
          </div>
        ))}
      </div>
      <div className="text-end mb-5">
        <Link to={"/blog"} className="btn btn-success">
          See more news
        </Link>
      </div>
      <div className="col-md-12 row">
        <div className="col-md-6">
          <Video src="https://www.youtube.com/embed/ARoGZIN5oC4" />
        </div>
        <div className="col-md-6 text-start row">
          <div className="col-4">
            <img
              src="https://static.javatpoint.com/images/javascript/javascript_logo.png"
              className="img-thumbnail"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
