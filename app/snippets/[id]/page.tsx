import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import React from 'react';
import { handelDeleteClick} from '@/actions/server';
import { notFound } from 'next/navigation';
const Page = async ({ params }: { params:Promise< { id: string } >}) => {
    const id = (await params).id

    await new Promise((e) => setTimeout(e,2000))
    
    const snippet = await prisma.snippet.findUnique({
        where:{
            id
        }
    })

    if(!snippet) notFound()
    const handelDeleteClicks = handelDeleteClick.bind(null,id)

  return (
<>
<div className='flex justify-between mb-4'>
   <div className='font-bold text-xl'>{snippet?.title}</div>
   <div className='flex gap-4'>
   <Link href={`/snippets/${id}/edit`}><Button>Edit</Button></Link>
   <form action={handelDeleteClicks}>
   <Button type='submit' variant={'destructive'}>Delete</Button>
   </form>
   </div>
   </div>
   <pre className='p-3 bg-gray-200 rounded border-gray-300'>
    <code>
    {snippet?.code}
    </code>
   </pre>
   
</>
  )
  
  
};

export default Page;
