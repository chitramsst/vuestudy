<template class="h-full w-full">
    <div class="flex flex-col justify-center items-center pt-10 space-y-2 h-52">
        <img src="http://www.clker.com/cliparts/4/O/N/0/s/p/blue-logo-flame-md.png" class="object-fit h-16 w-16" />
        <span class="text-white font-bold text-3xl">INVOXI</span>
        <span class="text-gray-300/70 text-sm"> VERSION 1.0.0</span>
    </div>
    <div class="w-full flex justify-center mt-10 p-5">
        <div
            class="bg-gray-300/20 flex shadow-md h-auto item-center justify-center pt-10 w-[50%] align-middle rounded-sm  space-y-10">
            <div class="flex flex-col w-full p-5">
                <!-- <p class="text-white/50 font-semibold text-xl"> LOGIN </p> -->
                <form class="w-full">
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">
                            email</label>
                        <input type="email" id="email" v-model="username"
                            class="shadow-sm bg-gray-700 border border-gray-800 text-white text-sm rounded-lg focus:ring-0 focus:outline-none focus:border-none  w-full p-2.5"
                            placeholder="email" :class="{ 'border-red-500': v$.username.$error }">
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">
                            password</label>
                        <input type="email" id="email" v-model="password"
                            class="shadow-sm bg-gray-700 border border-gray-800 text-white text-sm rounded-lg focus:ring-0 focus:outline-none focus:border-none w-full p-2.5"
                            placeholder="password" required>
                    </div>
                    <div class="mb-6  w-full flex justify-center">
                        <button class="bg-gray-900 px-7 py-2 text-white/70 rounded-md text-sm"
                            @click.prevent="loginOnline">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { useUserStore } from "../stores/user";
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
    setup() {
        const userStore = useUserStore();
        return { userStore, v$: useVuelidate() }
    },
    data() {
        return {
            username: '',
            password: ''
        }
    },
    validations() {
        return {
            username: { required }, // Matches this.firstName
            password: { required }, // Matches this.lastName
        }
    },
    methods: {
        async login() {
            return new Promise(async (resolve, reject) => {
                await window.ipcRenderer.invoke('database-function', {
                    target: 'login-user',
                    data: { username: this.username, password: this.password }
                })
                    .then(async (response) => {
                        if (response.success == true) {
                            this.userStore.user = response.user;
                            console.log(this.userStore.user);
                            this.$router.push({ name: 'home' })
                            resolve(true);
                        }
                        resolve(false)
                    })
                resolve(false)
            })
        },
        async loginOnline() {
            const result = await this.v$.$validate()
            // //         this.axios.get('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            // //     console.log(response.data)
            // //   })
            // if(!result) {

            // }
            if(!result){
                return;
            }
            console.log(result);
            this.axios.get("admin/item-category/").then((response) => {
                console.log(response);
            })
            // or
            //   this.$http.get(api).then((response) => {
            //     console.log(response.data)
            //   })
        }
    },
}
</script>