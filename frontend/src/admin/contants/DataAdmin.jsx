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
        url: '/admin/products',
        type: '#'
    },
    {
        name: 'Add Product',
        icon: <FaPlus />,
        url : '#',
        type: 'product'
    },
    {
        name: 'Add Category',
        icon: <FaPlus />,
        url : '#',
        type: 'category'
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

export const UsersAdmin = [
  {
    id: 1,
    name: 'Huy Pham',
    email: 'HuyPham@example.com',
    role: 'Admin',
    avatar: 'https://picsum.photos/id/1012/300/300',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Hang Pham',
    email: 'HangPham@example.com',
    role: 'User',
    avatar: 'https://picsum.photos/id/1013/300/300',
    status: 'Inactive', 
  },
  {
    id: 3,
    name: 'Tuan Nguyen',
    email: 'TuanNguyen@example.com',
    role: 'User',
    avatar: 'https://picsum.photos/id/1014/300/300',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Thy Pham',
    email: 'ThyPham@example.com',
    role: 'User',
    avatar: 'https://picsum.photos/id/1015/300/300',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Ngoc Ho',
    email: 'NgocHo@example.com',
    role: 'User',
    avatar: 'https://picsum.photos/id/1016/300/300',
    status: 'Inactive', 
  },
  {
    id: 6,
    name: 'Minh Le',
    email: 'MinhLe@example.com',
    role: 'Admin',
    avatar: 'https://picsum.photos/id/1018/300/300',
    status: 'Active', 
  },
  {
    id: 7,
    name: 'Lan Tran',
    email: 'LanTran@example.com', 
    role: 'User',
    avatar: 'https://picsum.photos/id/1020/300/300',
    status: 'Active',
  },
  {
    id: 8,
    name: 'Quang Vu',
    email: 'QuangVu@example.com',
    role: 'User',
    avatar: 'https://picsum.photos/id/1024/300/300',
    status: 'Inactive', 
  },
  {
    id: 9,
    name: 'Ha Pham',
    email: 'HaPham@example.com',
    role: 'User',
    avatar: 'https://picsum.photos/id/1025/300/300',
    status: 'Active',
  },
  {
    id: 10,
    name: 'Duc Nguyen',
    email: 'DucNguyen@example.com', 
    role: 'User',
    avatar: 'https://picsum.photos/id/1027/300/300',
    status: 'Active',
  },
  {
    id: 11,
    name: 'Phuc Le',
    email: 'PhucLe@example.com',
    role: 'User',
    avatar: 'https://picsum.photos/id/1028/300/300',
    status: 'Active',
  },
  {
    id: 12,
    name: 'My Tran',
    email: 'MyTran@example.com',
    role: 'User',
    avatar: 'https://picsum.photos/id/1029/300/300',
    status: 'Active',
  },
  {
    id: 13,
    name: 'Khanh Hoang',
    email: 'KhanhHoang@example.com',
    role: 'User',
    avatar: 'https://picsum.photos/id/1030/300/300',
    status: 'Active',
  },
  {
    id: 14,
    name: 'Vy Pham',
    email: 'VyPham@example.com',
    role: 'User',
    avatar: 'https://picsum.photos/id/1031/300/300',
    status: 'Active',
  },
  {
    id: 15,
    name: 'Long Bui',
    email: 'LongBui@example.com',
    role: 'User',
    avatar: 'https://picsum.photos/id/1032/300/300',
    status: 'Active',
  },
  {
    id: 16,
    name: 'Diep Nguyen',
    email: 'DiepNguyen@example.com',
    role: 'User',
    avatar: 'https://picsum.photos/id/1033/300/300',
    status: 'Active',
  }
];

export const ProductsAdmin = [
  {
    id: 1,
    name: 'Basic Cotton T-shirt',
    category: 'T-shirt',
    price: 19.99,
    stock: 120,
    image: 'https://picsum.photos/id/1011/300/300',
    discount: 0,
    newArrival: true,
    description: 'Soft cotton T-shirt with breathable fabric, suitable for daily casual wear.',
  },
  {
    id: 2,
    name: 'Oversized Street T-shirt',
    category: 'T-shirt',
    price: 24.99,
    stock: 80,
    image: 'https://picsum.photos/id/1012/300/300',
    discount: 10,
    newArrival: false,
    description: 'Modern oversized T-shirt with street style design, comfortable and trendy.',
  },
  {
    id: 3,
    name: 'Premium White Sneakers',
    category: 'Shoes',
    price: 59.99,
    stock: 60,
    image: 'https://picsum.photos/id/1013/300/300',
    discount: 15,
    newArrival: true,
    description: 'Premium white sneakers with cushioned sole, perfect for everyday walking.',
  },
  {
    id: 4,
    name: 'Running Sport Shoes',
    category: 'Shoes',
    price: 79.99,
    stock: 40,
    image: 'https://picsum.photos/id/1014/300/300',
    discount: 0,
    newArrival: false,
    description: 'Lightweight running shoes designed for maximum comfort and performance.',
  },
  {
    id: 5,
    name: 'Classic Leather Belt',
    category: 'Accessories',
    price: 14.99,
    stock: 200,
    image: 'https://picsum.photos/id/1015/300/300',
    discount: 5,
    newArrival: false,
    description: 'Classic leather belt suitable for both casual and formal outfits.',
  },
  {
    id: 6,
    name: 'Stylish Sunglasses',
    category: 'Accessories',
    price: 29.99,
    stock: 90,
    image: 'https://picsum.photos/id/1016/300/300',
    discount: 0,
    newArrival: true,
    description: 'UV-protected stylish sunglasses with modern frame design.',
  },
  {
    id: 7,
    name: 'Minimal Backpack',
    category: 'Bags',
    price: 49.99,
    stock: 70,
    image: 'https://picsum.photos/id/1018/300/300',
    discount: 10,
    newArrival: true,
    description: 'Minimalist backpack with spacious compartments for daily commuting.',
  },
  {
    id: 8,
    name: 'Travel Shoulder Bag',
    category: 'Bags',
    price: 39.99,
    stock: 65,
    image: 'https://picsum.photos/id/1019/300/300',
    discount: 0,
    newArrival: false,
    description: 'Compact shoulder bag ideal for travel and outdoor activities.',
  },
  {
    id: 9,
    name: 'Elegant Summer Dress',
    category: 'Dresses',
    price: 69.99,
    stock: 30,
    image: 'https://picsum.photos/id/1020/300/300',
    discount: 20,
    newArrival: true,
    description: 'Elegant summer dress with lightweight fabric and flattering fit.',
  },
  {
    id: 10,
    name: 'Floral Casual Dress',
    category: 'Dresses',
    price: 59.99,
    stock: 45,
    image: 'https://picsum.photos/id/1021/300/300',
    discount: 0,
    newArrival: false,
    description: 'Casual floral dress perfect for outdoor events and daily wear.',
  },
  {
    id: 11,
    name: 'Denim Jacket',
    category: 'Jackets',
    price: 89.99,
    stock: 35,
    image: 'https://picsum.photos/id/1022/300/300',
    discount: 15,
    newArrival: true,
    description: 'Classic denim jacket with durable material and timeless style.',
  },
  {
    id: 12,
    name: 'Winter Puffer Jacket',
    category: 'Jackets',
    price: 129.99,
    stock: 25,
    image: 'https://picsum.photos/id/1023/300/300',
    discount: 0,
    newArrival: false,
    description: 'Warm winter puffer jacket with insulated padding for cold weather.',
  },
  {
    id: 13,
    name: 'Leather Gloves',
    category: 'Gloves',
    price: 24.99,
    stock: 110,
    image: 'https://picsum.photos/id/1024/300/300',
    discount: 0,
    newArrival: true,
    description: 'High-quality leather gloves offering warmth and elegant appearance.',
  },
  {
    id: 14,
    name: 'Winter Wool Gloves',
    category: 'Gloves',
    price: 19.99,
    stock: 150,
    image: 'https://picsum.photos/id/1025/300/300',
    discount: 5,
    newArrival: false,
    description: 'Soft wool gloves designed to keep hands warm during winter.',
  },
  {
    id: 15,
    name: 'Graphic Print T-shirt',
    category: 'T-shirt',
    price: 22.99,
    stock: 95,
    image: 'https://picsum.photos/id/1026/300/300',
    discount: 0,
    newArrival: true,
    description: 'Graphic print T-shirt with modern artwork and premium cotton fabric.',
  },
  {
    id: 16,
    name: 'Casual Slip-on Shoes',
    category: 'Shoes',
    price: 54.99,
    stock: 55,
    image: 'https://picsum.photos/id/1027/300/300',
    discount: 10,
    newArrival: false,
    description: 'Easy-to-wear slip-on shoes with flexible sole for daily comfort.',
  },
  {
    id: 17,
    name: 'Small Crossbody Bag',
    category: 'Bags',
    price: 34.99,
    stock: 75,
    image: 'https://picsum.photos/id/1028/300/300',
    discount: 0,
    newArrival: true,
    description: 'Small crossbody bag suitable for essentials and casual outings.',
  },
  {
    id: 18,
    name: 'Luxury Evening Dress',
    category: 'Dresses',
    price: 149.99,
    stock: 15,
    image: 'https://picsum.photos/id/1029/300/300',
    discount: 20,
    newArrival: true,
    description: 'Luxury evening dress with elegant design for special occasions.',
  },
  {
    id: 19,
    name: 'Lightweight Windbreaker',
    category: 'Jackets',
    price: 74.99,
    stock: 50,
    image: 'https://picsum.photos/id/1030/300/300',
    discount: 0,
    newArrival: false,
    description: 'Lightweight windbreaker jacket suitable for outdoor activities.',
  },
  {
    id: 20,
    name: 'Sport Training Gloves',
    category: 'Gloves',
    price: 17.99,
    stock: 130,
    image: 'https://picsum.photos/id/1031/300/300',
    discount: 0,
    newArrival: true,
    description: 'Sport gloves designed for training and gym workouts.',
  },
]
