import {Activities} from "@/components/ui/Activities";
import {ActivitiesProps} from "@/types/ActivitiesType";

export default async function ActivitiesPage() {

  const response = await fetch("http://localhost:4000/api/v1/activities")
  const data = await response.json()

  return (
      <>
        <h1 className={"title-activity"}>Aktiviteter</h1>
        <main className={"main-activities"}>
          {
            data.map((item: ActivitiesProps) => (
                <Activities key={item.id} name={item.name} minAge={item.minAge} maxAge={item.maxAge}
                            description={item.description} weekday={item.weekday} time={item.time} asset={item.asset} id={item.id}/>
            ))
          }
        </main>
      </>
  );
}
