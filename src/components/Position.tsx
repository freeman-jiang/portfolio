import { IPositionFields } from "@/types/generated/contentful";

export const Position = ({
  companyName,
  companyUrl,
  isFounder,
  role,
  description,
}: IPositionFields) => {
  return (
    <div>
      <h4 className="text-xl">
        <span className="font-bold">{role}</span>
        {isFounder ? " of " : " at "}
        <a
          href={companyUrl}
          target="_blank"
          rel="noreferrer"
          className={`font-bold underline decoration-sky-400/50 decoration-2 underline-offset-2 outline-none hover:decoration-sky-400 focus:decoration-sky-500`}
        >
          {companyName}
        </a>
      </h4>
      {description && (
        <p className="mt-1 text-lg text-gray-500">{description}</p>
      )}
    </div>
  );
};
