import Link from "next/link";

const navItems = {
  "/work": {
    name: "work",
  },
  "/about ": {
    name: "about",
  },
  "/blog": {
    name: "blog",
  },
};

export function Navbar() {
  return (
    <aside className="mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row justify-between items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex">
            <h2>
              <Link
                href="/"
                className="text-2xl font-semibold tracking-tighter transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
              >
                tanner finlay
              </Link>
            </h2>
          </div>
          <div className="flex flex-row">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}
            <a
              href="Finlay_Matthew_Resume.pdf"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
            >
              resume
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
}
