import { Position } from "@/components/Position";
import {
  IPosition,
  IPositionFields,
  IPositionListFields,
} from "@/types/generated/contentful";
import { chunkArray } from "@/utils/utils";

interface Props {
  positions: IPositionListFields;
}

export const Positions = ({ positions }: Props) => {
  const renderRow = (positions: IPosition[]) => {
    const p1Fields = positions[0].fields as IPositionFields;
    const p2Fields = positions[1]?.fields as IPositionFields | undefined;
    return (
      <div
        className="flex flex-col gap-4 md:flex-row md:gap-0"
        key={
          p2Fields
            ? `${p1Fields.companyUrl}-${p2Fields.companyUrl}`
            : p1Fields.companyUrl
        }
      >
        <section className="md:w-1/2">
          <Position key={p1Fields.companyUrl} {...p1Fields} />
        </section>
        {p2Fields && (
          <>
            <div className="hidden px-3.5 md:block"></div>
            <section className="md:w-1/2">
              <Position key={p2Fields.companyUrl} {...p2Fields} />
            </section>
          </>
        )}
      </div>
    );
  };

  const { pastPositions, currentPositions } = positions;

  // Chunk past positions into groups of 2 for 2 column layout
  const currentPairs = currentPositions ? chunkArray(currentPositions, 2) : [];
  const pastPairs = chunkArray(pastPositions, 2);

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-semibold tracking-tight">Now</h2>
      <div className="mt-4 flex flex-col gap-4">
        {currentPairs.map(renderRow)}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight mt-8">Past</h2>
      <div className="mt-4 flex flex-col gap-4">{pastPairs.map(renderRow)}</div>
    </div>
  );
};
