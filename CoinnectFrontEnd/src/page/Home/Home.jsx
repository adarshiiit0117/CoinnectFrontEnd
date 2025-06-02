import React from 'react'
import { Button } from "@/components/ui/button";
import AssetTable from './AssetTable';
import StockChart from './StockChart';
import { Avatar, AvatarImage ,AvatarFallback} from "@/components/ui/avatar";
import { CrossIcon, DotIcon, MessageCircle } from 'lucide-react';
const Home = () => {
  const [category, setCategory] = React.useState("all");

  const handleCategory = (value) => {
    setCategory(value);
  };

  return (
    <div className='relative bg-black text-white min-h-screen'>
      <div className='lg:flex'>
        <div className='lg:w-[50%] lg:border-r lg:border-gray-700'>
          <div className='p-3 flex items-center gap-4'>
            <Button
              onClick={() => handleCategory("all")}
              variant={category === 'all' ? 'default' : 'outline'}
              className='rounded-full text-black'
            >
              All
            </Button>
            <Button
              onClick={() => handleCategory("top50")}
              variant={category === 'top50' ? 'default' : 'outline'}
              className='rounded-full text-black'
            >
              TOP 50
            </Button>
            <Button
              onClick={() => handleCategory("topGainers")}
              variant={category === 'topGainers' ? 'default' : 'outline'}
              className='rounded-full text-black'
            >
              Top Gainers
            </Button>
            <Button
              onClick={() => handleCategory("topLosers")}
              variant={category === 'topLosers' ? 'default' : 'outline'}
              className='rounded-full text-black'
            >
              Top Losers
            </Button>
          </div>
          <AssetTable/>
        </div>
        <div className='hidden lg:block lg:w-[50%] p-5'>
            <StockChart/>
            <div className='flex gap-5 items-center'>
                <div>
                    <Avatar>
                        <AvatarImage src={"image.png"}></AvatarImage>
                    </Avatar>
                </div>
               <div>
                 <div className='flex items-center gap-2'>
                <p>ETH</p>
                <DotIcon className='text-gray-400'/>
                <p className='text-gray-400'>Ethereum</p>
                </div>
<div className='flex items-end gap-2'>
    <p className='text-xl font-bold'>5464</p>
<p className='text-red-600'> <span>-131903455.586</span>
   <span>(-0.23245.3%)</span>
</p>
</div>
               </div>
            </div>
        </div>
      </div>
      <section className='absolute bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2'>



     
      </section>
    </div>
  
  );
};

export default Home;
