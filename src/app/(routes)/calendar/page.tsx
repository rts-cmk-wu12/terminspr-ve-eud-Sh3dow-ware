import {getUser} from "@/app/utils/apiUtils";
import {UserProps} from "@/types/UserType";


const CalendarPage = async () => {
  const user: UserProps = await getUser()

  // To be added default, shows default screens, eh instructor role shows something else.
  if (user.role === "default") {
    return (
        <>
          <h2>Kalendar</h2>
          <p>Hejsa Default</p>
        </>
    )
  }
  return (
      <>
        {user.activities.map((item => {
          return (
              <h2>{item.name}</h2>
          )
        }))}
      </>
  )
};


export default CalendarPage
