export type Errors = {
  errors: []
}

export type PreviousStateSignUpProps = {
  username?: string;
  password?: string;
  success: boolean;
  properties?: {
    username?: Errors
    password?: Errors
  }
}