import React from 'react';
import { Button } from "@/components/ui/button";
import { Form,FormItem,FormField,FormLabel,FormControl,FormDescription,FormMessage} from "@/components/ui/form";
import { useForm} from 'react-hook-form';
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
const PaymentDetailsForm = () => {
    const form=useForm({
        resolver:"",
        defaultValues:{
            accountHolderName:"",
            ifsc:"",
            accountNumber:"",
            bankName:""

        }
    })
    const onSubmit=(data)=>{
        console.log(data)
    }
  return (
    <div className='px-10 py-2'>
    <Form {...form}>
<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
    

<FormField
  control={form.control}
  name="accountHoldersName"
  render={({ field }) => (
    <FormItem>
        
      <FormLabel>Account Holder Name</FormLabel>
      <FormControl>
        <Input placeholder="Name" {...field} />
      </FormControl>
      
      <FormMessage />
    </FormItem>
  )}
/>
<FormField
  control={form.control}
  name="IfscCode"
  render={({ field }) => (
    <FormItem>
        
      <FormLabel>IFSC CODE</FormLabel>
      <FormControl>
        <Input name="ifsc" placeholder="Ifsc code" {...field} />
      </FormControl>
      
      <FormMessage />
    </FormItem>
  )}
/>
<FormField
  control={form.control}
  name="accountNo"
  render={({ field }) => (
    <FormItem>
        
      <FormLabel>Account Number</FormLabel>
      <FormControl>
        <Input placeholder="Account Number" {...field} />
      </FormControl>
      
      <FormMessage />
    </FormItem>
  )}
/>
<FormField
  control={form.control}
  name="confirmAccountNo"
  render={({ field }) => (
    <FormItem>
        
      <FormLabel>Confirm Account Number</FormLabel>
      <FormControl>
        <Input placeholder="Confirm Account Number" {...field} />
      </FormControl>
      
      <FormMessage />
    </FormItem>
  )}
/>
<FormField
  control={form.control}
  name="bankName"
  render={({ field }) => (
    <FormItem>
        
      <FormLabel>Bank Name</FormLabel>
      <FormControl>
        <Input placeholder="Bank Name" {...field} />
      </FormControl>
      
      <FormMessage />
    </FormItem>
  )}
/>
<DialogClose className="w-full">
    <Button type="submit" className="w-full py-5">Submit</Button>
</DialogClose>

</form>
    </Form>
    </div>
  );
};

export default PaymentDetailsForm;
