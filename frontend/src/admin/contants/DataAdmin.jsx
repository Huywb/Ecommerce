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
    name: (new Date(new Date().setMonth(new Date().getMonth() - 5)).toLocaleString('en-US', { month: 'long' })).slice(0,3),
    Total: 3000,
    Successfull: 1398,
  },
  {
    name: (new Date(new Date().setMonth(new Date().getMonth() - 4)).toLocaleString('en-US', { month: 'long' })).slice(0,3),
    Total: 2000,
    Successfull: 9800,
  },
  {
    name: (new Date(new Date().setMonth(new Date().getMonth() - 3)).toLocaleString('en-US', { month: 'long' })).slice(0,3),
    Total: 2780,
    Successfull: 3908,
  },
  {
    name: (new Date(new Date().setMonth(new Date().getMonth() - 2)).toLocaleString('en-US', { month: 'long' })).slice(0,3),
    Total: 1890,
    Successfull: 4800,
  },
  {
    name: (new Date(new Date().setMonth(new Date().getMonth()-1)).toLocaleString('en-US', { month: 'long' })).slice(0,3),
    Total: 2390,
    Successfull: 3800,
  },
  {
    name: (new Date(new Date().setMonth(new Date().getMonth() )).toLocaleString('en-US', { month: 'long' })).slice(0,3),
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

export const TopOrderData = [
  {
    id: 1,
    name: 'Huy Pham',
    image: 'https://picsum.photos/id/1012/300/300',
    totalPrice: 123
  },
  {
    id: 2,
    name: 'Hang Pham',
    image: 'https://picsum.photos/id/1012/300/300',
    totalPrice:234
  },
  {
    id: 3,
    name: 'Tuan Nguyen',
    image: 'https://picsum.photos/id/1012/300/300',
    totalPrice: 444
  },
  {
    id: 4,
    name: 'Thy Pham',
    image: 'https://picsum.photos/id/1012/300/300',
    totalPrice: 111
  },
  {
    id: 5,
    name: 'Ngoc Ho',
    image: 'https://picsum.photos/id/1012/300/300',
    totalPrice: 123
  }
]

export const TodoListData = [
  {
    id: 1,
    description: 'Add new clothing products to the catalog',
    status: false,
  },
  {
    id: 2,
    description: 'Update product images for summer collection',
    status: true,
  },
  {
    id: 3,
    description: 'Fix product size and color selection bug',
    status: false,
  },
  {
    id: 4,
    description: 'Improve product filtering by category and price',
    status: true,
  },
  {
    id: 5,
    description: 'Design homepage banner for clothing store',
    status: false,
  },
  {
    id: 6,
    description: 'Optimize product detail page UI',
    status: false,
  },
  {
    id: 7,
    description: 'Implement wishlist feature for clothes',
    status: true,
  },
  {
    id: 8,
    description: 'Add discount labels for sale items',
    status: false,
  },
  {
    id: 9,
    description: 'Test checkout flow for clothing orders',
    status: true,
  },
  {
    id: 10,
    description: 'Prepare content for new fashion collection launch',
    status: false,
  },
]

export const PopularProducts = [
  { id: 1, name: 'Casual Cotton Shirt', image: 'https://picsum.photos/id/1012/300/300', totalPrice: 123 },
  { id: 2, name: 'Slim Fit Denim Pants', image: 'https://picsum.photos/id/1013/300/300', totalPrice: 89 },
  { id: 3, name: 'Running Sports Shoes', image: 'https://picsum.photos/id/1014/300/300', totalPrice: 150 },
  { id: 4, name: 'Stylish Summer Hat', image: 'https://picsum.photos/id/1015/300/300', totalPrice: 45 },
  { id: 5, name: 'Leather Jacket for Men', image: 'https://picsum.photos/id/1016/300/300', totalPrice: 200 },
  { id: 6, name: 'Comfortable Cotton Socks', image: 'https://picsum.photos/id/1018/300/300', totalPrice: 15 },
  { id: 7, name: 'Classic Leather Belt', image: 'https://picsum.photos/id/1020/300/300', totalPrice: 35 },
  { id: 8, name: 'Winter Warm Gloves', image: 'https://picsum.photos/id/1024/300/300', totalPrice: 50 },
  { id: 9, name: 'Cozy Wool Scarf', image: 'https://picsum.photos/id/1025/300/300', totalPrice: 40 },
  { id: 10, name: 'Knitted Wool Sweater', image: 'https://picsum.photos/id/1027/300/300', totalPrice: 120 }
];
