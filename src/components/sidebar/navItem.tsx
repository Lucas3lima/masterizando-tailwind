import { ChevronDown } from 'lucide-react';
import type { ElementType } from 'react';
export type NavItemProps = {
  title: string;
  icon: ElementType;
};

export function NavItem({title, icon: Icon}: NavItemProps){
    return (
        <a href="/" className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-200">
            <Icon className="group-hover:text-violet-400 h-5 w-5 text-zinc-500"/>
            <span className="font-medium text-zinc-600 group-hover:text-violet-400">{title}</span>
            <ChevronDown className="group-hover:text-violet-400 ml-auto h-5 w-5 text-zinc-500" />
        </a>
    )
}
