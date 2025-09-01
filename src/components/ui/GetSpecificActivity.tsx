import {GetSpecificActivityType} from "@/types/ActivitiesType";


export const GetSpecificActivity = ({activity}: GetSpecificActivityType) => {
  return (
      <>
        <div style={{
          backgroundImage: `url(${activity.asset.url})`,
          backgroundSize: "Cover",
          backgroundRepeat: "no-repeat"
        }}>
          <p> Hello</p>
        </div>
      </>
  );
};