# Documentation

---

## 🔨 Tech Stack
**• Framework:** NextJS  
**• Styling:** Sass(.sass)  
**• Language:** Typescript


### Kode Eksempel:
```tsx
'use server'
import {PreviousStateSignUpProps} from "@/types/ActionType";
import z from "zod"
import {cookies} from "next/headers";
import { redirect } from 'next/navigation';



export async function loginAction(_prevstate: PreviousStateSignUpProps, formData: FormData): Promise<PreviousStateSignUpProps> {


  const VerifyUserCookie = await cookies()
  const VerifyAccessCookie = VerifyUserCookie.get("access_token")?.value

  if (VerifyAccessCookie){
    redirect("/activities")
  }

  const username = formData.get("username") as string
  const password = formData.get("password") as string

  const validationSchema = z.object({
    username: z.string().min(3, {error: "Du skal udfylde brugernavn"}).max(50, {error: "Du har brugt for mange karaktere"}),
    password: z.string().min(3, {error: "Du skal udfylde password"}).max(50, {error: "Du har brugt for mange karaktere"})
  })


  const validated = validationSchema.safeParse({
    username,
    password
  })


  if (!validated.success) {
    return {
      ...validated,
      ...(z.treeifyError((validated.error)))
    }
  }

  try {
    const response = await fetch("http://localhost:4000/auth/token", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        username: validated.data.username,
        password: validated.data.password
      })
    })



    const data = await response.json()
    const CookieStore = await cookies()

    CookieStore.set({
      name: "access_token",
      value: data.token,
      maxAge: data.validUntil
    })

    CookieStore.set({
      name: "userID",
      value: data.userId,
      maxAge: data.validUntil
    })

    CookieStore.set({
      name: "role",
      value: data.role,
      maxAge: data.validUntil
    })

    return {
      success: true,
    }

  } catch (error) {
    return {
      success: false,
      message: "Brugernavnet eller adgangskoden eksiterer ikke."
    }
  }
}
```


### Foklaring
LoginAction tager mod to argumenter;
LoginAction Verificer, hvis cookien alleredde ekisitere, og fører dig vidre til activities.
Hvis ikke, så validere den selve username, password med zod.

Derefter kalder den et api, hvor man får et access_token, role, userid som jeg sætter i et try catch, hvis der skal ske fejl.