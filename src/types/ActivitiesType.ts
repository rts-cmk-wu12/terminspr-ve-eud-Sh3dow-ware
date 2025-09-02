export interface ActivitiesProps {
  id?: number
  name: string;
  minAge: number;
  maxAge: number;
  description: string;
  weekday: string
  time: string
  asset: AssetProps
}

export type AssetProps = {
  id?: number;
  url: string;
  createdAt: string;
  updatedAt: string;
};

export type GetSpecificActivityType = {
  activity: ActivitiesProps
}

export type GetAllActivityType = {
  activity: ActivitiesProps[]
}