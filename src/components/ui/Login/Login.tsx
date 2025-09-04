'use client'

import {useActionState} from "react";
import {loginAction} from "@/app/action/login";
import "@/styles/components/login/login.sass"

export const Login = () => {

  const [formState, formAction, isPending] = useActionState(loginAction, {})

  return (
      <>
        <div className={"login-wrapper"}>
          <h2 className={"login-wrapper__title"}>Log Ind</h2>
          <form className={"login-form"} action={formAction}>
            <label className={"login-form__label"} htmlFor={"username"}>
              <input className={"login-form__input"} type={"text"} name={"username"} placeholder={"brugernavn"}/>
              {!formState?.success && formState.properties?.username?.errors &&  <p className={"login-form__error"}>{formState.properties?.username?.errors}</p>}
              {!formState?.success && formState.message && <p className={"login-form__error"}>{formState.message}</p>}
            </label>
            <label className={"login-form__label"} htmlFor={"password"}>
              <input className={"login-form__input"} type={"password"} name={"password"} placeholder={"adgangskode"}/>
              {!formState?.success && formState.properties?.password?.errors && <p className={"login-form__error"}>{formState.properties?.password?.errors}</p>}
            </label>
            <button type={"submit"} className={"login-form__submit"}>Log Ind</button>
          </form>
        </div>
      </>
  );
};