import React from 'react';

import { Button } from "@/components/ui/button";

import { Avatar, AvatarImage ,AvatarFallback} from "@/components/ui/avatar";
import { DotIcon } from 'lucide-react';
import { BookmarkFilledIcon, BookmarkIcon } from '@radix-ui/react-icons';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import TreadingForm from './TradingForm';
import TradingForm from './TradingForm';
const StockDetails = () => {
  return (
    <div className='p-5 mt-5 bg-black h-screen text-white'>
      <div className='flex justify-between'>
        <div className='flex gap-5 items-center'>
          <div>
            <Avatar>
              <AvatarImage src="https://m.media-amazon.com/images/I/61Iw4aixZ1L.jpg"></AvatarImage>
            </Avatar>
          </div>
          <div>
            <div className='flex items-center gap-2'>
              <p>BTC</p>
              <DotIcon className='text-gray-400'/>
              <p className='text-gray-400'>Bitcoin</p>

            </div>
            <div className='flex items-end gap-2'>
              <p className='text-xl font-bold'>
                $6564
              </p>
              <p className='text-red-600'>
                
                  <span>
                    -1234555423.564
                  </span>
                  <span>(-0.223%)</span>
              
              </p>

            </div>
          </div>
        </div>
        <div  className='flex items-center gap-4'>
<Button>
  {true? <BookmarkFilledIcon className='h-6 w-6'/>:
  <BookmarkIcon className='h-6 w-6'/>}
</Button>

<Dialog>
  <DialogTrigger>
    <Button size="lg">Trade</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>How much you want to spend</DialogTitle>
     
     
    </DialogHeader>
       <TradingForm></TradingForm>
  </DialogContent>
</Dialog>
      </div>
    </div>
    </div>
  );
};

export default StockDetails;
