<template>
    <div class="px-[10px] font-medium duration-700 hover:bg-[#bde4e0] hover:text-[#1b1b1b] h-[32px] bg-[#009688] cursor-pointer content-center rounded-[5px] text-white text-center text-sm">
        {{ buttonName }}
    </div>
</template>

<script setup>
const props = defineProps(["buttonName"])

</script>

<style scoped>

</style>