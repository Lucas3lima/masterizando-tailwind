import { UploadCloud } from "lucide-react";
import { useFileInput } from "./root";

export function Trigger() {
    const {id} = useFileInput()
  return (
    <label htmlFor={id} className='group flex flex-col items-center flex-1 cursor-pointer border-2 rounded-lg px-6 py-4 text-zinc-500 shadow-sm hover:bg-violet-200'>
        <UploadCloud className='h-5 w-5 group-hover:text-violet-500'/>
        <div className='flex flex-col items-center gap-1'>
        <span><span className='text-sm text-violet-500 font-semibold'>Click to upload</span> or drag and drop</span>
        <span>SVG, PNG, JPG or GIF (max. 800x400px)</span>
        </div>
    </label>
  )
}
