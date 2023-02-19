import { Option, Page } from "../../Types/types";
import {
  NavLink,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import "./style.css";
import AutoComplete from "../AutoComplete/AutoComplete";
import { useContext, useState } from "react";
import { BlogContext } from "../../Context/BlogContext";
import Logo from "../Logo/Logo";

const selectedStyle = {
  borderBottom: "solid 4px transparent",
  borderRadius: "10px",
  color: "#4caf50",
};

const pages: Page[] = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

function HeaderMenuBar({ history }: RouteComponentProps) {
  const { onSearchBlogs } = useContext(BlogContext);
  const [options, setOptions] = useState<Option[]>([]);

  const handleSearchChange = (value: string) => {
    const blogs = onSearchBlogs(value);
    setOptions(
      blogs.map((item) => {
        const newOption: Option = {
          key: item.title,
          value: item.id,
          img: item.img,
          onClick: () => history.push(`/blog/${item.id}`),
        };
        return newOption;
      })
    );
  };

  return (
    <nav className="navbar navbar-expand-lg app-header">
      <div className="container-fluid">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse row"
          id="navbarSupportedContent"
        >
          <div className="col-6">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {pages.map((page, index) => (
                <li
                  key={`${page.path}-${index}`}
                  className="nav-item linkOption"
                >
                  <NavLink
                    activeStyle={selectedStyle}
                    className="nav-link active"
                    aria-current="page"
                    to={`${page.path}`}
                  >
                    {page.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 d-flex">
            <AutoComplete
              onChange={handleSearchChange}
              options={options}
              classes="me-2"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(HeaderMenuBar);
