
import Link from "next/link";
export const Navbar: React.FC = () => {
  
  return (
    <header className="p-6 flex justify-between items-center w-full bg-slate-500">
      <div>
        <h2 className="font-bold text-xl text-slate-200">Task-Manager</h2>
      </div>
      <div className="flex items-center gap-4">
        
        <Link href={"/"}>
          <button className="bg-slate-300 px-6 py-1 rounded-lg text-gray-700 font-semibold hover:bg-slate-400">
            Tasks
          </button>
        </Link>
        <Link href={"/signin"}>
          <button className="bg-slate-300 px-6 py-1 rounded-lg text-gray-700 font-semibold hover:bg-slate-400">
            SignIn
          </button>
        </Link>
        <Link href={"/signup"}>
          <button className="bg-slate-300 px-6 py-1 rounded-lg text-gray-700 font-semibold hover:bg-slate-400">
            SignUp
          </button>
        </Link>
      </div>
     
    </header>
  );
};
