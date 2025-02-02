import Link from "next/link";

import { Card, CardBody } from "@nextui-org/react";
import { Post, allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date}>
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <p>{post.summary}</p>
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <section className="px-4 py-16 md:mx-auto md:my-0 md:max-w-[1024px]">
      <Card className="gap-2 px-8 md:grid md:grid-cols-12">
        <CardBody className="md:col-start-1 md:col-end-9 md:row-start-1 md:row-end-2 md:text-left">
          <p className="p-2 text-base leading-normal">
            Hi, my name is{" "}
            <span className="text- block text-6xl font-light text-blue-900">
              Leao Urbina.
            </span>
          </p>

          <h2 className="justify-between p-2 text-6xl">
            I develop the front end of websites.
          </h2>

          <p className="p-2 text-base leading-normal">
            I'm a developer specializing in HTML, CSS, JAVASCRIPT, REACT,
            NEXTJS.
          </p>

          <p className="p-2 text-base leading-normal">
            Currently, I'm making a career switch from telecommunications to
            Front-End Developer.
          </p>
        </CardBody>
        <CardBody className="md:col-start-9 md:col-end-13 md:row-start-1 md:row-end-2 md:justify-end">
          {/* <h1 className="text-5xl">Blog Leao</h1> */}
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </CardBody>
      </Card>
    </section>
  );
}
