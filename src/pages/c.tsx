import { ContactGradients } from "@/components/Gradients";
import { client } from "@/contentful/client";
import { InferGetStaticPropsType } from "next";
import { SVGProps } from "react";

// Manual bc contentful codegen is broken rn

interface List<T> {
  fields: {
    items: Array<{
      fields: T;
    }>;
  };
}

interface Contact {
  text: string;
  link: string;
}

interface Interest {
  name: string;
  link?: string;
}

export const getStaticProps = async () => {
  // @ts-ignore
  const socialList = (await client.getEntry(
    "3BqPOehtSUfmtgGxwZ3HcF",
  )) as List<Contact>;

  // @ts-ignore
  const interestList = (await client.getEntry(
    "2wNYWiybSP4UKI2ldwhw0C",
  )) as List<Interest>;

  return {
    props: {
      socialList,
      interestList,
    },
    revalidate: 10,
  };
};

const ExternalLinkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      shapeRendering="geometricPrecision"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M7 17L17 7M7 7h10v10"></path>
    </svg>
  );
};

const Contact = ({
  socialList,
  interestList,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <main className="flex justify-center selection:bg-emerald-200">
      <ContactGradients />
      <div className="relative min-h-screen max-w-md py-4 w-full px-10 pb-96">
        <div className="text-4xl font-semibold tracking-tighter flex flex-col items-center">
          <h1 className="mt-4 flex">Hey there,</h1>
          <h1>
            I'm{" "}
            <a href="/" className="text-emerald-500 selection:text-emerald-800">
              Freeman
            </a>
            .
          </h1>
        </div>
        <div className="mt-4 text-lg">It's nice to meet you!</div>

        <div className="mt-4 space-y-4">
          {socialList.fields.items.map(({ fields: { link, text } }) => (
            <a
              key={link}
              className="block rounded-xl px-3 py-2 hover:bg-stone-100 border-2 border-stone-200"
              href={link}
              target="_blank"
            >
              <div className="flex justify-center items-center gap-1.5 font-medium text-lg tracking-tight text-stone-900">
                {text}
                <ExternalLinkIcon className="w-3.5 h-3.5 text-stone-700" />
              </div>
            </a>
          ))}
        </div>
        <h3 className="mt-8 text-lg md:text-xl font-semibold tracking-tight">
          Maybe we share some interests <span className="ml-1">🌱</span>
        </h3>
        <ul className="list-disc list-inside mt-1 text-stone-600">
          {interestList.fields.items.map(({ fields: { name, link } }) => (
            <li key={name} className="text-base">
              <a href={link} target="_blank">
                <span
                  className={
                    link &&
                    "underline hover:decoration-emerald-500 decoration-emerald-400 underline-offset-2 decoration decoration-1"
                  }
                >
                  {name}
                </span>
                {link && (
                  <ExternalLinkIcon className="ml-0.5 w-3 h-3 inline -mt-1" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
export default Contact;
