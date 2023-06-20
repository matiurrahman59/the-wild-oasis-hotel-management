import Logo from './Logo';
import MainNav from './MainNav';

function Sidebar() {
  return (
    <aside className='bg-white row-span-full border-r border-r-gray-100 py-12 px-9 space-y-12'>
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
