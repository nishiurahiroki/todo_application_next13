'use client'

import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'

export const TodoSearchForm = () => {
  const router = useRouter()

  const [searchTitle, setSearchTitle] = useState('')

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.target.value)
  }

  const handleClickSearch = () => {
    router.push(`/list?searchTitle=${searchTitle}`)
  }

  return (
    <div>
      Search : <input type="text" value={searchTitle} onChange={handleInput} />
      <button onClick={handleClickSearch}>search</button>
    </div>
  )
}