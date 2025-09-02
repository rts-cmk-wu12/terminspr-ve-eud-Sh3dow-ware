'use client'

import {ChangeEvent, ChangeEventHandler, useState} from "react";
import {GetAllActivityType} from "@/types/ActivitiesType";

export const SearchFilter = ({activity}: GetAllActivityType) => {

  const [search, setSearch] = useState<string>("")
  const [filteredActivity, setFilteredActivities] = useState(null)

  const handleInput = (e: ChangeEvent) => {
    const searched = (e.target as HTMLInputElement).value
    setSearch(searched)

    const filterItem = activity.filter((activities) =>
        activities.name.toLowerCase().includes(searched.toLowerCase()))

    setFilteredActivities(filterItem)
  }
  return (
      <>
        <search>
          <form>
            <span>Søg</span>
            <input type={"search"} placeholder={""} onChange={handleInput}/>
          </form>
        </search>
      </>
  );
};