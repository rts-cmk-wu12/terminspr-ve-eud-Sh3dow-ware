export type Errors = {
  errors: string[]
}

export type PreviousStateSignUpProps = {
  username?: string;
  password?: string;
  success?: boolean;
  properties?: {
    username?: Errors
    password?: Errors
  }
}