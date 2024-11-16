import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import React from 'react'
import CardCarousel from './CardCarousel'
import { Property } from '@/lib/constant'
import { useRouter } from 'next/navigation'
import AnimatedButton from '@/components/custom/AnimatedButton'

const PropertiesCard = ({ id, title, description, price, images }: Property) => {
    const router = useRouter()
    const handleClick = () => {
        router.push(`/properties/${id}`)
    }

    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <Card className="relative">
                {/* Card Header with Carousel */}
                <CardHeader className="relative">
                    <CardCarousel images={images} />
                </CardHeader>
                
                {/* Card Content */}
                <CardContent className="p-4">
                    <div className="text-xl font-semibold text-gray-800 truncate">{title}</div>
                    <CardDescription className="text-sm text-gray-600 mt-2">
                        {description}
                    </CardDescription>
                </CardContent>
                
                {/* Card Footer */}
                <CardFooter className="flex justify-between items-center p-4 bg-gray-100">
                    <div className="text-xl font-semibold text-green-600">{price}</div>
                    <AnimatedButton onclick={handleClick}>
                        View Properity
                    </AnimatedButton>
                </CardFooter>
            </Card>
        </div>
    )
}

export default PropertiesCard
