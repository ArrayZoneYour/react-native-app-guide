import { Model } from 'react-model'
import { getPosts } from '../utils/request'

const model = {
  state: {
    posts: [],
  },
  actions: {
    get: async () => {
      const posts = await getPosts()
      return state => {
        state.posts = posts
      }
    },
  },
}

export const { useStore } = Model(model)
