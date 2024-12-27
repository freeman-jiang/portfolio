import { Gradients } from "@/components/Gradients";
import { Positions } from "@/components/Positions";
import { Project } from "@/components/Project";
import { client } from "@/contentful/client";
import {
  IPositionListFields,
  IProject,
  IProjectFields,
} from "@/types/generated/contentful";
import { InferGetStaticPropsType } from "next";

export const getStaticProps = async () => {
  const getPositionList = client.getEntry("2GrZxy0No7mWazsNhou3Ez");

  const getProjectList = client.getEntry("6G0lD5lWI23RDAWE9XrU3G");

  const [positionsEntry, projectListEntry] = await Promise.all([
    getPositionList,
    getProjectList,
  ]);

  const projects = projectListEntry.fields.projects as IProject[];

  // @ts-ignore
  const positions = positionsEntry.fields as IPositionListFields;

  return {
    props: {
      projects,
      positions,
    },
    revalidate: 10,
  };
};

const HOME_URL = "https://freemanjiang.com";

const Home = ({
  positions,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <main className="mx-auto max-w-3xl px-4 pt-8 text-slate-900 xs:px-6 sm:px-8 md:pt-16">
      <Gradients />
      <section className="text-lg">
        <h1 className="text-4xl font-semibold tracking-tight">
          {"Freeman Jiang"}
        </h1>
        <p className="mt-3 max-w-xl">
          {"Computer Science @ University of Waterloo"}
        </p>
        <p className="mt-2 max-w-xl md:mt-0">
          {"I build beautiful and performant applications end to end."}
        </p>
        <p className="mt-2">
          {"I also "}
          <a
            href="https://photos.freemanjiang.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="cursor-pointer font-semibold underline decoration-pink-400 decoration-2 transition-all hover:decoration-pink-600">
              take photos
            </span>
          </a>
          {" and "}
          <a
            href="https://www.youtube.com/watch?v=fppsP2cZjGg"
            target="_blank"
            rel="noreferrer"
          >
            <span className="cursor-pointer font-semibold underline decoration-emerald-300 decoration-2 transition-all hover:decoration-emerald-500">
              make music
            </span>
          </a>
          .
        </p>
        <p className="mt-4">
          {"I like working with:"}
          <br />
          <span className="font-bold text-orange-600">Rust</span>,
          <span className="font-bold text-sky-500"> Go</span>,
          <span className="font-bold text-blue-500"> TypeScript</span>,
          <span className="font-bold text-slate-900"> Next.js</span>.
        </p>
      </section>
      <div className="flex flex-col md:flex-row md:gap-12">
        <Positions positions={positions} />
      </div>
      <section className="mt-12">
        <h2 className="text-3xl font-semibold tracking-tight">Work</h2>
        <div className="mt-4 flex flex-col gap-6">
          {projects.map((project) => (
            <Project
              key={project.sys.id}
              {...(project.fields as IProjectFields)}
            />
          ))}
        </div>
      </section>

      <section className="mt-12 mb-32">
        <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
        <div className="mt-2 text-lg text-slate-700">
          <p>Want to get in touch?</p>
          <p className="mt-1">
            Send an email to{" "}
            <a
              className="font-medium decoration-blue-400 decoration-2 underline-offset-2 outline-none hover:underline focus:underline"
              href="mailto:hello@freemanjiang.com"
            >
              hello@freemanjiang.com
            </a>{" "}
            or shoot me a{" "}
            <a
              className="font-medium decoration-cyan-400 decoration-2 underline-offset-2 outline-none hover:underline focus:underline"
              href="https://twitter.com/freemanjiangg"
              target="_blank"
              rel="noreferrer"
            >
              DM on Twitter
            </a>
            .
          </p>
        </div>
      </section>

      <footer className="flex justify-center mb-8">
        <div className="flex items-center gap-2">
          <a
            className="rotate-180"
            href={`https://cs.uwatering.com/#${HOME_URL}?nav=prev`}
          >
            ➵
          </a>
          <a
            href={`https://cs.uwatering.com/#${HOME_URL}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cs.uwatering.com/icon.black.svg"
              alt="CS Webring"
              className="w-6 h-auto opacity-80"
            />
          </a>
          <a href={`https://cs.uwatering.com/#${HOME_URL}?nav=next`}>➵</a>
        </div>
      </footer>
    </main>
  );
};

export default Home;
