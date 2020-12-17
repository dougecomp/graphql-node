import { Field, ObjectType } from 'type-graphql'

@ObjectType()
class Video {
    @Field()
    _id: string;

    @Field()
    name: string;

    @Field()
    description: string;
}

export { Video }
