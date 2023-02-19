import { createContext, ReactNode, useCallback } from "react";
import { blogsData } from "../Data/blogs";
import { Blog } from "../Types/types";

export interface BlogContextType {
  getBlogs: () => Blog[];
  onSearchBlogs: (value: string) => Blog[];
  onEditBlog: (blog: Blog) => void;
  saveNewBlog: (blog: Blog) => void;
}

type Props = {
  children: ReactNode;
};

export const BlogContext = createContext<BlogContextType>({
  getBlogs: () => [],
  onSearchBlogs: () => [],
  onEditBlog: () => {},
  saveNewBlog: () => {},
});

export const BlogProvider = ({ children }: Props) => {
  const getBlogs = useCallback(() => {
    const blogsLocalStore = localStorage.getItem("blogs");

    if (blogsLocalStore) return JSON.parse(blogsLocalStore);
    else {
      localStorage.setItem("blogs", JSON.stringify(blogsData));
      return blogsData;
    }
  }, []);

  const onSearchBlogs = useCallback((value: string) => {
    const blogsLocalStore = localStorage.getItem("blogs");

    if (blogsLocalStore) {
      const data: Blog[] = JSON.parse(blogsLocalStore);
      return data.filter(
        (blog) => blog.title.includes(value) || blog.description.includes(value)
      );
    }
    return [];
  }, []);

  const saveNewBlog = (blog: Blog) => {
    const blogsLocalStore = localStorage.getItem("blogs");

    if (blogsLocalStore) {
      const data: Blog[] = JSON.parse(blogsLocalStore);
      data.push(blog);
      localStorage.setItem("blogs", JSON.stringify(data));
    }
  };

  const onEditBlog = (blog: Blog) => {
    const blogsLocalStore = localStorage.getItem("blogs") || "";
    const data: Blog[] = JSON.parse(blogsLocalStore);
    const indexBlog = data.findIndex((item) => item.id === blog.id);
    data[indexBlog] = blog;
    localStorage.setItem("blogs", JSON.stringify(data));
  };

  const values = {
    getBlogs,
    onSearchBlogs,
    onEditBlog,
    saveNewBlog,
  };

  return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
};
