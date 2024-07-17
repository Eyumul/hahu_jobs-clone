<template>
    <div class="bg-[#f1f1f1]">
        <div class="bg-[#f1f1f1] w-full flex flex-col">
            <p class="font-body font-black ml-2 mt-4 text-sm xl:text-xl text-second dark:text-primary-dark-2 mb-4"> Showing 31 of 31 posts </p>
            <div class="grid grid-cols-1 ml-2 md:grid-cols-2 lg:grid-cols-3 gap-[12px] pr-4">
                <NuxtLink to="./jobOne">
                    <jobCard timeLeft="3 Day Left" jobTitle="Purchaser" sectorvector="business.svg" sector="Business" subsector="Purchasing & Supply Management" location="Addis Ababa" year="3 years" position="1" companyLogo="company_three_logo.png" companyName="KK PLC" personTime="Full time" jobDescripton="Bachelor's Degree in Purchasing Management, Procurement and Supply Management, or in a related field of study with relevant work experience Duties &..." view="2"></jobCard>
                </NuxtLink>
                <jobCard timeLeft="7 Day Left" jobTitle="Purchaser" sectorvector="business.svg" sector="Business" subsector="Purchasing & Supply Management" location="Addis Ababa" year="2 years - 4 years" position="2" companyLogo="company_one_logo.jpeg" companyName="El-Hadar Engineering..." personTime="Full time" jobDescripton="BA Degree or Diploma in Logistics & Supply Chain Management, or in a related field with relevant work experience Duties & Responsibilities: - Reconciling..." view="14.1k"></jobCard>
                <jobCard timeLeft="6 Day Left" jobTitle="Auxiliary Machine Mechanic" sectorvector="engineering.svg" sector="Engineering" subsector="Automotive Manufacturing" location="Addis Ababa" year="3 years - 7 years" position="3" companyLogo="company_two_logo.png" companyName="Ethiopian Engineering..." personTime="Full time" jobDescripton="Demonstrated experience as a general Machine Mechanic Duties & Responsibilities: - Responsible for inspecting and repairing vehicles, machinery, and light..." view="16.6k"></jobCard>

            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
        layout:"job"
    })

</script>

<style>

</style>