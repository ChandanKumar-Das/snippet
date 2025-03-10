"use server"

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

export const saveSnippet = async (id:string, code: string)=>{
    await prisma.snippet.update({
        where:{
            id
        },
        data:{
            code
        }
    })
    redirect(`/snippets/${id}`)
       
    }

    export async function handelDeleteClick(id:string){
            await prisma.snippet.delete({
                where:{
                    id
                }
            })
            redirect("/")
        }


    export async function createSnippet(previusstate:{message:string},formData: FormData) {

        const title = formData.get("title") as string;
        const code = formData.get("code") as string;
    
        if (!title || !code) {
           return {message: 'two filds are requirs'}
        }
    
        const snippet = await prisma.snippet.create({
            data: {
                title,
                code,
            },
        });
    
        console.log(snippet);
        redirect("/");
    }
