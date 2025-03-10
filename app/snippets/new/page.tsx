"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React, { useActionState } from 'react'
import { createSnippet } from '@/actions/server'

const snippetsPage = () => {

 const [fromStateData, xyz] = useActionState(createSnippet, {message:""})


  return (
   <>
   <form action={xyz}>
   <div className='pb-6'>
    <Label className='pb-2'>Title</Label>
    <Input type="text" name='title' id='title'/>
   </div>
   <div>
    <Label className='pb-2'>Code</Label>
    <Textarea name='code' id='code'/>
   </div>
   {fromStateData.message &&<div className='text-red-600 p-2 mt-2 bg-gray-200'>{fromStateData.message}</div>}
 <Button  className='mt-10' type='submit'>New</Button>
   </form>
   </>
  )
}

export default snippetsPage