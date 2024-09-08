"use server"

import { StoryModel } from '@/models'
import { ConnectToDB } from '@/lib/mongodb'

export async function fetchStoryById(id: string) { 
    await ConnectToDB()

    const story = await StoryModel.findById(id)

    if(!story) { 
        return null 
    }

    return story
}