import logo from '../../public/logo.png'
import { FooterList1, FooterList2, FooterList3 } from '../contants/Data'
import FooterList from './FooterList'

const Footer = () => {
  return (
    <footer className='bg-gray-800 rounded-lg my-10 py-4'>
        <div className='flex p-4'>
          <div className='flex flex-col p-2 w-1/3 gap-5'>
            <div className='flex items-center'>
              <img src={logo} alt="logo footer" className='w-10 h-10'/>
              <span className='font-semibold text-white text-xl'>TrendShop</span>
            </div>
            <span className='text-sm text-gray-400'>@ 2026 TrendShop</span>
            <span className='text-sm text-gray-400'>All rights reserved</span>
          </div>
          <div className='flex justify-between w-2/3 px-2'>
            <FooterList title={'Links'} menu={FooterList1}></FooterList>
            <FooterList title={'Links'} menu={FooterList2}></FooterList>
            <FooterList title={'Links'} menu={FooterList3}></FooterList>
          </div>
        </div>
    </footer>
  )
}

export default Footer
