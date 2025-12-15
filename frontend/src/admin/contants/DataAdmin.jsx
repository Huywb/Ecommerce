import { IoHomeOutline } from "react-icons/io5";
import { FiInbox } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoShirtOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";

export const Application = [
    {
        name: "Home",
        icon : <IoHomeOutline />,
        url: '/admin'
    },
    {
        name: "Inbox",
        icon : <FiInbox />,
        url: '#'
    },
]

export const test = [
    
    {
        name: "Calender",
        icon : <SlCalender />,
        url: '#'
    },
    {
        name: "Search",
        icon : <FaSearch />,
        url: '#'
    },
    {
        name: "Settings",
        icon : <IoMdSettings />,
        url: '#'
    },
]

export const Product= [
    {
        name: 'See All Products',
        icon: <IoShirtOutline />,
        url: '/admin/products'
    },
    {
        name: 'Add Product',
        icon: <FaPlus />,
        url : '#'
    },
    {
        name: 'Add Category',
        icon: <FaPlus />,
        url : '#'
    }
]

export const User = [
    {
        name: "See All Users",
        icon : <FaRegUser />,
        url : '/admin/users'
    },
    {
        name : "Add User",
        icon : <FaPlus />,
        url : '#'
    }
]

export const Order = [
    {
        name: 'See All Transactions',
        icon : <CiShoppingBasket />,
        url : '/admin/orders'
    }
]