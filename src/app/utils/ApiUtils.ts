'use server'

import {cookies} from "next/headers";
import {getUserProps} from "@/types/UserType";
import {InstructorType} from "@/types/InstructorType";

export async function getUser(): Promise<getUserProps> {
  const CookieStore = await cookies()
  const ACCESS_TOKEN = CookieStore.get("access_token")?.value
  const USER_ID = CookieStore.get("userID")?.value
  const ROLE = CookieStore.get("role")?.value
  if (!ACCESS_TOKEN || !USER_ID) return {
    message: "No access token or userid"
  }


  try {
    if (ROLE === "default") {
      const response: Response = await fetch(`http://localhost:4000/api/v1/users/${USER_ID}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        }
      })

      const data = await response.json()
      return data
    } else {

      const whereInstructorIsFound: number[] = []
      const activitiesResponse = await fetch("http://localhost:4000/api/v1/activities", {
        method: "GET"
      });

      const activitiesData = await activitiesResponse.json()

      activitiesData.forEach((item: InstructorType) => {
        if (item.instructorId === Number(USER_ID)){
          whereInstructorIsFound.push(item.id)
        }
      })

      const response= await fetch(`http://localhost:4000/api/v1/users/${USER_ID}/roster/${String(whereInstructorIsFound[0])}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        }
      })

    const data =  await response.json()
    return data
    }
  } catch (e) {
    return {
      success: false,
    }
  }
}