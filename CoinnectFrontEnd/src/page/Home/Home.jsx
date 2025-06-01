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

<div className='rounded-md w-[20em] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-slate-900'>
 <div className='flex justify-center items-center border-b px-6 h-[12%]'> 
  <p>Chat Bot</p>
  <Button variant='ghost' size='icon'>
    <CrossIcon/>
  </Button></div>
  <div className='h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container'>
    <div className='self-start pb-5 w-auto'>
      <div className='justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto'>
  <p>hi,Adarsh Dubey</p>
  <p>you can ask any question related to crypto</p>
  <p>like price,marketcap extra</p>
</div></div>
 <div className={ `${true?"self-start":"self-end"}'pb-5 w-auto'`}>
      <div className='justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto'>
  
  <p>prompt who are you</p>
</div>
  <div className='justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto'>
  
  <p>ans hi,I am adarsh dubey</p>
</div>
</div>
 
    
  </div>
</div>

        <div className='relative w-[10rem] cursor-pointer group'>
            <Button className="w-full h-[3rem] gap-2 items-center">
                <MessageCircle size={60} className='fill-[#1e293b] -rotate-90 stroke-none group-hover:fill-[#1a1a1a] '/>
                <span className='text-2xl'>ChatBot</span>
            </Button>

        </div>

      </section>
    </div>
  
  );
};

export default Home;
