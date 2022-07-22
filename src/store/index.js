import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    samplePostCard: [
      {postTitle: 'Blog Card 1', postCoverPhoto: 'stock-1', postDate: 'July 21 2022'},
      {postTitle: 'Blog Card 2', postCoverPhoto: 'stock-2', postDate: 'July 21 2022'},
      {postTitle: 'Blog Card 3', postCoverPhoto: 'stock-3', postDate: 'July 21 2022'},
      {postTitle: 'Blog Card 4', postCoverPhoto: 'stock-4', postDate: 'July 21 2022'},
    ],
    editPost: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload
      console.log(state.editPost)
    }
  },
  actions: {
  },
  modules: {
  }
})
