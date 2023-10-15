import { Link } from "react-router-dom"
import logo from "../../assets/more/logo1.png"


const Header = () => {
  return (
    <div className="navbar text-neutral-content bg-cover h-28" style={{backgroundImage: 'url(https://i.ibb.co/1q1FfpL/15.jpg)'}}>
        <div className="flex mx-auto">
            <Link to="/" className="flex items-center">
                <div className=" w-20"><img className="w-full" src={logo} alt="Coffee" /></div>
                <h2 className="text-6xl font-rancho">Espresso Emporium</h2>
            </Link>
        </div>
</div>
  )
}

export default Header