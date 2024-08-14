import type { Post, User, Vote, Comment, Community } from '@prisma/client'

export type extendedPost = Post & {
  community: Community
  votes: Vote[]
  author: User
  comments: Comment[]
}