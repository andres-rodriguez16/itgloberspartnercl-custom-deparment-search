import React, {useState} from 'react'
import { useQuery } from "react-apollo"
import QUERY_VALUE from "../graphql/getDepartmentGruop.graphql"
import { SearchBar } from "vtex.store-components"
import DepartmentGroup from './DepartmentGroup'

function DepartmentSearch() {
  const { data, loading} = useQuery(QUERY_VALUE)
  const [slug, setSlug] = useState("")
  
  console.log("slug", slug);
  return (
    loading ? 
      <div>loading ....</div>
    :
    <div>
      <DepartmentGroup 
      Department={data?.categories[0].children}
      handlesSetSlug={setSlug}
      />
      <SearchBar
        customSearchPageUrl={slug}
        placeholder="Que buscas hoy"
        displayMode="search-and-clear-buttons"
      />
    </div>
  )
}

export default DepartmentSearch