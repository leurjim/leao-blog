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
    <Card className="mx-auto mt-4 grid max-w-md grid-cols-12 px-4 py-16 md:max-w-[1024px]">
      <CardBody className="col-span-12 mx-auto my-0 pb-40 pl-4 pr-4 pt-16">
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
          I'm a developer specializing in HTML, CSS, JAVASCRIPT, REACT, NEXTJS.
        </p>

        <p className="p-2 text-base leading-normal">
          Currently, I'm making a career switch from telecommunications to
          Front-End Developer.
        </p>
      </CardBody>
      <CardBody className="col-start-7 col-end-13 row-start-2 row-end-5 text-center">
        <h1 className="text-5xl">Blog Leao</h1>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </CardBody>
    </Card>
  );
}
