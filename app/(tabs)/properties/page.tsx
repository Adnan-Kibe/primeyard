'use client'

import PropertiesCard from '@/components/global/Properties/PropertiesCard'
import { Property } from '@/lib/constant'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL

const page = () => {
  const FetchProperties = async() => {
    const response = await axios(`${baseUrl}/properties`)
    return response.data
  }

  const {data:properties, isLoading, isError} = useQuery<Property[]>({
    queryKey: ['properties'],
    queryFn: FetchProperties
  })
  return (
    <div>
      <PropertiesCard {...properties}/>
    </div>
  )
}

export default page