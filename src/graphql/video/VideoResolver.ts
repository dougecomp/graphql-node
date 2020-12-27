import { Resolver, Query, Arg, Field, Mutation, InputType } from 'type-graphql'
import { VideoModel } from '../../models/VideoModel'
import { Category } from '../category/Category'
import { Video } from './Video'

@InputType()
class VideoInput {
    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    category: Category;
}

@Resolver(Video)
class VideoResolver {
  @Query(() => [Video])
  async videos () {
    const videos = VideoModel.find().lean().exec()
    return videos
  }

  @Mutation(() => Video)
  async createVideos (
    @Arg('videoInput') videoInput: VideoInput
  ) {
    const category = await VideoModel.create(videoInput)
    return category
  }
}

export { VideoResolver }
