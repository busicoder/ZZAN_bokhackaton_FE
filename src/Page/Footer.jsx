import { useLocation, useNavigate } from "react-router-dom";
import { House, ClipboardList } from "lucide-react";
import "./Footer.css";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    {
      label: "홈",
      path: "/",
      icon: House,
    },
    {
      label: "MY",
      path: "/mypage",
      icon: ClipboardList,
    },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return (
        location.pathname === "/" ||
        location.pathname.startsWith("/reserve") ||
        location.pathname.startsWith("/store")
      );
    }

    return location.pathname.startsWith(path);
  };

  return (
    <footer className="footer-nav">
      {navItems.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.path}
            className={`footer-item ${
              isActive(item.path) ? "active" : ""
            }`}
            onClick={() => navigate(item.path)}
          >
            <Icon size={22} strokeWidth={2} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </footer>
  );
}

export default Footer;