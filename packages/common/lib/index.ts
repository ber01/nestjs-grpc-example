import { join } from 'path'

export * from './generated'

export const articleProtoPath = join(__dirname, './proto/article.proto')
export const userProtoPath = join(__dirname, './proto/user.proto')
