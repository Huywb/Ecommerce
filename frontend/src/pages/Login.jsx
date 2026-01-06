import { useState } from 'react'
import login from '../../public/login.png'
import register1 from '../../public/register.png'
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useForm } from "react-hook-form"
import { AxiosHttp } from '../libs/BaseAxios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux-toolkit/userSlice';

const Login = () => {
    const [changeMode, setChangeMode] = useState('Login')
    const [hidePass, setHidePass] = useState(false)
    const [hideComfirmPass, setHideComfirmPass] = useState(false)
    const selected = useSelector((state) => state.user)
    const dispatch = useDispatch()

    console.log('data', selected)
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        try {
            if (changeMode == 'Login') {
                const { email, password } = data
                const res = await AxiosHttp.post('/user/login', data)
                if (res.data.status) {
                    const { token, checkUser } = res.data.data

                    dispatch(fetchUser({
                        id: checkUser._id,
                        email: checkUser.email,
                        name: checkUser.name,
                        role: checkUser.role,
                        phone: checkUser.phone,
                        address: checkUser.address,
                        token
                    }))

                    toast.success("Login success")
                } else {
                    toast.error(res.data.data.message)
                }
            } else {
                const res = await AxiosHttp.post('/user/register', data)
                if (res.data.status) {
                    toast.success("Register success")
                } else {
                    toast.error(res.data.data.message)
                }
            }
        } catch (error) {
            console.error(error)
        }

    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex items-center justify-center  gap-4 p-4 '>
            <div className='flex min-w-[80%] gap-10 p-10 border rounded-md border-gray-200 shadow-2xl'>
                <div className={`w-1/2 transition-all duration-300 ${changeMode == "Register" ? "translate-x-full " : 'translate-x-0 '}`}>
                    <img src={`${changeMode == "Login" ? login : register1}`} alt="login image" className='object-cover overflow-hidden' />
                </div>
                <div className={`w-1/2 flex flex-col gap-10 transition-all duration-300 ${changeMode == "Login" ? "translate-x-0 " : '-translate-x-full pr-20'}`}>
                    <h1 className='text-center text-2xl font-bold'>{changeMode == 'Login' ? 'Login' : 'Register'}</h1>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <label>Email : </label>
                            <input {...register("email", { required: true })} required placeholder='Huypham@gmail.com' type="email" className='outline-none border border-gray-300 rounded-md p-2' />
                        </div>
                        <div className='flex flex-col gap-2 relative'>
                            <label>Password : </label>
                            <input {...register("password", { required: true, minLength: 6 })} required placeholder='*******' type={`${hidePass ? 'text' : 'password'}`} className='outline-none border border-gray-300 rounded-md p-2' />
                            <div onClick={() => setHidePass(!hidePass)} className='absolute text-xl right-2 cursor-pointer bottom-0 translate-y-[-50%]'>
                                {
                                    hidePass ? <IoEye ></IoEye> : <IoEyeOff></IoEyeOff>
                                }
                            </div>

                        </div>
                        {
                            changeMode == "Register" && (
                                <div className='flex flex-col gap-2 relative'>
                                    <label>Confirm Password : </label>
                                    <input {...register("confirmPassword", { required: true, minLength: 6 })} required placeholder='*******' type={`${hideComfirmPass ? 'text' : 'password'}`} className='outline-none border border-gray-300 rounded-md p-2' />
                                    <div onClick={() => setHideComfirmPass(!hideComfirmPass)} className='absolute text-xl right-2 cursor-pointer bottom-0 translate-y-[-50%]'>
                                        {
                                            hideComfirmPass ? <IoEye ></IoEye> : <IoEyeOff></IoEyeOff>
                                        }
                                    </div>

                                </div>
                            )
                        }
                        <button type='submit' className=' mt-2 w-full duration-300 transition-all cursor-pointer flex gap-2 items-center justify-center p-2 bg-gray-800 rounded-md hover:bg-gray-900 text-white'>{changeMode == 'Login' ? "Login" : "Register"}</button>
                    </div>
                    <div className='flex items-center justify-center text-gray-600'>
                        {
                            changeMode == "Register" ?
                                <p>Already have an account? <span onClick={() => setChangeMode("Login")} className='text-gray-800 hover:text-gray-950 duration-300 transition-all cursor-pointer'>Login</span></p>
                                :
                                <p>Not have an account? <span onClick={() => setChangeMode("Register")} className='text-gray-800 hover:text-gray-950 duration-300 transition-all cursor-pointer'>Register</span></p>
                        }
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login
