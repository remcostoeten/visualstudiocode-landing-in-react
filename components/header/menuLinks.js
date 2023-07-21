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
      {
        name: "URL extract",
        path: "/url",
        icon: "html_icon.svg",
      },
    ],
  },
  {
    name: "Data",
    path: "/table",
    icon: "js_icon.svg",
  },
  {
    name: "Personal snippets",
    path: "https://snippets.remcostoeten.com",
    target: "_blank",
    icon: "json_icon.svg",
  },
  {
    name: "GitHub",
    path: "/github",
    icon: "markdown_icon.svg",
  },

  {
    name: "Kanban board",
    path: "https://kanban.remcostoeten.com",
    icon: "react_icon.svg",
  },
  {
    name: "Todo ",
    path: "/todo",
    icon: "css_icon.svg",
  },
]

export default menuLinks
