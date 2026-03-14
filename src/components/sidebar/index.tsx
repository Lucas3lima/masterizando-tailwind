import {
  BarChart,
  CheckSquare,
  ChevronDownIcon,
  Cog,
  Flag,
  Home,
  Search,
  SquareStack,
  Users,
} from 'lucide-react';
import { Button } from '../ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible';
import { Logo } from './logo';
import { NavItem } from './navItem';
import { Profile } from './Profile';
export function Sidebar() {
  return (
    <Collapsible className="flex flex-col gap-6 border-b border-zinc-300 p-4 fixed data-[state=open]:bottom-0 data-[state=open]:h-screen lg:data-[state:closed]:bottom-0 lg:h-screen top-0 left-0 right-0 z-20 bg-white lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-6">
        <div className='flex items-center justify-between'>
            <Logo />
            <CollapsibleTrigger asChild className='lg:hidden'>
                <Button variant="ghost" className="group">
                    <ChevronDownIcon className="group-data-[state=open]:rotate-180 h-6 w-6" />
                </Button>
            </CollapsibleTrigger>

        </div>

      <CollapsibleContent forceMount className='flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex'>
        <div className="flex mx-1 w-full items-center gap-2 rounded-lg border border-zinc-400 py-2 px-3 shadow-sm">
          <Search className="h-5 w-5 text-zinc-500" />
          <input
            className="flex-1 border-none bg-transparent p-0 text-zinc-950 placeholder-zinc-600"
            placeholder="Search"
          />
        </div>

        <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Settings" icon={Cog} />
          </nav>
          <div className="h-px bg-zinc-300"></div>
          <Profile />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
