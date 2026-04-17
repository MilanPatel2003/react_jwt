import { Link } from "react-router-dom";


 export const Navbar = ()=>{
    return(

    <nav className="border-b bg-blue-600 ">
        <div className="flex items-center justify-end h-full">
            <Link to={"/"} className="text 2xl mx-4  font-bond mx-4 hover:text-amber-400">Home</Link>
                        <Link to={"/login"} className="text 2xl mx-4  font-bond  hover:text-amber-400">login</Link>
            <Link to={"/"} className="text 2xl font-bond mx-4  hover:text-amber-400">sign up</Link>


        </div>
    </nav>
    )
}

