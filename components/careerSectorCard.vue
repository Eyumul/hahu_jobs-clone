<template>
    <div class="bg-white dark:bg-second-dark space-y-2 flex flex-col p-2 m-[1%] justify-center items-center w-[235px] h-[235px] cursor-pointer rounded-[10px] hover:shadow-2xl dark:hover:shadow-prime dark:hover:shadow-xl duration-500 shadow-xl">
        <NuxtImg :src="vectorSource" class="w-[96px] h-[96px]"/>
        <p class="text-xl text-center font-bold text-[#009688]">{{ sector }}</p>
        <p class="text-[#444f60] dark:text-prime-lighter text-lg">{{ openPositionCounts }} Open positions</p>
    </div>
</template>

<script setup>
const props = defineProps(["vectorSource", "sector", "openPositionCounts"])
</script>

<style>

</style>