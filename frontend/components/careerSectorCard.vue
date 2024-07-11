<template>
    <div class="bg-white space-y-2 flex flex-col p-2 m-[1%] justify-center items-center w-[215px] h-[215px] cursor-pointer rounded-[10px] hover:shadow-2xl shadow-xl">
        <NuxtImg :src="vectorSource" class="w-[80px] h-[80px]"/>
        <p class="text-base text-center font-bold text-[#009688]">{{ sector }}</p>
        <p class="text-[#444f60] text-sm font-light">{{ openPositionCounts }} Open positions</p>
    </div>
</template>

<script setup>
const props = defineProps(["vectorSource", "sector", "openPositionCounts"])
</script>

<style>

</style>