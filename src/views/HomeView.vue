<template class="h-full w-full">
  <div class="flex flex-col justify-center items-center pt-10 space-y-2 h-52">
    <img src="http://www.clker.com/cliparts/4/O/N/0/s/p/blue-logo-flame-md.png" class="object-fit h-16 w-16" />
    <span class="text-white font-bold text-3xl">INVOXI {{ userStore.user.name }}</span>
    <span class="text-gray-300/70 text-sm"> VERSION 1.0.0</span>
  </div>
  <div class="flex w-full justify-center items-center mt-24">
    <div class="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 px-2">
      <router-link :to="{ name: 'login' }">
        <div class="bg-slate-800 relative">
          <!-- <div class="absolute left-0 top-0 h-16 w-16">

          <div
            class="absolute left-[-34px] top-[32px] w-[170px] transform -rotate-45 bg-gray-600 text-center text-white font-semibold py-1">
            Popular</div>

        </div> -->
          <div class="flex text-white flex-col p-5 space-y-2">
            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25">
              </path>
            </svg>
            <div class="pt-5 text-sm"> OVERVIEW </div>
            <span class="text-gray-500 text-sm pr-20"> Business Summary </span>
          </div>
        </div>
      </router-link>
      <router-link :to="{ name: 'loginone' }">
      <div class="bg-slate-800 ">
        <div class="flex text-white flex-col p-5 space-y-2">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25">
            </path>
          </svg>
          <div class="pt-5 text-sm"> Login One </div>
          <span class="text-gray-500 text-sm pr-20"> View sales </span>
        </div>
      </div>
    </router-link>
    <router-link :to="{ name: 'logintwo' }">
      <div class="bg-slate-800 ">
        <div class="flex text-white flex-col p-5 space-y-2">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25">
            </path>
          </svg>
          <div class="pt-5 text-sm"> Login Two </div>
          <span class="text-gray-500 text-sm pr-20"> Manage Customers </span>
        </div>
      </div>
    </router-link>
      <div class="bg-slate-800 ">
        <div class="flex text-white flex-col p-5 space-y-2">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25">
            </path>
          </svg>
          <div class="pt-5 text-sm"> PAYMENTS IN </div>
          <span class="text-gray-500 text-sm pr-20"> Customer Payments </span>
        </div>
      </div>
      <div class="bg-slate-800 ">
        <div class="flex text-white flex-col p-5 space-y-2">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25">
            </path>
          </svg>
          <div class="pt-5 text-sm"> EMPLOYEES </div>
          <span class="text-gray-500 text-sm pr-20"> Manage Employees </span>
        </div>
      </div>
      <div class="bg-slate-800 ">
        <div class="flex text-white flex-col p-5 space-y-2">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25">
            </path>
          </svg>
          <div class="pt-5 text-sm"> SALARY PAYOUTS </div>
          <span class="text-gray-500 text-sm pr-20"> Employee salary </span>
        </div>
      </div>
      <div class="bg-slate-800 ">
        <div class="flex text-white flex-col p-5 space-y-2">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25">
            </path>
          </svg>
          <div class="pt-5 text-sm"> INVESTORS </div>
          <span class="text-gray-500 text-sm pr-20"> Money Lenders </span>
        </div>
      </div>
      <div class="bg-slate-800 ">
        <div class="flex text-white flex-col p-5 space-y-2">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25">
            </path>
          </svg>
          <div class="pt-5 text-sm"> INVESTOR PAYOUTS </div>
          <span class="text-gray-500 text-sm pr-20"> Monthly Settlement </span>
        </div>
      </div>
      <div class="bg-slate-800 ">
        <div class="flex text-white flex-col p-5 space-y-2">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25">
            </path>
          </svg>
          <div class="pt-5 text-sm"> REPORTS </div>
          <span class="text-gray-500 text-sm pr-20"> Business insight </span>
        </div>
      </div>
      <div class="bg-slate-800 ">
        <div class="flex text-white flex-col p-5 space-y-2">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25">
            </path>
          </svg>
          <div class="pt-5 text-sm"> MORE </div>
          <span class="text-gray-500 text-sm pr-20"> Extra modules </span>
        </div>
      </div>
      <div class="bg-slate-800 ">
        <div class="flex text-white flex-col p-5 space-y-2">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25">
            </path>
          </svg>
          <div class="pt-5 text-sm"> EXPENSES </div>
          <span class="text-gray-500 text-xs pr-20"> Manage office expenses </span>
        </div>
      </div>
      <div class="bg-slate-800 ">
        <div class="flex text-white flex-col p-5 space-y-2">
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25">
            </path>
          </svg>
          <div class="pt-5 text-sm"> SERVICES </div>
          <span class="text-gray-500 text-sm pr-20"> Manage Items </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "../stores/user";

export default {
  setup() {
    const userStore = useUserStore();
    return { userStore }
  },
}
</script>