import React from 'react';

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
const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black p-5 pb-5 lg:p-20">
      <h1 className='font-bold text-3xl text-white'>Portfolio</h1>
      <Table className="text-white border-x border-y">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-white">Asset</TableHead>
            <TableHead className="text-white">Price</TableHead>
            <TableHead className="text-white">Unit</TableHead>
            <TableHead className="text-white">Change</TableHead>
            <TableHead className="text-white">Change%</TableHead>
            <TableHead className="text-right text-white">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-white flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://m.media-amazon.com/images/I/61Iw4aixZ1L.jpg" />
                  <AvatarFallback>BTC</AvatarFallback>
                </Avatar>
                <span>BitCoin</span>
              </TableCell>
              <TableCell className="text-white">BTC</TableCell>
              <TableCell className="text-white">34248249812</TableCell>
              <TableCell className="text-white">2164733087181</TableCell>
              <TableCell className="text-white">-0.09677</TableCell>
              <TableCell className="text-right text-white">$108814</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};


export default Portfolio;
