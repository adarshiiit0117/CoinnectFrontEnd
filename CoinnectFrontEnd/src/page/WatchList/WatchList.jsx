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
const WatchList = () => {
  const handleRemoveToWatchlist=(value)=>{
    console.log(value)
  }
  return (
    <div className="min-h-screen bg-black p-5 pb-5 lg:p-20">
         <h1 className='font-bold text-3xl text-white'>WatchList</h1>
         <Table className="text-white border-x border-y">
            
               <TableHeader>
                 <TableRow>
                   <TableHead className="w-[100px] text-white">Coin</TableHead>
                   <TableHead className="text-white">Symbol</TableHead>
                   <TableHead className="text-white">Volume</TableHead>
                   <TableHead className="text-white">Market Cap</TableHead>
                   <TableHead className="text-white">24Hrs</TableHead>
                   <TableHead className="text-right text-white">Price</TableHead>
                   <TableHead className="text-right text-red-600">Remove</TableHead>
                 </TableRow>
               </TableHeader>
               <TableBody>
                 {[1,1,1,1,1,1,1,1,1].map((item,index)=> <TableRow key={index}>
                   <TableCell className="font-medium text-white flex items-center gap-2">
                     <Avatar >
                         <AvatarImage src='https://m.media-amazon.com/images/I/61Iw4aixZ1L.jpg'/>
                     </Avatar>
                     <span>BitCoin</span>
                   </TableCell>
                   <TableCell className="text-white">BTC</TableCell>
                   <TableCell className="text-white">34248249812</TableCell>
                     <TableCell className="text-white">2164733087181</TableCell>
                       <TableCell className="text-white">-0.09677</TableCell>
                   <TableCell className="text-right text-white">$108814</TableCell>
                   <TableCell className="text-right text-white">
                    <Button  varient="ghost"onClick={()=>handleRemoveToWatchlist(item.id)} size="icon" className="h-10 w-10">
                      <BookmarkIcon className='h-6 w-6'/>
                    </Button>
                   </TableCell>
                 </TableRow>)}
                
               </TableBody>
             </Table>
       </div>
  );
};

export default WatchList;
