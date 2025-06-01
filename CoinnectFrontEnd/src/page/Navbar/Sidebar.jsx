import React from "react";
import { Button } from "@/components/ui/button";

import { SheetClose } from "@/components/ui/sheet";
import {
  Home,
  LayoutDashboard,
  Bookmark,
  Activity,
  Banknote,
  Wallet,
  CreditCard,
  User,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";


const menu = [
  { name: "Home", path: "/", icon: Home },
  { name: "Portfolio", path: "/portfolio", icon: LayoutDashboard },
  { name: "Watchlist", path: "/watchlist", icon: Bookmark },
  { name: "Activity", path: "/activity", icon: Activity },
  { name: "Payment Details", path: "/payment-details", icon: Banknote },
  { name: "Wallet", path: "/wallet", icon: Wallet },
  { name: "Withdrawal", path: "/withdrawal", icon: CreditCard },
  { name: "Profile", path: "/profile", icon: User },
  { name: "Logout", path: "/", icon: LogOut },
];


const Sidebar = () => {
  const navigate=useNavigate();
   
  return (
    <div className="bg-black h-screen w-64 p-4 text-white space-y-5 overflow-y-auto">
      {menu.map((item) => (
        <div key={item.name}>
          <SheetClose className='w-full'>
          <Button
            variant="outline"
            className="flex items-center gap-5 py-4 w-full bg-gray-900 hover:bg-gray-800 border-gray-700 text-white"
            onClick={()=>navigate(item.path)}
          >
            <span className="w-6 h-6">
              <item.icon className="w-full h-full text-white" />
            </span>
            <p className="text-white">{item.name}</p>
          </Button>
          </SheetClose>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
