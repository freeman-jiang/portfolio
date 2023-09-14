import { Position } from "@/components/Position";
import { IPosition, IPositionListFields } from "@/types/generated/contentful";
import { chunkArray } from "@/utils/utils";

interface Props {
  positions: IPositionListFields;
}

export const Positions = ({ positions }: Props) => {
  const renderRow = ([p1, p2]: IPosition[]) => {
    return (
      <div
        className="flex flex-col gap-4 md:flex-row md:gap-0"
        key={`${p1.fields.companyUrl}-${p2.fields.companyUrl}`}
      >
        <section className="md:w-1/2">
          <Position key={p1.fields.companyUrl} {...p1.fields} />
        </section>
        <div className="hidden px-3.5 md:block"></div>
        <section className="md:w-1/2">
          <Position key={p2.fields.companyUrl} {...p2.fields} />
        </section>
      </div>
    );
  };

  const { pastPositions, currentPositions } = positions;

  if (!currentPositions) {
    // Chunk past positions into groups of 2 for 2 column layout
    const pairs = chunkArray(pastPositions, 2);

    return (
      <div className="mt-12">
        <h2 className="text-3xl font-semibold">Past</h2>
        <div className="mt-4 flex flex-col gap-4">{pairs.map(renderRow)}</div>
      </div>
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
