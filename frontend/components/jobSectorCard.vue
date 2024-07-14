<template>
    <div class="cursor-pointer px-5 py-4 m-2 bg-[#f1f1f1] hover:bg-[#e6f5f3] space-x-2 rounded-[8px] flex items-center justify-center" @mouseover="isHovered = true" @mouseleave="isHovered = false">
        <NuxtImg class="w-[35px] p-1 rounded-[4px] bg-[#e6f5f3] h-[35px]" :src="vectorSource"/>
        <div class="flex flex-col space-y-1">
            <div class="flex space-x-3">
                <p class="text-[20px] font-bold">{{sector}}</p>
                <div class="p-[8px] text-xs  self-center flex flex-col justify-center h-[18px] font-bold rounded-lg bg-[#dcfce7] text-[#54bdac]">{{openPositionCounts}}</div>
            </div>
            <p class="text-[#444f60] w-[270px] font-light">{{ sectorDescription }}</p>
        </div>
        <div  :class="{'invisible': !isHovered, 'text-[#009688]': true}">
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