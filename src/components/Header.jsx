import { NavLink } from 'react-router-dom';


const Header = () => {
 

  return (
    <div>
      <div className="navbar bg-base-100 lg:mb-0 md:mb-2 sm:mb-6 mb-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-0 z-[1] p-2 shadow bg-purple-100 rounded-box w-fit grid grid-cols-6 gap-16">
            <li><NavLink className={({ isActive, isPending }) =>
              isActive
                ? ("text-green-500")
                : isPending
                  ? "pending"
                  : ("text-black")
            } to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive, isPending }) =>
    isActive
      ? ("text-green-500")
      : isPending
        ? "pending"
        : ("text-black")
  } to="/rent">Items</NavLink></li>




           
            </ul>
          </div>
          <img className='h-16 w-16 border rounded-full' src="https://i.ibb.co/Bwvw9n6/OIG1.jpg" alt="Artistry Avenue" />
        </div>
        <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
  <li><NavLink className={({ isActive, isPending }) =>
    isActive
      ? ("text-green-500")
      : isPending
        ? "pending"
        : ("text-black")
  } to="/">Home</NavLink></li>


</ul>

        </div>
        <div className="navbar-end dropdown dropdown-end flex justify-end">
        <button className="btn btn-sm bg-black text-white">Login</button>



        
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Header;
