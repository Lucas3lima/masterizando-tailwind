import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Sidebar } from '../components/sidebar';


export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className='min-h-screen grid grid-cols-app antialiased'>
        <Sidebar />
        <main className='px-8 pb-12 pt-8'>
            <Outlet />
        </main>
    </div>
  );
}
