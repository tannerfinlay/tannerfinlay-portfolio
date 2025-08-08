import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">About Me</h1>
      <p className="mb-4">
        {`Full-Stack Software Engineer specializing in Angular, Spring Boot, and scalable cloud architectures. Experienced
in microservice development, CI/CD automation, and optimizing software pipelines for enterprise applications.
Passionate about delivering high-performance solutions and crafting seamless user experiences with meticulous
UI precision.`}
      </p>
    </section>
  );
}
