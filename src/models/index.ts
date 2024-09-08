import { model, models, Schema } from 'mongoose'

interface IStory { 
    story: Story
}

const StorySchema = new Schema<IStory>( 
    { 
        story: { 
            type: Object, 
            required: true, 
        },
    },
    { timestamps: true }
)

// creates DB collection
export const StoryModel = models.story || model<IStory>("Story", StorySchema)