import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class Category {
    @Field(type => ID)
    _id: string;

    @Field()
    name: string;

    @Field()
    description: string;
}
