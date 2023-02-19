import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ImageHeroe = () => {
  const [title] = useState<String>("MicroBlog by Jan");
  const [description] = useState<String>(
    "If you are insteresting to know more about tecnology this is the best place."
  );

  return (
    <div className="banner col-12 position-relative">
      <div className="banner-container position-absolute bottom-0 end-0 pb-3 pe-3 me-5">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="btn btn-success" to="/home">
          Personal Blog
        </Link>
      </div>
    </div>
  );
};

export default ImageHeroe;
