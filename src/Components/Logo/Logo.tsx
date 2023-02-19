import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className="navbar-brand" to="/">
      <img
        width={"50px"}
        src="https://e7.pngegg.com/pngimages/68/828/png-clipart-naver-blog-logo-computer-icons-naver-blog-text-rectangle.png"
        alt="MicroCMS"
      />
    </Link>
  );
};

export default Logo;
