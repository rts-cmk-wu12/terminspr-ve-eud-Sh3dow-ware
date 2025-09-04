export type UserActivity = {
  name: string;
  minAge: number;
  maxAge: number;
  weekday: string;
  instructorId: number;
  description: string;
  time: string;
  maxParticipants: number;
}

export interface UserProps {
  username: string;
  firstname: string;
  lastname: string;
  age: number;
  role: "default" | "instructor";
  activities: UserActivity[]
}