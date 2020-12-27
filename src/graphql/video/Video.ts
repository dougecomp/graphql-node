import { ObjectId } from 'mongoose'
import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
class Video {
    @Field(type => ID)
    _id: string;

    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    category: ObjectId;
}

export { Video }
