import { Link } from "react-router-dom";
import { LinkType } from "../../Types/types";
import "./style.css";

interface CardBlogsProps {
  classes?: string;
  img?: string;
  link?: LinkType;
  title: string;
  content: string;
}

const CardBlog = ({ title, img, link, content }: CardBlogsProps) => {
  return (
    <div className="card mb-3 col-md-12 cardContainer">
      <div className="row g-0">
        {img && (
          <div className="col-md-4 image-box border-end">
            <img src={img} className="img-fluid rounded-start" alt="..." />
          </div>
        )}
        <div className={img ? "col-md-8" : "col-md-12"}>
          <div className="card-body text-start">
            <h5 className="card-title text-over-flow-title">{title}</h5>
            <div className="card-text text-over-flow"  dangerouslySetInnerHTML={{__html: content}}></div>
            <div className="text-end">
              {link && (
                <Link to={link.path} className="btn btn-outline-success">
                  {link.val}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
