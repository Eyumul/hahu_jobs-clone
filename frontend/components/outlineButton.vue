<template>
    <div class="flex items-center space-x-1 sm:space-x-2 lg:space-x-4 px-[4px] sm:px-[8px] lg:px-[18px] hover:bg-[#009688] hover:text-white h-[28px] lg:h-[50px] border-[1px] border-[#009688] cursor-pointer content-center rounded-[5px] text-[#009688] text-center">
        <p class="lg:text-[15px] sm:text-[12px] text-[10px] font-medium">{{ buttonName }}</p>
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps(["path","buttonName"])
</script>

<style>

</style>