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
      {
        name: "new incomee",
        path: "/new/expenses",
        icon: "html_icon.svg",
      },
    ],
  },
  {
    name: "remcostoeten.com - WiP",
    path: "https://remcostoeten.com",
    target: "_blank",
    icon: "css_icon.svg",
  },
  {
    name: "previous.remcostoeten.com - Old",
    path: "https://previous.remcostoeten.com",
    target: "_blank",
    icon: "js_icon.svg",
  },
  {
    name: "Github",
    path: "https://github.com/remcostoeten",
    target: "_blank",
    icon: "markdown_icon.svg",
  },
  {
    name: "Gitlab",
    path: "https://gitlab.com/remcostoeten",
    target: "_blank",
    icon: "vscode_icon.svg",
  },
  {
    name: "Snippets/docs",
    path: "https://snippets.remcostoeten.com",
    target: "_blank",
    icon: "json_icon.svg",
  },
  {
    name: "URL extractor - WiP",
    path: "/url",
    icon: "vscode_icon.svg",
  },
  {
    name: "Kanban board",
    path: "https://kanban.remcostoeten.com",
    icon: "react_icon.svg",
  },
  {
    name: "Todo - MySQL - WiP ",
    path: "/todo",
    icon: "css_icon.svg",
  },
  {
    name: "Expenses - MySQL - WiP ",
    path: "/expenses",
    icon: "html_icon.svg",
  },
]

export default menuLinks
