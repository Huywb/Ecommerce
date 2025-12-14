import { useState } from "react"
import CartDetails from "../components/cart/CartDetails"
import CartProduct from "../components/cart/CartProduct"
import StatusCart from "../components/cart/StatusCart"
import InfoCart from "../components/cart/InfoCart"
import PaymentMethod from "../components/cart/PaymentMethod"

const Cart = () => {
    const [status,setStatus] = useState(1)
    const handleChangeStatus = (value)=>{
        setStatus(value)
    }
  return (
    <div className="flex flex-col items-center justify-center">
        <StatusCart status={status}/>
        <div className="flex gap-10 w-[80%] flex-col md:flex-row ">
            <section className="flex w-full md:w-3/5">
                { status == 1 &&
                    <CartProduct />
                }
                {
                    status == 2  && 
                    <InfoCart handleChangeStatus={handleChangeStatus}/>
                }
                {
                    status == 3 &&
                    <PaymentMethod />
                }
            </section>
            <section className="flex w-full h-fit md:w-2/5">
                <CartDetails handleChangeStatus={handleChangeStatus}/>
            </section>
        </div>
    </div>
  )
}

export default Cart
