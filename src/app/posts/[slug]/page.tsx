import { Card, CardBody } from "@nextui-org/react";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post?.body.html) {
    return <div>No post here!</div>;
  }
  return (
    <Card className="mx-auto max-w-xl py-8">
      <CardBody className="mb-8 text-center">
        <time dateTime={post.date}>
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1>{post.title}</h1>
      </CardBody>
      <div
        className="text-sm [&>*:last-child]:mb-0 [&>*]:mb-3"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </Card>
  );
}
