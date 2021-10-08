/* eslint-disable */
import Long from 'long'
import _m0 from 'protobufjs/minimal'
import { User } from './user'

export const protobufPackage = 'article'

export interface Article {
  id: string
  name: string
  email: string
  user: User | undefined
}

export const ARTICLE_PACKAGE_NAME = 'article'

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}
