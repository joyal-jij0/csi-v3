'use server'
import prisma from "./lib/prisma";


export default async function getEvents(){
   const events = await prisma.event.findMany()
   console.log(events)
   return events
}