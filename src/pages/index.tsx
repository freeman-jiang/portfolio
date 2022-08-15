import { client } from "@/contentful/client";
import {
  IPositionListFields,
  IProjectListFields,
} from "@/types/generated/contentful";
import { InferGetStaticPropsType, NextPage } from "next";
import { Position } from "@/components/Position";
import { Project } from "@/components/Project";

export const getStaticProps = async () => {
  const getPositionList = client.getEntry<IPositionListFields>(
    "2GrZxy0No7mWazsNhou3Ez"
  );

  const getProjectList = client.getEntry<IProjectListFields>(
    "6G0lD5lWI23RDAWE9XrU3G"
  );

  const [positionList, projectList] = await Promise.all([
    getPositionList,
    getProjectList,
  ]);

  const { currentPositions } = positionList.fields;
  const { pastPositions } = positionList.fields;
  const { projects } = projectList.fields;

  return {
    props: { currentPositions, pastPositions, projects },
    revalidate: 10,
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  currentPositions,
  pastPositions,
  projects,
}) => {
  return (
    <main className="mx-auto max-w-3xl px-4 pt-8 text-slate-900 xs:px-6 sm:px-8 md:pt-16">
      <section>
        <h1 className="text-4xl font-semibold">{"Hi, I'm Freeman."}</h1>
        <p className="mt-2 max-w-lg">
          {
            "I'm a CS student at the University of Waterloo and full stack engineer."
          }
        </p>
        <p className="mt-2 max-w-lg md:mt-0">
          {"I build beautiful and performant applications end to end."}
        </p>
        <p className="mt-4">
          {"My weapons of choice are: "}
          <br />
          <span className="font-bold text-blue-400">TypeScript</span> +{" "}
          <span className="font-bold text-slate-900">Next.js</span> +{" "}
          <span className="font-bold text-purple-400">Prisma</span> +{" "}
          <span className="font-bold text-pink-400">GraphQL</span>
        </p>
      </section>
      <div className="flex flex-col md:flex-row md:gap-12">
        <section className="mt-12 md:w-1/2">
          <h2 className="text-3xl font-semibold">Currently</h2>
          <div className="mt-4 flex flex-col gap-4">
            {currentPositions?.map((position) => (
              <Position key={position.sys.id} {...position.fields} />
            ))}
          </div>
        </section>
        <section className="mt-12 md:w-1/2">
          <h2 className="text-3xl font-semibold">Past</h2>
          <div className="mt-4 flex flex-col gap-4">
            {pastPositions?.map((position) => (
              <Position key={position.sys.id} {...position.fields} />
            ))}
          </div>
        </section>
      </div>
      <section className="mt-12">
        <h2 className="text-3xl font-semibold">Work</h2>
        <div className="mt-4 flex flex-col gap-6">
          {projects.map((project) => (
            <Project key={project.sys.id} {...project.fields} />
          ))}
        </div>
      </section>

      <section className="mt-12 mb-32">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <div className="mt-2 text-slate-700">
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
              href="https://twitter.com/freemanxjiang"
              target="_blank"
              rel="noreferrer"
            >
              DM on Twitter
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
