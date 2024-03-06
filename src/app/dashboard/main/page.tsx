import { SimpleWidget, SimpleWidgetGrid } from '@/app/components'
import React from 'react'


export const metadata = {
  title: 'main dashboard',
  description: 'main dashboard',
};

export default function MainPage() {
  return (
    <div className='text-black p-2'>

      <h1 className='mt-2 text-3xl'> Dashboard</h1>
      <span className='text-xl'> Información general</span>
      <SimpleWidgetGrid />
    </div>
  )
}
