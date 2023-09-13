import { Position } from "@/components/Position";
import { IPositionListFields } from "@/types/generated/contentful";

interface Props {
  positions: IPositionListFields;
}

export const Positions = ({ positions }: Props) => {
  const { pastPositions, currentPositions } = positions;

  if (!currentPositions) {
    return (
      <section className="mt-12 md:w-[45ch]">
        <h2 className="text-3xl font-semibold">Past</h2>
        <div className="mt-4 flex flex-col gap-4">
          {pastPositions?.map((position) => (
            <Position key={position.sys.id} {...position.fields} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="mt-12 md:w-1/2">
        <h2 className="text-3xl font-semibold">Currently</h2>
        <div className="mt-4 flex flex-col gap-4">
          {currentPositions.map((position) => (
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
    </>
  );
};
