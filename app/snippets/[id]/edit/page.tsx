
import React from 'react'
import EditSnippet from '@/components/editSnippet'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'

const page = async ({params}: {params:Promise<{id:string}>}) => {

    const id = (await params).id

    const snippet = await prisma.snippet.findUnique({
        where:{
            id
        }
    })

    if(!snippet) notFound()
  return (
    <>
      <EditSnippet snippet={snippet}/>
    </>
  )
}

export default page;