'use server'

import {cookies} from "next/headers";


export async function getUser() {
  const CookieStore = await cookies()
  const ACCESS_TOKEN = CookieStore.get("access_token")?.value
  const USER_ID = CookieStore.get("userID")?.value

  if (!ACCESS_TOKEN || !USER_ID) return {
    message: "No access token or userid"
  }
  // if response does not return valid json then =>  success should be false and return a form of error message.
  const response = await fetch(`http://localhost:4000/api/v1/users/${USER_ID}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    }
  })
  return response.json()
}