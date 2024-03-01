import { CounterCart } from "@/app/shopping-cart/components";



export const metadata ={
  title: 'Sopping cart',
  description:'Un simple contador'
}


export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CounterCart value={20}/>
    </div>
  );
}