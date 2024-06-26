import SectionHeading from "../section-heading";
import WcrWrapper from "./WcrWrapper";
import { WHYCHOOSEUSPOINTS } from "./constants";

export default function WhyChooseRicoz() {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 bg-rz-lightblue border-y text-black py-16 lg:px-40 md:px-24 sm:px-16 px-8">
      <div className="sm:p-0 p-2"> <img src="whychooseus1.png" alt="" /></div>
      <div>
        <div className="my-12">
        <SectionHeading title="Why choose Ricoz" justifyStart/>

        </div>
        {WHYCHOOSEUSPOINTS.map((point, i) => (
          <WcrWrapper
            withBorder={i<WHYCHOOSEUSPOINTS.length-1}
            key={`WHYCHOOSEUS_${i}`}
            number={i + 1}
            subtitle={point.subtitle}
            title={point.title}
          />
        ))}
      </div>
    </div>
  );
}
