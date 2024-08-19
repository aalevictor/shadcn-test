import { Dropdown } from "@/components/navbar/dropdown";
import { Menu } from "@/components/navbar/menu";
import { UserNav } from "@/components/navbar/user-nav";
import { ModeToggle } from "@/components/toggle-mode";

export default function Navbar() {
    return (
        <div className="backdrop-blur-md fixed w-full top-0 left-0">
            <div className="flex h-16 items-center px-4">
                {/* <Dropdown /> */}
                <Menu className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                    <UserNav />
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}