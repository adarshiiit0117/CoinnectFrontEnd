import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  WalletIcon,
  CopyIcon,
  DollarSignIcon,
  UploadIcon,
  ShuffleIcon,
  CreditCard,
  RotateCcw,
} from "lucide-react";
import { UpdateIcon } from '@radix-ui/react-icons';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import TopUpForm from './TopUpForm';
import WithdrawalForm from './WithdrawalForm';
import TransferForm from './TransferForm';

const Wallet = () => {
  return (
    <div className='flex flex-col items-center min-h-screen bg-black'>
      <div className='pt-10 w-full lg:w-[60%]'>
        <Card>
          <CardHeader className="pb-9">
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-5'>
                <WalletIcon size={30} />
                <div>
                  <CardTitle className="text-2xl">My Wallet</CardTitle>
                  <div className='flex items-center gap-2'>
                    <p className='text-gray-500 text-sm'>#A475Ed</p>
                    <CopyIcon size={10} className='cursor-pointer hover:text-slate-300' />
                  </div>
                </div>
              </div>
              <RotateCcw className="w-6 h-6 cursor-pointer hover:text-gray-400 rotate-90" />
            </div>
          </CardHeader>

          <CardContent>
            <div className='flex items-center'>
              <DollarSignIcon />
              <span className='text-2xl font-semibold ml-2'>2000</span>
            </div>
            <div className='flex gap-7 mt-5'>
              {/* Add Money */}
              <Dialog>
                <DialogTrigger>
                  <div className='bg-green-600 h-24 w-24 hover:text-gray-600 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md'>
                    <UploadIcon />
                    <span className='text-sm mt-2'>Add Money</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center text-xl">Top Up Your Wallet</DialogTitle>
                  </DialogHeader>
                  <TopUpForm />
                </DialogContent>
              </Dialog>

              {/* Withdrawal */}
              <Dialog>
                <DialogTrigger>
                  <div className='bg-red-600 h-24 w-24 hover:text-gray-600 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md'>
                    <CreditCard />
                    <span className='text-sm mt-2'>Withdrawal</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center text-xl">Request Withdrawal</DialogTitle>
                  </DialogHeader>
                  <WithdrawalForm />
                </DialogContent>
              </Dialog>

              {/* Transfer */}
              <Dialog>
                <DialogTrigger>
                  <div className='bg-yellow-500 h-24 w-24 hover:text-gray-600 cursor-pointer flex flex-col items-center justify-center rounded-md shadow-slate-800 shadow-md'>
                    <ShuffleIcon />
                    <span className='text-sm mt-2'>Transfer</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-center text-xl">Transfer To Other Wallet</DialogTitle>
                  </DialogHeader>
                  <TransferForm />
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>

        {/* History Section */}
        <div className='text-white py-5 pt-10'>
          <div className='flex gap-2 items-center pb-5'>
            <h1 className='text-2xl font-semibold'>History</h1>
            <UpdateIcon className='h-7 w-7 p-0 cursor-pointer hover:text-gray-400' />
          </div>

          <div className='space-y-5'>
            {[1, 1, 1, 1, 1, 1].map((item, i) => (
              <div key={i}>
                <Card className=" px-5 py-4">
                  <div className="flex justify-between items-center">
                    {/* Left side */}
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>
                          <ShuffleIcon />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h1 className="font-medium">Buy Asset</h1>
                        <p className="text-sm text-gray-500">2025-06-01</p>
                      </div>
                    </div>

                    {/* Right side */}
                    <div>
                      <p className="text-green-600 font-medium">$99</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
