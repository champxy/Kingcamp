'use client'
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "../ui/input"
import { useEffect, useState } from "react"
import {useDebouncedCallback} from 'use-debounce'

const Search = () => {
  const searchParams = useSearchParams()
  const {replace} = useRouter()
  const [search, setSearch] = useState(searchParams.get("search")?.toString() || "")

  const handleSearch =  useDebouncedCallback((value:string)=>{
    const param = new URLSearchParams(searchParams)
    if(value){
      param.set("search",value)
    }else{
      param.delete("search")
    }
    replace(`/?${param.toString()}`)
  },500)

  useEffect(()=>{
    if(!searchParams.get("search")){
      setSearch("")
    }
  },[searchParams.get("search")])

  console.log(searchParams.get("search"))
  return (
    <div>
        <Input
        onChange={(e)=>{setSearch(e.target.value);handleSearch(e.target.value)}}
        placeholder="Search..."
        type="text"
        className="max-w-sm"
        value={search}
        />
    </div>
  )
}
export default Search