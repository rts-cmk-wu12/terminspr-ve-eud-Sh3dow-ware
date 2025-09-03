'use client'

import {ChangeEvent, useState} from "react";
import {GetAllActivityType} from "@/types/ActivitiesType";
import {Activities} from "@/components/ui/Activity/Activities";
import "@/styles/components/activities/search.sass"
import {MdError} from "react-icons/md";
import {SearchIcon} from "@/app/utils/IconHelper";
export const SearchFilter = ({activity}: GetAllActivityType) => {

  const [search, setSearch] = useState<string>("")

  const handleInput = (e: ChangeEvent) => {
    const searched = (e.target as HTMLInputElement).value
    setSearch(searched)
  }

  let HasResults = false


  return (
      <>
        <search className={"activity-search"}>
          <form className={"search-form"}>
            <span className={"search-form__title"}>Søg</span>
            <span className={"search-form__container"}><input className={"search-form__input"} type={"search"} placeholder={""} onChange={handleInput}/><SearchIcon className={"search-form__icon"}></SearchIcon></span>
          </form>
        </search>
        {
          activity.map((activities => {
            if (search === "") {
              HasResults = true
              return (
                    <Activities key={activities.id} name={activities.name} minAge={activities.minAge} maxAge={activities.maxAge}
                                description={activities.description} weekday={activities.weekday} time={activities.time}
                                asset={activities.asset} id={activities.id}/>
              )
            }
            if (activities.name.toLowerCase().includes(search.toLowerCase())) {
              HasResults = true
              return (
                    <Activities key={activities.id} name={activities.name} minAge={activities.minAge} maxAge={activities.maxAge}
                                description={activities.description} weekday={activities.weekday} time={activities.time}
                                asset={activities.asset} id={activities.id}/>
              )
            }
          }))
        }
        {!HasResults && (
            <section className={"error-search"}>
              <MdError></MdError>
              <h2 className={"error-search__message"}>Kunne ikke finde resultatet.</h2>
            </section>
        )
        }
      </>
  );
};