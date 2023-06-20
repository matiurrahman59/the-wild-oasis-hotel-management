import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from 'react-icons/hi2';
import { NavLink, useLocation } from 'react-router-dom';

function MainNav() {
  const { pathname } = useLocation();
  const navLinks = [
    {
      id: 1,
      name: 'Home',
      path: '/dashboard',
      icon: HiOutlineHome,
    },
    {
      id: 2,
      name: 'Bookings',
      path: '/bookings',
      icon: HiOutlineCalendarDays,
    },
    {
      id: 3,
      name: 'Cabins',
      path: '/cabins',
      icon: HiOutlineHomeModern,
    },
    {
      id: 4,
      name: 'Users',
      path: '/users',
      icon: HiOutlineUsers,
    },
    {
      id: 5,
      name: 'Settings',
      path: '/settings',
      icon: HiOutlineCog6Tooth,
    },
  ];
  return (
    <nav>
      <ul className='flex flex-col gap-3'>
        {navLinks.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={`flex items-center gap-5 text-xl group font-medium py-5 px-9  hover:bg-gray-50 hover:text-gray-800 hover:rounded-sm transition-all ${
                pathname === item.path
                  ? 'bg-gray-50 text-gray-800 rounded-sm'
                  : 'text-gray-600'
              }`}
            >
              <item.icon
                className={`text-gray-400 group-hover:text-indigo-600 transition-all ${
                  pathname === item.path && 'text-indigo-600'
                }`}
              />
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNav;
