"use server"

import { StoryModel } from "@/models"
import { ConnectToDB } from "@/lib/mongodb"

export async function fetchStories() { 
    await ConnectToDB() 

    const stories = await StoryModel.find().sort({ createdAt: -1 })

    if(!stories) { 
        return [] 
    }

    return stories
}