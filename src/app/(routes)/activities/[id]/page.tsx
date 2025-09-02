import {GetSpecificActivity} from "@/components/ui/GetSpecificActivity";
import {MdError} from "react-icons/md";
import {NavBar} from "@/components/ui/NavBar";
import {ErrorMessage} from "@/components/error-ui/ErrorMessage";


interface ParamsProps {
  params: Promise<{ id: string }>
}

export default async function ActivitiesPage({params}: ParamsProps) {

  try {
    const {id} = await params;
    const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`)
    const data = await response.json()
    return (
        <>
          <GetSpecificActivity activity={data}></GetSpecificActivity>
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