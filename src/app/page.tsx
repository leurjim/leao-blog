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
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody className="text-center">
        <h1 className="text-5xl">Blog Leao</h1>
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </CardBody>
    </Card>
  );
}
