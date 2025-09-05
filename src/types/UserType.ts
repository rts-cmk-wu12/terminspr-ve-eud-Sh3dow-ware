export type UserActivity = {
  name: string;
  minAge: number;
  maxAge: number;
  weekday: string;
  instructorId: number;
  description: string;
  time: string;
  maxParticipants: number;
  id?: number;
}


export interface getUserProps  {
  success?: boolean
  message?: string
}


export interface UserProps extends  getUserProps {
  username: string;
  firstname: string;
  lastname: string;
  age: number;
  role: "default" | "instructor";
  activities: UserActivity[],
}