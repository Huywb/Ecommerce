import { BsReverseLayoutSidebarInsetReverse } from "react-icons/bs";

const HeaderAdmin = ({hideSiderBar,ToggleHideSiderBar}) => {
    const handleSiderBar = ()=>{
        ToggleHideSiderBar(hideSiderBar)
    }
  return (
    <header className='flex justify-between text-white items-center py-2'>
      <BsReverseLayoutSidebarInsetReverse onClick={handleSiderBar} size={20} className="cursor-pointer opacity-70 hover:opacity-95 transition-all duration-300"/>
    </header>
  )
}

export default HeaderAdmin
