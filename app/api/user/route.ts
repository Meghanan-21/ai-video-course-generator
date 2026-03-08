import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/config/db";
import { users as usersTable } from "@/src/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req:NextRequest){
    const user=await currentUser();
//if user already exists in the databasemeans user will return some data
const users=await db.select().from(usersTable).where(eq(usersTable.email,user?.primaryEmailAddress?.emailAddress as string))
//if no then craete a new user in the database
if(users?.length==0){
    const newUser=await db.insert(usersTable).values({
        email:user?.primaryEmailAddress?.emailAddress as string,
        name:user?.fullName as string
    }).returning()
    return NextResponse.json(newUser[0]);
}
return NextResponse.json(users[0]);
}