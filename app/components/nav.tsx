import Link from "next/link";

const navItems = {
  "/about ": {
    name: "about",
  },
  "/work": {
    name: "work",
  },
};

const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();

  try {
    const response = await fetch("https://tannerfinlay.dev");
    const blob = await response.blob();

    const localUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = localUrl;
    link.setAttribute("download", "Finlay_Matthew_Resume.pdf");

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(localUrl);
  } catch (error) {
    console.error("Could not download file", error);
    window.open("https://tannerfinlay.dev", "_blank");
  }
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
              href="../api"
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
