<template>
    <div class="cursor-pointer p-2 lg:px-5 lg:py-4 bg-[#f1f1f1] hover:bg-[#e6f5f3] gap-2 rounded-[8px] flex items-center justify-around" @mouseover="isHovered = true" @mouseleave="isHovered = false">
        <NuxtImg class="w-[25px] sm:w-[35px]  p-1 rounded-[4px] bg-[#e6f5f3]" :src="vectorSource"/>
        <div class="flex flex-col space-y-1">
            <div class="flex w-[80%] gap-3">
                <p class="text-sm xl:text-lg font-black">{{sector}}</p>
                <div class="px-[3%] py-[2%] text-xs  self-center flex flex-col justify-center font-bold rounded-xl bg-[#dcfce7] text-[#54bdac]">{{openPositionCounts}}</div>
            </div>
            <p class="text-[#444f60] text-sm xl:text-base w-[80%] font-light">{{ sectorDescription }}</p>
        </div>
        <div  :class="{'invisible': !isHovered, 'hidden lg:block text-[#009688]': true}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                <path fill-rule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clip-rule="evenodd" />
            </svg>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["vectorSource", "sector", "openPositionCounts","sectorDescription"])
const isHovered = ref(false);
</script>

<style>

</style>