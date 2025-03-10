"use client"

import React, { useState } from 'react'
import Editor from '@monaco-editor/react'
import type { Snippet } from '@prisma/client'
import { Button } from './ui/button'
import { saveSnippet } from '@/actions/server'

const editSnippet = ({snippet}:{snippet:Snippet}) => {
  const [code,setCode]= useState(snippet.code)
function handelCodeChange(value:string =''){
  setCode(value)
}
    const saveSnippetfunction = saveSnippet.bind(null,snippet.id,code)
  return (
    <div> 
      <form action={saveSnippetfunction} className='mb-4 flex justify-between'>
        <h1 className='text-2xl font-semibold'>your Code Editer :</h1>
        <Button type='submit' className='float-right '>save</Button> 
      </form>
      
      <Editor
    height="40vh"
    theme='vs-dark'
    defaultLanguage="javascript"
    defaultValue={code}
    onChange={handelCodeChange}
   // onMount={handleEditorDidMount}
  />
        

  </div>
  )
}

export default editSnippet