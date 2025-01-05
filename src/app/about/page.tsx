import { Image } from "@nextui-org/image";
import { Card, CardBody, Link } from "@nextui-org/react";

export default function About() {
  return (
    <section className="px-4 py-16 md:mx-auto md:my-0 md:max-w-[1200px]">
      <h2 className="mb-10 text-3xl">About Leao Urbina</h2>
      <Card className="gap-2 px-8 md:grid md:grid-cols-10">
        <CardBody className="md:order-2 md:col-start-5 md:col-end-11 md:row-start-1 md:row-end-2 md:text-right">
          <h3 className="m-0 p-4 text-2xl text-sky-600">Just the highlights</h3>
          <p className="rounded-xl bg-blue-500 p-4 text-base leading-normal">
            👋 Hi, I'm Leao Urbina. I have the last 3 years learning Frontend. I
            am looking for my first project or job in Frontend. 🔭 Currently
            looking for projects and jobs that make me grow as a Frontend. 🌱
            Currently working on the development of an Ecommerce to sell
            livestock products.
          </p>
          <h4 className="m-0 p-2 text-base">
            My favorite technologies include:
          </h4>
          <ul className="m-0 flex list-none flex-row flex-wrap justify-start gap-3 p-0 text-base font-bold md:justify-end">
            <Link>HTML</Link>
            <Link>CSS</Link>
            <Link>TAILWIND CSS</Link>
            <Link>JAVASCRIPT</Link>
            <Link>REACT</Link>
            <Link>NETXJS</Link>
          </ul>
        </CardBody>
        <CardBody className="mb-16 ml-0 mr-0 mt-8 rounded-3xl border-l-2 border-t-2 p-4 md:col-start-1 md:col-end-6 md:row-start-1 md:row-end-2 md:justify-end">
          <Image
            alt="Card background"
            className="z-0 h-full w-full object-cover"
            src="/images/about.jpg"
          />
        </CardBody>
      </Card>
    </section>
  );
}
