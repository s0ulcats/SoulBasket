'use client'

import { SearchIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { type FormEvent, useState, useCallback } from 'react'
import { Button } from '@/components/ui/common/Button'
import { Input } from '@/components/ui/common/Input'
import { debounce } from 'lodash'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const navigate = (term: string) => {
    if (term.trim()) {
      router.push(`/?searchTerm=${term}`)
    } else {
      router.push('/')
    }
  }

  const debouncedNavigate = useCallback(
    debounce((term: string) => navigate(term), 500),
    [] 
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    debouncedNavigate(e.target.value)
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (searchTerm.trim()) {
      router.push(`/?searchTerm=${searchTerm}`)
    } else {
      router.push('/')
    }
  }

  return (
    <div className='ml-auto lg:block'>
      <form className='relative flex items-center' onSubmit={onSubmit}>
        <Input
          placeholder={'Search...'}
          type='text'
          value={searchTerm}
          onChange={handleChange}
          className='w-full rounded-full pl-4 pr-10 lg:w-[400px]'
        />
        <Button className='absolute right-0.5 h-9' type='submit'>
          <SearchIcon className='absolute size-[18px]' />
        </Button>
      </form>
    </div>
  )
}
