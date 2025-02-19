<template>
    <div class="flex items-center duration-700 space-x-4 px-[18px] hover:bg-[#bde4e0] hover:text-[#1b1b1b] h-[40px] bg-[#009688] cursor-pointer content-center rounded-[5px] text-white text-center">
        <p class="text-[15px] font-medium">{{ buttonName }}</p>
        <slot/>
    </div>
</template>

<script setup>
const props = defineProps(["path","buttonName"])
</script>

<style>

</style>