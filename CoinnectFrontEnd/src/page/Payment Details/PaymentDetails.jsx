import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import PaymentDetailsForm from './PaymentDetailsForm';


const PaymentDetails = () => {
  return (
    <div className='bg-black h-screen px-20 text-white'>
      <h1 className='text-3xl font-bold py-10'>Payment Details</h1>
   {false?  <Card>
        <CardHeader>
          <CardTitle>
            State Bank Of India
          </CardTitle>
          <CardDescription>
            A/C No.:
            **********1233</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex items-center '>
           <p className='w-32'>A/C Holder</p>
           <p className='text-gray-400'>: Adarsh Dubey</p>
          </div>
          <div className='flex item-center'>
            <p className='w-32'>IFSC</p>
            <p className='text-gray-400'>: SBIN1234</p>

          </div>
        </CardContent>
      </Card>: <Dialog className=" ">
  <DialogTrigger>
    <Button className="  py-6 ">Add payment Details</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Payment Details</DialogTitle>
     
    </DialogHeader>
    <PaymentDetailsForm/>
  </DialogContent>
</Dialog>}
  
    </div>
  );
};

export default PaymentDetails;
