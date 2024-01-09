import { HeartIcon } from "@heroicons/react/24/outline";

export default function MyLogo() {
  return (
    <div className="flex flex-row items-center leading-none text-white">
      <HeartIcon className="hidden md:block h-12 w-12 rotate-[15deg]" />
      <p className="text-xs md:block text-[30px] pl-3">MyApp</p>
    </div>
  );
}
