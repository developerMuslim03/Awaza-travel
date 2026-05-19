import { Button } from '@/components/ui/button'
import { Dialog, DialogContent,  DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const SearchPage = () => {
  return (
    <Dialog>
        <DialogTrigger>
            <div className='p-3 hidden lg:flex bg-green-500 cursor-pointer text-white rounded-full'>
                <Search />
            </div>
        </DialogTrigger>
        <DialogContent className='bg-transparent border-none shadow-none'>
                <DialogTitle></DialogTitle>
                <div className='mt-8 flex flex-row items-center justify-center gap-2'>
                    <Input placeholder='gozle...' className='w-full py-6 text-sky-500'/>
                    <Button className='py-6 bg-sky-400 hover:bg-sky-600'>
                        <Search/>         
                    </Button>
                </div>
        </DialogContent>
    </Dialog>
  )
}

export default SearchPage