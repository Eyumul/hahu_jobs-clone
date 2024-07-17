<template>
    <div class="bg-white p-7 m-[2%] w-[420px] flex flex-col justify-center hover:ring-[#009688] hover:ring-1 cursor-pointer gap-2 rounded-[10px]">
        <NuxtImg :src="serviceVector" class="self-center w-[280px] h-[280px]"/>
        <p class="mt-8 text-black text-xl font-black">{{ service }}</p>
        <p class="mt-3 text-[#566a88] text-base font-thin">{{ serviceDescription }}</p>
        <Nuxtlink class=" text-[#009688] font-semibold flex items-center space-x-2 self-end mr-2">
            <p>Explore More</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
        </Nuxtlink>
    </div>
</template>

<script setup>
const props = defineProps(["service", "serviceDescription", "serviceVector"])
</script>

<style>

</style>