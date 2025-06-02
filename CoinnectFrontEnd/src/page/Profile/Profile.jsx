import {  CalendarDays, VerifiedIcon } from 'lucide-react';
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import AccountVerificationForm from './AccountVerificationForm';

const Profile = () => {
  const handleEnableTwoStepVerification=()=>{
    console.log("two step verification")
  }
  return (
    <div className='flex flex-col items-center mb-5 bg-black h-screen text-white'>
      <div className='pt-10 w-full lg:w-[60%]'>
        <Card className="bg-[#0f0f0f] text-white">
          <CardHeader className="pb-9">
            <CardTitle className='text-lg lg:text-xl'>My Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-20'>
              <div className='space-y-3'>
                <div className='flex'>
                  <p className='w-[9rem] font-semibold'>Email :</p>
                  <p className='text-gray-400'>adarh@gmail.com</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem] font-semibold'>Full Name :</p>
                  <p className='text-gray-400'>Adarsh Dubey</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem] font-semibold'>Date Of Birth :</p>
                  <p className='text-gray-400'>06/02/2005</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem] font-semibold'>Nationality :</p>
                  <p className='text-gray-400'>indian</p>
                </div>
              </div>
              <div className='space-y-3'>
                <div className='flex'>
                  <p className='w-[9rem] font-semibold'>Address :</p>
                  <p className='text-gray-400'>Lucknow</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem] font-semibold'>City :</p>
                  <p className='text-gray-400'>Lucknow</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem] font-semibold'>Postcode :</p>
                  <p className='text-gray-400'>224134</p>
                </div>
                <div className='flex'>
                  <p className='w-[9rem] font-semibold'>Country :</p>
                  <p className='text-gray-400'>india</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className='mt-6'>
         <Card className="w-full">
        <CardHeader className="pb-7">
           <div className='flex items-center gap-3'>
              <CardTitle> 
                2 STEP VERIFICATION
              </CardTitle>
              {true?  <Badge className="bg-green-600 h-10 w-20"> <VerifiedIcon/>Enabled</Badge>:
               <Badge className="bg-orange-500">Disabled</Badge>}
           </div>
        </CardHeader>
        <CardContent>
          <div>
<Dialog>
  <DialogTrigger>
    <Button>Enabled Two Step Verification</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Verify Your Account</DialogTitle>
    
    </DialogHeader>
    <AccountVerificationForm handleSubmit={handleEnableTwoStepVerification}/>
  </DialogContent>
</Dialog>
          </div>
        </CardContent>
         </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
