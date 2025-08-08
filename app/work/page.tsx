import { EXPERIENCE } from "app/assets/experience";
import { PROJECTS } from "app/assets/projects";
import WorkItem from "app/components/work-item";

export const metadata = {
  title: "Work",
  description: "About my work.",
};

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        Experience
      </h1>
      <WorkItem
        items={EXPERIENCE.map((item) => (
          <Experience
            {...item}
            dates={[item.dates.start, item.dates.end ?? "Present"]}
          />
        ))}
      ></WorkItem>
      <h1 className="mb-4 mt-12 text-2xl font-semibold tracking-tighter">
        Projects
      </h1>
      <WorkItem
        items={PROJECTS.map((item) => (
          <Project {...item} />
        ))}
      ></WorkItem>
    </section>
  );
}

function Experience({ name, dates, description, position }) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <b>{name}</b>
        <p>{dates.join(" - ")}</p>
      </div>
      <p className="text-neutral-600 dark:text-neutral-400">{position}</p>
      <p>{description}</p>
    </div>
  );
}

function Project({ name, images, description, summary, link, tags }) {
  return (
    <div>
      <h2 className="text-xl font-semibold">{name}</h2>
      {/*       Disabled until images get fixed
      {images.map((img, index) => (
        <img
          src={`/images/${img}`}
          alt={`${name} number ${index}`}
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "0.5rem",
            marginTop: "1rem",
          }}
          key={`${name} number ${index}`}
        />
      ))} */}

      <p className="text-neutral-600 dark:text-neutral-400 mt-2">
        {description}
      </p>
      <p className="mt-2">{summary}</p>
      {link && (
        <a
          href={link}
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      )}
      <div className="mt-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 text-sm mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
