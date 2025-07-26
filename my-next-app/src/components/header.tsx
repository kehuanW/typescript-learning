import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return(
        <div className="border-black/10 border-b h-[40px] flex 
        item-center justify-between px-5">
            <Link href="/">
                <Image
                    src="https://images.unsplash.com/photo-1753204392401-a424cb95d3e2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="logo"
                    width={30}
                    height={30}
                    className="rounded-full"
                    priority
                />
            </Link>
            <ul className="flex items-center gap-3">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
            </ul>
        </div>
    )
}