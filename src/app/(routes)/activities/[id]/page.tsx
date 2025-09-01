import {GetSpecificActivity} from "@/components/ui/GetSpecificActivity";


interface ParamsProps {
  params: Promise<{id: string}>
}

export default async function ActivitiesPage({params}: ParamsProps) {

  const {id} = await params;
  const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`)
  const data = await response.json()

  return (
      <>
        <GetSpecificActivity activity={data}></GetSpecificActivity>
      </>
  );
}