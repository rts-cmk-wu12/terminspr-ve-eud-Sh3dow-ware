'use client'

import {getUser} from "@/app/utils/ApiUtils";
import {UserProps} from "@/types/UserType";
import {useEffect, useState} from "react";
import {ErrorMessage} from "@/components/error-ui/ErrorMessage";
import Link from "next/link";
import {FirstLetterToUppercase} from "@/app/utils/FirstLetterToUppercase";
import "@/styles/components/calendar/calendar.sass"
export const Calendar = () => {
  const [data, setData] = useState<UserProps>()

  useEffect(() => {
    async function getUserInformation() {
      const data = await getUser() as UserProps
      setData(data)
    }
    getUserInformation()

  }, []);

  console.log(data)
  if (data?.success) {
    return (
        <>
          <section>
            <ErrorMessage error_message={"Dit Access Token er ugyldigt. Du skal desværre logge ind igen."}>
              <Link className={"error-activity__link"} href={"/login"}>Navigere til Login</Link>
            </ErrorMessage>
          </section>
        </>
    )
  }

  if (data?.role === "default") {
    return (
        <>
          {data?.activities.map((item => {
            return (
                <section className={"calendar-default"} key={item.id}>
                  <h2 className={"calendar-default__title"}>{item.name}</h2>
                  <div className={"calendar-default__info"}>
                    <p className={"calendar-default__weekday"}>{FirstLetterToUppercase(item.weekday)}</p>
                    <p className={"calendar-default__time"}>{item.time}</p>
                  </div>
                </section>
            )
          }))}
        </>
    )
  }
  return (
      <>
       <h2> Hej Instructor</h2>
      </>
  )
};