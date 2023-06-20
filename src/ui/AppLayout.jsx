import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

function AppLayout() {
  return (
    <div className='grid grid-cols-[20rem,1fr] grid-rows-[auto,1fr] h-screen'>
      <Header />
      <Sidebar />
      <main className='bg-gray-50'>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
