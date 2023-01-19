
import React from 'react'

type Props = {
  Department : [Category],
  handlesSetSlug : any
}

type Category = {
  id: number,
  name : string,
  slug : string
}

function DepartmentGroup({Department, handlesSetSlug}: Props) {
  console.log("Department", Department)
  const onHndlesSetSlug = (event : any) => {
    handlesSetSlug(`${event.target.value}/$\{term\}&map=ft}`)
  }
  const DepartmentOptions:any = Department.map((department: Category) => {
    return (
      <option value={department.slug}
      key={department.id}
      >
        {department.name}
      </option>
    )
  })
  return (
    <select
    defaultValue="value0"
    onChange={onHndlesSetSlug}
    >
      <option value="value0">Seleccione una opción</option>
      {DepartmentOptions}
    </select>
  )
}

export default DepartmentGroup