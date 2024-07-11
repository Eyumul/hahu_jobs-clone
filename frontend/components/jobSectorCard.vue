<template>
    <div class="p-7 bg-[#f1f1f1] hover:bg-[#e6f5f3] rounded-[8px] flex space-x-2 items-center justify-center">
        <NuxtImg class="w-[35px] p-1 rounded-[4px] bg-[#e6f5f3] h-[35px]" :src="vectorSource"/>
        <div class="flex flex-col space-y-1">
            <div class="flex space-x-3">
                <p class="text-[20px] font-bold">{{sector}}</p>
                <div class="p-[8px] text-xs  self-center flex flex-col justify-center h-[18px] font-semibold rounded-lg bg-[#dcfce7] text-[#54bdac]">{{openPositionCounts}}</div>
            </div>
            <p class="text-[#444f60] w-[300px] font-thin">{{ sectorDescription }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["vectorSource", "sector", "openPositionCounts","sectorDescription"])
</script>

<style>

</style>