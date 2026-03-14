import { UploadCloud } from 'lucide-react';
import { formatBytes } from '../../../utils/format-bytes';
import { useFileInput } from './root';

export function FileList() {
  const { files } = useFileInput();
  return (
    <div className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <div
            key={file.name}
            className="group flex items-start gap-4 rounded-lg border bg-zinc-200"
          >
            <div className="rounded-full border-4 border-violet-100 bg-violet-300 to-violet-600">
              <UploadCloud className="w-4 h-4" />
            </div>
            <div className="flex flex-1 flex-col items-start gap-1">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-700">
                  {file.name}
                </span>
                <span className='text-sm text-zinc-500'>{formatBytes(file.size)}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
