<template>
    <div class="grid grid-cols-3 xl:grid-cols-4 mt-[50px] gap-4 pr-6 pl-4 sm:pr-12 sm:pl-4 g-second-lighter w-full text-second dark:text-second-light">
        <div class="col-span-3 flex flex-col bg-white dark:bg-second-dark rounded-lg p-4 sm:p-10">            
            <div class="grid grid-cols-1 justify-items-center sm:flex space-x-10 items-center">
                <div class="rounded-xl flex flex-col justify-center bg-second-lighter dark:bg-second p-2 size-[180px] sm:size-[220px]">
                    <NuxtImg src="company_three_logo.png" class="p-4 w-[100%]"/>
                </div>
                <div class="flex flex-col space-y-2">
                    <p class="text-xl xl:-text-3xl text-second dark:text-white font-bold">Purchaser</p>
                    <p class="text-base text-second">KK PLC</p>
                    <div class="flex text-xs xl:text-base gap-2 items-center ">
                        <NuxtImg src="business.svg" class="size-8 mr-2"/>
                        <p class="text-black dark:text-second-light">Business</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        <p class="text-black dark:text-second-light dark:text-second-light">Purchasing & Supply Management</p>
                    </div>
                    <div class="flex gap-2 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-5 md:w-7 mr-3 fill-prime"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                        <p class="text-xs xl:text-base  text-black dark:text-second-light">Addis Ababa</p>
                    </div>
                    <div class="flex gap-2 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-6 sm:w-7 mr-3 text-prime"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                        <p class="text-xs xl:text-base text-black dark:text-second-light">3 years</p>
                    </div>
                    <div class="flex gap-2 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-6 sm:w-7 mr-3 text-prime"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                        <p class="text-xs xl:text-base text-black dark:text-second-light">1 Position</p>
                    </div>
                    <div class="flex gap-2 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-5 md:w-7 mr-3 fill-prime"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                        <p class="text-xs xl:text-base text-black dark:text-second-light">10/07/2024 - 15/07/2024</p>
                    </div>
                    <div class="flex gap-2 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-5 md:w-7 mr-3 fill-prime"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
                        <p class="text-xs xl:text-base text-black dark:text-second-light">2</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-between my-12">
                <div class="flex justify-center items-center space-x-2 px-4 py-[2px]  bg-prime rounded-3xl text-white">
                    <NuxtImg src="time-person.svg" class="size-5"/>
                    <p class="text-sm xl:text-xl">Full Time</p>
                </div>
                <div class="flex justify-center items-center space-x-2 px-4 border-4 bg-transparent border-prime rounded-3xl text-prime">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-4 xl:w-6 mr-2"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>
                    <p class="text-sm xl:text-xl font-bold">Share</p>
                </div>
            </div>
            <div class="flex text-sm sm:text-base xl:text-xl justify-between sm:pr-[40%] border-b-[1px] border-second-light dark:border-[#3e495a]">
                <div @click="selectedComponent = 'post'" :class="{'border-b-[1px] border-prime text-prime' : selectedComponent == 'post',' cursor-pointer font-semibold  py-4 sm:w-[12%]' : true}">
                    <p class="text-center">Post</p>
                </div>
                <div @click="selectedComponent = 'kpi'" :class="{'border-b-[1px] border-prime text-prime' : selectedComponent == 'kpi',' cursor-pointer font-semibold  py-4 sm:w-[12%]' : true}">
                    <p class="text-center">KPI</p>
                </div>
                <div @click="selectedComponent = 'analysis'" :class="{'border-b-[1px] border-prime text-prime' : selectedComponent == 'analysis',' cursor-pointer font-semibold  py-4 sm:w-[12%]' : true}">
                    <p class="text-center">Analysis</p>
                </div>
            </div>
            <div v-if="selectedComponent == 'post'">
                <Post/>
            </div>
            <div v-else-if="selectedComponent == 'kpi'">
                <Kpi/>
            </div>
            <div v-else-if="selectedComponent == 'analysis'">
                <Analysis/>
            </div>
        </div>
        <div class="col-span-3 xl:col-span-1 grid grid-cols-2 xl:flex xl:flex-col gap-4">
            <div class="col-span-2 sm:col-span-1 justify-items-center flex flex-col justify-center p-3 bg-white dark:bg-second-dark rounded-lg">
                <p class="text-base sm:text-lg lg:text-xl font-semibold text-prime self-end">AD</p>
                <NuxtImg src="ad_two.png" class="w-full"/>
                <p class="text-xs sm:text-sm lg:text-base py-4 text-second dark:text-white font-light">HaHuJobs the largest data-driven job matching and labor market information platform in Ethiopia. With various service deployments to address the Ethiopian labor market needs; we stand at the forefront of the local digital job matching industry.</p>
                <div class="flex self-end"><SmallButton buttonName="Know more"/></div>
            </div>
            <p class="col-span-2 mt-6 font-black text-base xl:text-2xl 2xl:text-xl text-secondary dark:text-secondary-8 ml-2"> Related Jobs </p>
            <RelatedJobs class="col-span-2 self-center sm:col-span-1" />
            <RelatedJobs class="col-span-2 sm:col-span-1"/>
            <RelatedJobs class="col-span-2 sm:col-span-1"/>
            <RelatedJobs class="col-span-2 sm:col-span-1"/>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
        layout:"job"
    })
const selectedComponent = ref("post")

</script>

<style>

</style>