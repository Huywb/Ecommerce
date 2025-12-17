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

export const TotalBarData = [
  {
    name: new Date(Date.now()).getMonth()-4,
    Total: 3000,
    Successfull: 1398,
  },
  {
    name: new Date(Date.now()).getMonth()-3,
    Total: 2000,
    Successfull: 9800,
  },
  {
    name: new Date(Date.now()).getMonth()-2,
    Total: 2780,
    Successfull: 3908,
  },
  {
    name: new Date(Date.now()).getMonth()-1,
    Total: 1890,
    Successfull: 4800,
  },
  {
    name: new Date(Date.now()).getMonth(),
    Total: 2390,
    Successfull: 3800,
  },
  {
    name: new Date(Date.now()).getMonth()+1,
    Total: 3490,
    Successfull: 4300,
  },
];

export const CircleData = [
  { name: 'Tiktok', value: 400 ,fill: '#0088FE'},
  { name: 'Facebook', value: 300 , fill: '#00C49F'},
  { name: 'Youtube', value: 300 , fill: '#FFBB28' },
  { name: 'Shoppe', value: 200, fill: '#FF8042' },
  { name: 'Lazada', value: 278, fill: '#651fff' },
];
