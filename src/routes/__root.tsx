import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Sidebar } from '../components/sidebar';


export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className='min-h-screen grid grid-cols-app antialiased'>
        <Sidebar />
        <main className='px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8'>
            <Outlet />
        </main>
    </div>
  );
}
