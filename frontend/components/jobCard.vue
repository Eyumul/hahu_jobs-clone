<template>
    <div class="bg-white h-full p-5 space-y-4 flex flex-col justify-between hover:ring-[#009688] hover:ring-1 cursor-pointer rounded-[10px]">
        <div class="items-center space-x-2 text-[#009688] flex justify-between">
            <div class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-3 md:w-4" data-v-18c7c45a=""><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <p class="text-sm">{{ timeLeft }}</p>
            </div>
            <div class="flex items-center space-x-4 px-4 py-1 border-[1px] border-[#009688] content-center rounded-[7px] text-[#009688]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
                <p class="text-second text-base ">Save</p>
            </div>
        </div>
        <div class="flex items-center space-x-8 ">
            <div class="flex items-center flex-col w-[25%] space-y-10">
                <NuxtImg :src="companyLogo"/>
                <p class="text-second text-sm xl:text-lg">{{ companyName }}</p>
            </div>
            <div class="flex flex-col space-y-4">
                <p class="text-second font-bold text-base xl:text-xl">{{ jobTitle }}</p>
                <div class="flex space-x-2 items-center">
                    <NuxtImg :src="sectorvector" class="size-5"/>
                    <p class="text-second text-sm xl:text-lg">{{ sector }}</p>
                </div>
                <div class="flex space-x-2 items-center">
                    <NuxtImg src="job-type.svg" class="size-5"/>
                    <p class="text-second text-sm xl:text-lg">{{ subsector }}</p>
                </div>
                <div class="flex space-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-4 md:w-5 mr-1.5 fill-[#009688]" data-v-18c7c45a=""><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                    <p class="text-second text-sm xl:text-lg">{{ location }}</p>
                </div>
                <div class="flex space-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-4 md:w-5 mr-2 text-[#009688]" data-v-18c7c45a=""><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                    <p class="text-second text-sm xl:text-lg">{{ year }}</p>
                </div>
                <div class="flex space-x-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-4 sm:w-5 mr-2 text-[#009688]" data-v-18c7c45a=""><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                    <p class="text-second text-sm xl:text-lg">{{ position }} Positions</p>
                </div>
            </div>
        </div>
        <div class="flex">
            <div class="mx-8 flex justify-center items-center space-x-2 px-4 bg-prime rounded-2xl text-white">
                <NuxtImg src="time-person.svg" class="size-5"/>
                <p class="text-sm xl:text-xl">{{ personTime }}</p>
            </div>
        </div>
        <div class="h-[0.5px] w-full bg-second-light"></div>
        <p class="text-second text-xs xl:text-lg">{{ jobDescripton }}</p>
        <div class="flex justify-center space-x-4">
            <div class="flex items-center space-x-4 px-[10px] xl:px-[20px] hover:bg-[#bde4e0] hover:text-second h-[40px] bg-white cursor-pointer content-center rounded-[5px] text-prime border-[1px] border-prime text-center">
                <p class="text-xs xl:text-base font-medium">Read More</p>
            </div>
            <div class="flex items-center space-x-4 px-[10px] xl:px-[20px] hover:bg-[#bde4e0] hover:text-second h-[40px] bg-prime cursor-pointer content-center rounded-[5px] text-white border-[1px] border-prime text-center">
                <p class="text-xs xl:text-base font-medium">Apply Now</p>
            </div>
        </div>
        <div class="flex text-second items-center justify-between">
            <div class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <p>{{ view }}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-5 h-5 md:w-6 md:h-6 outlineReactiveIcon" data-v-18c7c45a=""><path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["timeLeft", "jobTitle","sectorvector", "sector","subsector", "location","year","position","companyLogo","companyName","personTime","wage","jobDescripton","view"])
</script>

<style>

</style>