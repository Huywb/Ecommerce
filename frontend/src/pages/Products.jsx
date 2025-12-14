import { useState } from 'react'
import ListProducts from '../components/product/ListProducts'
import MenuItem from '../components/MenuItem'
import { ProductList } from '../contants/Data'
import { useLocation } from 'react-router-dom'
import Search from '../components/Search'

const Products = () => {
    const [products,setProducts] = useState(ProductList)
    const [originalProducts, setOriginalProducts] = useState(ProductList);
    const [category,setCategory] = useState()
    const [sort,setSort] = useState('newest')
    const [page,setPage] = useState(1)
    let productPerPage = 16
    let totalPage = Math.ceil(products.length/ productPerPage)
    let start = (page - 1) * productPerPage;
    let end = start + productPerPage;
    let currentProducts = products.slice(start, end);

    const handleChangeSort = (value) => {
    switch (value) {
        case "newest": {
            const sorts = originalProducts.filter((item) => item.tags === "newset" &&  (category ? item.category === category : item));
            if(sorts.length < 1) return
            setProducts(sorts);
            break;
        }

        case "bestsell": {
            const sorts = originalProducts.filter((item) => item.tags === "bestsell" && (category ? item.category === category : item));
            if(sorts.length < 1) return
            setProducts(sorts);
            break;
        }

        case "inc": { 
            const sortInc = originalProducts.filter(item=> category ? item.category == category : item).sort((a, b) => a.price - b.price);
            if(sortInc.length < 1) return
            setProducts(sortInc);
            break;
        }

        case "dec": { 
            const sortDec = originalProducts.filter(item=>category ? item.category == category : item).sort((a, b) => b.price - a.price);
            if(sortDec.length < 1) return
            setProducts(sortDec);
            break;
        }

        default:
            break;
        }
    };
    const SelectedCategory = (value)=>{
        setPage(1)
        if (value === "All") {
            setCategory('')
            setProducts(originalProducts);
        }else {
            setCategory(value)
            const filtered = originalProducts.filter(
            (item) => item.category.includes(value)
            ); 
        setProducts(filtered);
        }
    }

    const handleSearchChange = (value)=>{
        if(!value){
            setProducts(ProductList)
            console.log(9)
        }else{
            console.log(1)
        let SearchItem = originalProducts.filter((item)=>item.name.includes(value.toLowerCase()))
        setProducts(SearchItem)
        }
    }
    console.log(originalProducts)



  return (
    <main className='flex flex-col gap-2'>
        <section>
          <MenuItem changeCategory={SelectedCategory}/>
        </section>
        <div className='flex items-center justify-end gap-2 py-5 sm:flex-row flex-col'>
            <Search handleSearchChange={handleSearchChange}/>
            <div className='flex items-center gap-2'>
                <span>Sort by :</span>
                <select name="sort" onChange={(e) => handleChangeSort(e.target.value)} className='py-1 px-2 border border-gray-400 outline-none rounded-md shadow-xl cursor-pointer pr-10'>
                    <option value="newest"  >Newest</option>
                    <option value="dec" >High to Low</option>
                    <option value="inc" > Low to Hight</option>
                    <option value="best" >Best Sell</option>
                </select>
            </div>
            
        </div>
        <section>
          <ListProducts productList={currentProducts} />
        </section>
        <div className=' justify-center items-center flex gap-2'>
            {
                Array.from({length: totalPage},(_,i)=>(
                    <span key={i} onClick={()=>setPage(i+1)} className={`px-2 border rounded-md cursor-pointer ${page == i+1 ? 'bg-black text-white' : ''}`}>{i+1}</span>
                ))
            }
        </div>
    </main>
  )
}

export default Products
