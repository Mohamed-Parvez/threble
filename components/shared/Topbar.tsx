import Link from "next/link"
import Image from "next/image"

function Topbar(){
    const isUserLoggedIn = false;
    return( <nav className="topbar">
        <Link className="flex items-center gap-4" href="/">
            <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
            <p className="text-heading3-bold text-light-1 max-xs:hidden">Threble</p>
        </Link>
        <div className="flex items-center gap-1">
            <div className="block md:hidden">
                {isUserLoggedIn ? (<button className="btn btn-icon btn-circle btn-sm btn-ghost-light-1"><Image src="/assets/login.svg" alt="logout" width={24} height={24} /></button>):(<button className="btn btn-icon btn-circle btn-sm btn-ghost-light-1"><Image src="/assets/logout.svg" alt="logout" width={24} height={24} /></button>)}
            </div>
        </div>
            
    </nav>)
}
export default Topbar