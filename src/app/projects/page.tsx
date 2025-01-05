import { Image } from "@nextui-org/image";
import { Card, CardBody, Link } from "@nextui-org/react";

export default function Projects() {
  return (
    <section className="px-4 py-16 md:mx-auto md:my-0 md:max-w-[1024px]">
      <h2 className="m-0 mb-10 text-3xl">Projects I'm proud of</h2>
      <Card className="gap-2 px-8 md:grid md:grid-cols-10">
        <CardBody className="md:order-2 md:col-start-5 md:col-end-11 md:row-start-1 md:row-end-2 md:text-right">
          <h4 className="m-0 text-base">First Project</h4>
          <h3 className="m-0 p-4 text-2xl text-sky-600">
            Developer blog with Gatsby
          </h3>
          <p className="rounded-xl bg-blue-500 p-4 text-base leading-normal">
            Being my first project done in the first instance through a course I
            was able to include functionalities, which helped me understand how
            Gatsby and its plugins work. It took me hours and days to carry out
            this project, but the effort was worth it, since I was able to put
            what I had learned and researched into practice. Gatsby is a static
            site builder based on React and powered by GraphQL. It combines the
            best parts of React, Webpack, react-router, GraphQL, and other
            front-end tools to provide a great developer experience. Take you
            from initializing a Gatsby site via the CLI to using the Gatsby
            ecosystem to get MDX files from your system. After tackling the file
            system, you'll optimize for SEO, as well as additional styling via
            ThemeUI that will support features like syntax highlighting in code
            snippets.{" "}
            <Link
              href="https://blogleurjim.gatsbyjs.io/"
              target="_blank"
              className="text-white-500"
            >
              Like this
            </Link>{" "}
            to see the blog.
          </p>
          <h4 className="m-0 text-base">Technologies used include:</h4>
          <ul className="m-0 flex list-none flex-row flex-wrap justify-start gap-3 p-0 text-base font-bold md:justify-end">
            <Link>Gatsby</Link>
            <Link>ThemeUI</Link>
            <Link>MDX</Link>
          </ul>
        </CardBody>
        <CardBody className="mb-16 ml-0 mr-0 mt-8 rounded-3xl border-l-2 border-t-2 p-4 md:col-start-1 md:col-end-6 md:row-start-1 md:row-end-2 md:justify-end">
          <Image
            alt="Screenshot of blog."
            className="z-0 h-full w-full object-fill"
            src="https://res.cloudinary.com/leurjim/image/upload/v1679268207/capturablog_d1z1lg.png"
          />
        </CardBody>
      </Card>
      <Card className="gap-2 px-8 md:grid md:grid-cols-10">
        <CardBody className="md:order-2 md:col-start-1 md:col-end-7 md:row-start-1 md:row-end-2 md:text-left">
          <h4 className="m-0 text-base">Second Project</h4>
          <h3 className="m-0 p-4 text-2xl text-sky-600">Seimetel Web</h3>
          <p className="rounded-xl bg-blue-500 p-4 text-base leading-normal">
            Seimetel project created for a Telecommunications Infrastructure
            company. The client wanted to make himself known through the Web. It
            has been the first comprehensive project from the Design to the
            Backend of the added form. As it is an informative page, it was
            decided to develop it in Gatsby. The page was deployed through
            Netlify. Where the form created on the Contact Us page could be
            configured. Here you can see the code{" "}
            <Link
              href="https://github.com/leurjim/siemetel"
              target="_blank"
              className="text-white-500"
            >
              Github.
            </Link>
          </p>
          <h4 className="m-0 text-base">Technologies used include:</h4>
          <ul className="md:start m-0 flex list-none flex-row flex-wrap justify-start gap-3 p-0 text-base font-bold">
            <Link>Gatsby</Link>
            <Link>CSS</Link>
          </ul>
        </CardBody>
        <CardBody className="mb-16 ml-0 mr-0 mt-8 rounded-3xl border-l-2 border-t-2 p-4 md:col-start-6 md:col-end-11 md:row-start-1 md:row-end-2 md:justify-end">
          <Image
            alt="Screenshot of Seimetel."
            className="z-0 h-full w-full object-fill"
            src="https://res.cloudinary.com/leurjim/image/upload/v1679311107/Captura_seimetel_rgqhja.png"
          />
        </CardBody>
      </Card>
      <Card className="gap-2 px-8 md:grid md:grid-cols-10">
        <CardBody className="md:order-2 md:col-start-5 md:col-end-11 md:row-start-1 md:row-end-2 md:text-right">
          <h4 className="m-0 text-base">Latest Project</h4>
          <h3 className="m-0 p-4 text-2xl text-sky-600">FL Globall Web</h3>
          <p className="rounded-xl bg-blue-500 p-4 text-base leading-normal">
            Description of the project. Project developed for a Logistic
            Transport company. It was developed on Gatsby and used for the
            Chakra UI styles theme. Here you can see the code{" "}
            <Link
              href="https://github.com/leurjim/flgloball"
              target="_blank"
              className="text-white-500"
            >
              Github
            </Link>
          </p>
          <h4 className="m-0 text-base">Technologies used include:</h4>
          <ul className="m-0 flex list-none flex-row flex-wrap justify-start gap-3 p-0 text-base font-bold md:justify-end">
            <Link>Gatsby</Link>
            <Link>Chakra UI</Link>
          </ul>
        </CardBody>
        <CardBody className="mb-16 ml-0 mr-0 mt-8 rounded-3xl border-l-2 border-t-2 p-4 md:col-start-1 md:col-end-6 md:row-start-1 md:row-end-2 md:justify-end">
          <Image
            alt="Screenshot of Fl."
            className="z-0 h-full w-full object-fill"
            src="https://res.cloudinary.com/leurjim/image/upload/v1679311106/Captura_fl_ucmd0h.png"
          />
        </CardBody>
      </Card>
    </section>
  );
}
