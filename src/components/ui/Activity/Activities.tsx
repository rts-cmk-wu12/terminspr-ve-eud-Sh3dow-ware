import {ActivitiesProps} from "@/types/ActivitiesType";
import "@/styles/components/activities/activities.sass"
import {FirstLetterToUppercase} from "@/app/utils/FirstLetterToUppercase";
import Link from "next/link";

export const Activities = ({name, minAge, maxAge, description, weekday, time, asset, id}: ActivitiesProps) => {
  return (
      <>
        <Link className={"activity-section"} href={`activities/${id}`}>
        <section className={"activity-section"} style={{backgroundImage: `url(${asset.url})`, backgroundSize: "Cover", backgroundRepeat: "no-repeat"}}>
          <div className={"activity-section__container"}>
            <h2>{name}</h2>
            <div className={"activity-section__info"}>
              <p>{minAge}-{maxAge} år</p>
              <div>
                <p>{FirstLetterToUppercase(weekday)}</p>
                <p>{time}</p>
              </div>
            </div>
            <p>{description}</p>
          </div>
        </section>
        </Link>
      </>
  );
};