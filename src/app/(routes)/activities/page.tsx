import {Activities} from "@/components/ui/Activity/Activities";
import {ActivitiesProps} from "@/types/ActivitiesType";
import { MdError } from "react-icons/md";
import {NavBar} from "@/components/ui/Footer/NavBar";
import {ErrorMessage} from "@/components/error-ui/ErrorMessage";
export default async function ActivitiesPage() {

  try {
    const response = await fetch("http://localhost:4000/api/v1/activities")
    const data = await response.json()
    return (
        <>
          <h1 className={"title-activity"}>Aktiviteter</h1>
          <main className={"main-activities"}>
            {data.map((item: ActivitiesProps) => (
                <Activities key={item.id} name={item.name} minAge={item.minAge} maxAge={item.maxAge}
                            description={item.description} weekday={item.weekday} time={item.time}
                            asset={item.asset} id={item.id}/>
            ))}
          </main>
          <NavBar></NavBar>
        </>
    )
  } catch (e) {
    return (
        <>
          <ErrorMessage></ErrorMessage>
          <NavBar></NavBar>
        </>
    )
  }
}
