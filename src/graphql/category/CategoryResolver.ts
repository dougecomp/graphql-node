import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql'
import { CategoryModel } from '../../models/CategoryModel'
import { Category } from './Category'

@InputType()
class CategoryInput {
    @Field()
    name: String;

    @Field()
    description: String;
}

@Resolver(Category)
class CategoryResolver {
  @Query(() => [Category])
  async categories () {
    const categories = await CategoryModel.find().lean().exec()
    return categories
  }

  @Mutation(() => Category)
  async createCategory (@Arg('categoryInput') categoryInput: CategoryInput) {
    const category = await CategoryModel.create(categoryInput)
    return category
  }
}

export { CategoryResolver }
