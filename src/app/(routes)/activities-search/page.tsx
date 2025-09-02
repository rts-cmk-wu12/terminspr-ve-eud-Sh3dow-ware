import {NavBar} from "@/components/ui/NavBar";
import {Activities} from "@/components/ui/Activities";
import {ErrorMessage} from "@/components/error-ui/ErrorMessage";
import {ActivitiesProps} from "@/types/ActivitiesType";

const searchActivityPage = async () => {
  try {
    const response = await fetch("http://localhost:4000/api/v1/activities")
    const data = await response.json()
    return (
        <>
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
};


export default searchActivityPage
