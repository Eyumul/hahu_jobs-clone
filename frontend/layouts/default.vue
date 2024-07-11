<template>
    <div class="font-sans">
        <div class="fixed w-full bg-[#f1f1f1] backdrop-filter backdrop-blur bg-opacity-50">
            <div class="flex justify-between h-[70px] mx-[8%] px-[64px]">
                <div class="self-center">
                    <NuxtLink to="./"><img src="../public/logo.png"/></NuxtLink>
                </div>
                <div class="flex space-x-8 text-[15px] text-[#444f60] items-end self-center">
                    <NuxtLink to="./" class="text-[#009688] cursor-pointer font-black">Home</NuxtLink>
                    <NuxtLink to="./#about" class="hover:text-[#009688] hover:text-[16px] cursor-pointer">About</NuxtLink>
                    <div label="Open" @click="isOpen = true" class="hover:text-[#009688] hover:text-[16px] cursor-pointer">Jobs</div>
                    <NuxtLink to="./#postVacancy" class="hover:text-[#009688] hover:text-[16px] cursor-pointer">Post Vacancy</NuxtLink>
                    <NuxtLink>Contact</NuxtLink>
                    <NuxtLink class="mb-[1px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 mb-[2px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    </NuxtLink>
                    <div class="flex space-x-4">
                        <smallButton buttonName="Login"/> 
                        <p class="text-[#1b1b1b] text-[11px] font-semibold self-end mb-[1px]">Or</p>
                        <smallButton buttonName="Sign up"/>
                    </div>
                </div> 
            </div>
            <UModal v-model="isOpen" :ui="{strategy: 'override',width:'w-[92%]',height:'h-[800px]',background:'bg-white'}" prevent-close>
                 <div class="flex flex-col space-y-4 text-[#444f60] p-12">
                    <div class="flex justify-between">
                        <div class="flex items-center space-x-8">
                            <div  @click="isOpen = false" class="cursor-pointer hover:bg-[#bde4e0] p-2 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <p class="text-[20px] font-bold">Job by sector</p>
                        </div>
                        <OutlineButton buttonName="View All">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </OutlineButton>
                    </div>
                    <div class="flex flex-wrap">
                        <JobSectorCard vectorSource="natural-science.svg" sector="Natural Science" openPositionCounts="28" sectorDescription="Natural science concerned with the description, prediction, and unde..."/>
                    </div>
                 </div>
            </UModal>
        </div>
        <slot></slot>
    </div>
</template>

<script setup>
const isOpen = ref(false)
</script>

<style>
</style>