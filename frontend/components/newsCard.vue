<template>
    <div class="bg-white m-[1%] flex flex-col justify-between hover:ring-[#009688] hover:ring-1 cursor-pointer w-[450px] rounded-[15px]">
        <NuxtImg class=" rounded-t-[15px]" :src="newsPoster"/>
        <div class="flex flex-col space-y-4 p-7">
            <div class="flex">
                <div class="text-center text-black text-xs font-semibold rounded-[20px] bg-[#80cbc4] content-center px-3 pb-1 h-[25px]">{{name}}</div>
            </div>
            <div class="text-base text-black font-semibold">{{date}}</div>
            <div class="text-2xl font-bold text-black">{{title}}</div>
            <div class="text-lg font-semibold text-[#767e8a]">{{description}}</div>
            <div class="flex justify-center pt-4">
                <bigButton buttonName="Read Post">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </bigButton>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["newsPoster","name","date","title","description"])
</script>

<style>

</style>