'use client'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import axios from 'axios'
import { Property } from '@/lib/constant'
import PropertyPage from '@/components/global/Properties/PropertyPage'

interface Props {
  params: {
    id: string
  }
}
const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL

const Page = ({ params }: Props) => {
  const FetchProperty = async() => {
    const response = await axios(`${baseUrl}/properties/${params.id}`)
    return response.data
  }
  const {data:property, isLoading, isError} = useQuery<Property>({
    queryKey: ['property', params.id],
    queryFn: FetchProperty
  })
  return (
    <div>
      {
        !property ?
        (
          <div className='flex items-center justify-center min-h-screen'>
            Property Does not exist with the id {params.id}
          </div>
        ) :
        (
          <div>
            <PropertyPage {...property}/>
          </div>
        )
      }
    </div>
  )
}

export default Page
