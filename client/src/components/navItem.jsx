import { Link } from 'react-router-dom';

function NavItem({item}) {
    
  return (
    <Link to='/' className="h-full w-1/5 p-2 text-start text-xl text-black font-bold">{item}</Link>
  );
}


function Nav({item}) {
    
    return (
        <ul className="flex justify-around items-center px-20">
            <NavItem item="HOME"/>
            <NavItem item="BUSINESS"/>
            <NavItem item="TECH"/>
            <NavItem item="SPORT"/>
            <NavItem item="POLITICS"/>
        </ul>
      
    );
  }

export default Nav