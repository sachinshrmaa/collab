import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-light">
      <div className="container py-4 d-flex justify-content-between">
        <div>
          <Link href="/" className="navbar-brand" id="logo">
            SACHINSBLOG <span className="text-muted ms-2">Work</span>
          </Link>
          <p className="mt-2">Made with ❤ by Sachin</p>
        </div>

        <nav class="nav">
        
          <Link href="https://sachinsblog.in" className="nav-link">
            Blog
          </Link>
          <Link
            href="https://thebasics.sachinsblog.in"
            className="nav-link ms-md-3"
          >
            Masterclass
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
