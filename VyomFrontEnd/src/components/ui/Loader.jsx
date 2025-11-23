import {LoaderCircle} from 'lucide-react';
const Loader = () => {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="w-10 h-10 border-t-4 border-blue-600 border-solid rounded-full animate-spin">
          <LoaderCircle className="w-10 h-10 text-blue-600" />
        </div>
      </div>
    );
  };
  
  export default Loader;
  