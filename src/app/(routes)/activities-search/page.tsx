import {NavBar} from "@/components/ui/Footer/NavBar";
import {Activities} from "@/components/ui/Activity/Activities";
import {ErrorMessage} from "@/components/error-ui/ErrorMessage";
import {ActivitiesProps} from "@/types/ActivitiesType";
import {SearchFilter} from "@/components/ui/Activity/SearchFilter";

const searchActivityPage = async () => {
  try {
    const response = await fetch("http://localhost:4000/api/v1/activities")
    const data = await response.json()
    return (
        <>
          <main className={"main-activities"}>
            <SearchFilter activity={data}></SearchFilter>
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
