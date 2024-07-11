<template>
    <div class="flex items-center space-x-4 px-[18px] hover:bg-[#009688] hover:text-white h-[50px] border-[1px] border-[#009688] cursor-pointer content-center rounded-[5px] text-[#009688] text-center">
        <p class="text-[15px] font-medium">{{ buttonName }}</p>
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps(["path","buttonName"])
</script>

<style>

</style>