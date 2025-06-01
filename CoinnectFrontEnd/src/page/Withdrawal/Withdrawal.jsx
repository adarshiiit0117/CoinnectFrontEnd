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

const Withdrawal = () => {
  return (
      <div className="min-h-screen bg-black p-5 pb-5 lg:p-20">
            <h1 className='font-bold text-3xl text-white'>Withdrawal</h1>
            <Table className="text-white border-x border-y">
               
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px] text-white">Date</TableHead>
                      <TableHead className="text-white">Method</TableHead>
                      <TableHead className="text-white">Amount</TableHead>
                   
                      <TableHead className="text-right text-white">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[1,1,1,1,1,1,1,1,1].map((item,index)=> <TableRow key={index}>
                     <TableCell className="text-white">
                       <p>2025/05/31</p>
                      
                     </TableCell>
                     
                      <TableCell className="text-white">34248249812</TableCell>
                      <TableCell className="text-right text-white">$108814</TableCell>
                      <TableCell className="text-right text-white">43567
                      </TableCell>
                    </TableRow>)}
                   
                  </TableBody>
                </Table>
          </div>
  );
};

export default Withdrawal;
