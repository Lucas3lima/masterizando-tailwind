import { User } from 'lucide-react';
import { useMemo } from 'react';
import { useFileInput } from './root';

export function ImagePreview() {
  const { files } = useFileInput();

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null;
    }

    return URL.createObjectURL(files[0]);
  }, [files]);

  if(previewURL === null){
      return (
        <div className="w-16 h-16 bg-zinc-200 rounded-full flex items-center justify-center">
          <User className="w-8 h-8 text-violet-600" />
        </div>
      )

  }else {
    return <img src={previewURL} alt='' className='w-16 h-16 rounded-full object-cover' />
  }

}
