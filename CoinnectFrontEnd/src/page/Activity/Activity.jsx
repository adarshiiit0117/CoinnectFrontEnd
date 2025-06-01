import React from 'react';
import { Bookmark, BookmarkCheck, BookMarkedIcon, BookmarkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarImage ,AvatarFallback} from "@/components/ui/avatar";

const Activity = () => {
  return (
     <div className="min-h-screen bg-black p-5 pb-5 lg:p-20">
         <h1 className='font-bold text-3xl text-white'>Activity</h1>
         <Table className="text-white border-x border-y">
            
               <TableHeader>
                 <TableRow>
                   <TableHead className="w-[100px] text-white">Date & Time</TableHead>
                   <TableHead className="text-white">Treading pair</TableHead>
                   <TableHead className="text-white">Buy Price</TableHead>
                   <TableHead className="text-white">Cell Price</TableHead>
                   <TableHead className="text-white">Order Type</TableHead>
                   <TableHead className="text-right text-white">Profit/Loss</TableHead>
                   <TableHead className="text-right text-white">Value</TableHead>
                 </TableRow>
               </TableHeader>
               <TableBody>
                 {[1,1,1,1,1,1,1,1,1].map((item,index)=> <TableRow key={index}>
                  <TableCell className="text-white">
                    <p>2025/05/31</p>
                    <p>01:13:32</p>
                  </TableCell>
                   <TableCell className="font-medium text-white flex items-center gap-2">
                     <Avatar >
                         <AvatarImage src='https://m.media-amazon.com/images/I/61Iw4aixZ1L.jpg'/>
                     </Avatar>
                     <span>BitCoin</span>
                   </TableCell>
                 
                   <TableCell className="text-white">34248249812</TableCell>
                     <TableCell className="text-white">2164733087181</TableCell>
                     
                       <TableCell className="text-white">-0.09677</TableCell>
                   <TableCell className="text-right text-white">$108814</TableCell>
                   <TableCell className="text-right text-white">43567
                   </TableCell>
                 </TableRow>)}
                
               </TableBody>
             </Table>
       </div>
  );
};

export default Activity;
