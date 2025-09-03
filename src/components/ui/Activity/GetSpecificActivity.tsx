import {GetSpecificActivityType} from "@/types/ActivitiesType";
import Link from "next/link";
import "@/styles/components/activities/register.sass"

export const GetSpecificActivity = ({activity}: GetSpecificActivityType) => {
  return (
      <>
        <div className={"activity-register"} style={{
          backgroundImage: `url(${activity.asset.url})`,
        }}>
          <Link className={"activity-register__button"} href={"/login"}>Tilmeld</Link>
        </div>
        <section className={"register-section"}>
          <h2 className={"register-section__title"}>{activity.name}</h2>
          <p className={"register-section__age"}>{activity.minAge}-{activity.maxAge} år</p>
          <p className={"register-section__description"}>{activity.description}</p>
        </section>
      </>
  );
};