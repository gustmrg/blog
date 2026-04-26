import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="layout">
      <header>
        <nav>
          <Link to="/" className="site-title">
            Blog
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
