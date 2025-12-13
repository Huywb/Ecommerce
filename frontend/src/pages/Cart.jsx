import { useState } from "react"
import CartDetails from "../components/CartDetails"
import CartProduct from "../components/CartProduct"
import StatusCart from "../components/StatusCart"

const Cart = () => {
    const [status,setStatus] = useState(1)
    const handleChangeStatus = (value)=>{
        setStatus(value)
    }
    console.log(status)
  return (
    <div className="flex flex-col items-center justify-center">
        <StatusCart status={status}/>
        <div className="flex gap-10 w-[80%]">
            <section className="flex w-3/5">
                <CartProduct />
            </section>
            <section className="flex w-2/5 h-fit">
                <CartDetails handleChangeStatus={handleChangeStatus}/>
            </section>
        </div>
    </div>
  )
}

export default Cart
