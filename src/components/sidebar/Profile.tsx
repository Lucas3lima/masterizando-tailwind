import { LogOut } from "lucide-react";

export function Profile() {
    return <div className="grid items-center gap-3 grid-cols-profile">
        <img src="https://github.com/lucas3lima.png" alt="" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col truncate">
            <span className="truncate text-sm font-semibold text-zinc-800">Lucas Lima</span>
            <span className="truncate text-sm text-zinc-500">Metalsa</span>
        </div>
        <button type="button" className="ml-auto cursor-pointer p-2 hover:bg-zinc-300 rounded-md">
            <LogOut className="h-5 w-5 text-zinc-500" />
        </button>
    </div>
}