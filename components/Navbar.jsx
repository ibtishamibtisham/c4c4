import { Link } from "react-router-dom";
const links = [
  {
    title: "Home",
    link: "/home",
    id: "header-link-home",
  },
  {
    title: "About",
    link: "/about",
    id: "header-link-about",
  },
  {
    title: "Movies",
    link: "/movies",
    id: "header-link-movies",
  },

  //   add the other link as well
];
export const Navbar = () => {
  return (
    <>
      {links.map(({ title, link, index, id }) => {
        return (
          <Link key={index} to={link} id={id}>
            {title}
          </Link>
        );
      })}
    </>
  );
};
