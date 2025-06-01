import React from "react";
import { Input } from "@/components/ui/input";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
const TransferForm = () => {
    const[formData,SetFormData]=React.useState({
        amount:'',
        walletId:'',
        purpose:'',

    })
    const handleChange=(e)=>{
SetFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        console.log(formData)
    }
  return (
    <div className='pt-10 space-y-5'>
        <div>
            <h1 className="pb-1">
                Enter Amount
            </h1>
            <Input  name="amount" onChange={handleChange} value={formData.amount} className="py-7" placeholder="$9999" />
            
        </div>
         <div>
            <h1 className="pb-1">
                Wallet Id
            </h1>
            <Input  name="walletId" onChange={handleChange} value={formData.walletId} className="py-7" placeholder="#AAS345" />
            
        </div>
         <div>
            <h1 className="pb-1">
                Purpose
            </h1>
            <Input  name="purpose" onChange={handleChange} value={formData.purpose} className="py-7" placeholder="Gift for you friend/family" />
            
        </div>
      <div>
        <DialogClose className="w-full"><Button onClick={handleSubmit} className="w-full py-7">Submit</Button></DialogClose>
        
      </div>
    </div>
  );
};

export default TransferForm;
