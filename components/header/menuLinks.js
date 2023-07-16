const menuLinks = [
  {
    name: "Home",
    path: "/",
    icon: "react_icon.svg",
  },
  {
    name: "Miscellaneous",
    path: false,
    icon: "html_icon.svg",
    isDropdown: true,
    dropdownItems: [
      {
        name: "Cursor",
        path: "/cursor",
        icon: "html_icon.svg",
      },
    ],
  },
  {
    name: "Contact",
    path: "/contact",
    icon: "css_icon.svg",
  },
  {
    name: "Projects",
    path: "/projects",
    icon: "js_icon.svg",
  },
  {
    name: "Articles",
    path: "https://snippets.remcostoeten.com",
    target: "_blank",
    icon: "json_icon.svg",
  },
  {
    name: "GitHub",
    path: "/github",
    icon: "markdown_icon.svg",
  },
]

export default menuLinks
