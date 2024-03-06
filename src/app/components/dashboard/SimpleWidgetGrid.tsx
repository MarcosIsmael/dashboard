'use client'
import { SimpleWidget } from '..'
import { IoCartOutline } from 'react-icons/io5'
import { useAppSelector } from '@/store'

export const SimpleWidgetGrid = () => {
    const count = useAppSelector(state => state.counter.count)


  return (
    <div className='flex flex-wrap p-2 items-center justify-center'>
    <SimpleWidget 
    subTitle='Carrito de compras' 
    title={count} 
     href='/dashboard/counter' 
    // icon={<IoCartOutline size={50} className="text-blue-600"/>} 
    // label='Contador'
     />
  </div>
  )
}
