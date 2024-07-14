<template>
    <div>
        <div v-if="!isclicked" class="flex my-2 mx-1 items-center text-[15px] space-x-1 cursor-pointer px-2 py-1 rounded-2xl text-second ring-1 ring-prime bg-lighter hover:bg-prime-light" @click="isclicked = !isclicked">
            <p>{{ buttonName }}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="transition duration-1000 ease-in-out size-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </div>
        <div v-else class="flex my-2 mx-1 items-center text-[15px] space-x-1 cursor-pointer px-2 py-1 rounded-2xl text-second ring-1 ring-prime bg-prime" @click="isclicked = !isclicked">
            <p>{{ buttonName }}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="transition duration-1000 ease-in-out size-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>

    </div>
</template>

<script setup>
const props = defineProps(["buttonName"])
const isclicked = ref(false);
</script>

<style>

</style>