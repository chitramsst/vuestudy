import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: []
  }),
  actions: {
  getUser(){
    return this.user;
  }
  }
})