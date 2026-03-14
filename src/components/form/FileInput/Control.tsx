import type { ChangeEvent, ComponentProps } from "react";
import { useFileInput } from "./root";

export type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  const {id, onFilesSelected} = useFileInput()

  function handleFileSelected (event: ChangeEvent<HTMLInputElement>) {
    if(!event.target.files?.length) {
        return
    }

    const files = Array.from(event.target.files)

    onFilesSelected(files)
  }
  return <input type="file" className='sr-only' id={id} onChange={handleFileSelected} {...props} />
}
