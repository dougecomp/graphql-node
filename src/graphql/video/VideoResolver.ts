import { Resolver, Query, Arg, Field, Mutation } from 'type-graphql'
import { VideoModel } from '../../models/VideoModel'
import { Video } from './Video'

class VideoInput {
    @Field()
    name: String;

    @Field()
    description: String;

    @Field()
    category: string;
}

@Resolver(Video)
class VideoResolver {
  @Query(() => [Video])
  async videos () {
    const videos = VideoModel.find().lean().exec()
    return videos
  }

  @Mutation(() => Video)
  async createVideos (@Arg('videoInput') videoInput: VideoInput) {
    const category = await VideoModel.create(videoInput)
    return category
  }
}

export { VideoResolver }
