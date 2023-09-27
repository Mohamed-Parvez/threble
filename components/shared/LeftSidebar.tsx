"use client"
import{sidebarLinks} from "@/constants/"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
function LeftSidebar(){
    const isUserLoggedIn = true;
    const router = useRouter();
    const pathname = usePathname();
    return (<section className="custom-scrollbar leftsidebar">
        <div className="flex w-full flex-1 flex-col gap-6 px-6">
            {sidebarLinks.map((link) =>{
                const isActive = (pathname.includes(link.route)&&link.route.length>1)|| pathname===link.route;
                return(
                <Link href={link.route} key={link.label} className={`leftsidebar_link ${isActive&&'bg-primary-500'}`}>
                    <Image src={link.imgURL} alt={link.label} width={24} height={24} />
                    <p className="text-light-1 max-lg:hidden">{link.label}</p>
                </Link>
            )})}
        </div>
        <div className="mt-10 px-6">
  <div className="flex items-center gap-1">
    <div>
      {isUserLoggedIn ? (
        <div className="cursor-pointer flex items-center gap-4" onClick={()=>router.push('sign-in')}>
          <button className="btn btn-icon btn-circle btn-sm btn-ghost-light-1">
            <Image src="/assets/login.svg" alt="logout" width={24} height={24} />
          </button>
          <p className="inline-block text-light-2 max-lg:hidden px-4 py-2">
            Logout
          </p>
        </div>
      ) : (
        <div className="cursor-pointor flex items-center gap-4">
          <button className="btn btn-icon btn-circle btn-sm btn-ghost-light-1">
            <Image src="/assets/logout.svg" alt="logout" width={24} height={24} />
          </button>
          <p className="text-light-2 max-lg:hidden px-4 py-2">
            Login
          </p>
        </div>
      )}
    </div>
  </div>
</div>
    </section>)
}
export default LeftSidebar