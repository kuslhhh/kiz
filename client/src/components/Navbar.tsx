import { FaCartShopping } from "react-icons/fa6"
import { Link } from "react-router-dom"
export const Navbar = () => {
  return (
    <div className="flex justify-around rounded-xl items-center bg-[#343333] text-[#a9a9a9] p-4">
        <div>
            <h1 className="text-xl font-bold">Shopie</h1>
        </div>

        <div className="flex items-center justify-around space-x-5">
            <Link to="/">Shop</Link>
            <Link to="/purchased-items">Purchases</Link>
            <Link to="/checkout"><FaCartShopping/></Link>
            {/* <Link to="/">Shop</Link> */}
        </div>
    </div>
  )
}
