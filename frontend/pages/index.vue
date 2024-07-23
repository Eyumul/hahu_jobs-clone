<template>
    <div class="h-screen">
        <div class="bg-[#f1f1f1] dark:bg-second-darker pt-[7rem] pb-[5rem] flex flex-col">
            <div class="w-full px-[8%] dots space-y-5">
                <p class="text-center !font-[900] text-3xl sm:text-5xl text-[#444f60] dark:text-white">All Ethiopian Jobs in One Place.</p>
                <p class="text-center font-bold text-[#444f60] dark:text-prime-lighter text-sm sm:text-lg">Find career opportunities in Ethiopia</p>
                <div class="md:flex-nowrap xl:flex flex flex-wrap justify-center m-[8%] gap-3 md:gap-1">
                    <input placeholder="Job title, city or keyword..." class="text-base sm:text-xl text-second pl-4 sm:pl-14 font-bold bg-white rounded-[8px] md:rounded-r-[0px] ring-1 border-0 focus:ring-second-light focus:hover:ring-prime focus:w-full xl:focus:w-[45%] duration-700 hover:ring-[#009688] ring-[#d1d5db] dark:bg-second hover:focus:dark:ring-second-darker focus:dark:ring-second-darker dark:ring-0 dark:text-white h-[50px] w-[80%] xl:w-[35%]" type="text"/>
                    <div class="flex cursor-pointer border- border-prime rounded-[8px] md:rounded-l-[0px] h-[50px] px-3 xl:px-2 text-white font-bold justify-center items-center space-x-2 text-xs xl:text-lg text-center bg-[#009688]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4 sm:size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <p>Find Job</p>
                    </div>
                </div>
                <div class="flex justify-center space-x-16">
                    <div class="flex flex-col items-center">
                        <p class="text-[#009688] sm:text-4xl text-2xl font-bold">817</p>
                        <p class="text-[#444f60] dark:text-prime-lighter sm:text-lg text-sm font-bold">Jobs</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p class="text-[#009688] sm:text-4xl text-2xl font-bold">333</p>
                        <p class="text-[#444f60] dark:text-prime-lighter sm:text-lg text-sm font-bold">Companies</p>
                    </div>
                    <div class="flex flex-col items-center">
                        <p class="text-[#009688] sm:text-4xl text-2xl font-bold">14</p>
                        <p class="text-[#444f60] dark:text-prime-lighter sm:text-lg text-sm font-bold">Sectors</p>
                    </div>
                </div>
            </div>
            <div>

                <NuxtImg src="../public/people_vector.svg" class="-mt-[1%] sm:mt-[8%] md:-mt-[3%]"/>
            </div>
            <div class="space-y-4 mx-[7%]">
                <p class="text-center font-black text-3xl sm:text-5xl text-[#444f60] dark:text-white pt-8">Career sectors</p>
                <p class="text-center font-semibold text-[#566a88] dark:text-prime-lighter text-sm sm:text-lg">Based on the local labor market trend in Ethiopia we categorize our vacancies into fourteen sectors</p>
                <div class="flex flex-wrap justify-center">
                    <careerSectorCard vectorSource="../public/natural-science.svg" sector="Natural Science" openPositionCounts="28"/>
                    <careerSectorCard vectorSource="../public/business.svg" sector="Business" openPositionCounts="279"/>
                    <careerSectorCard vectorSource="../public/creative-art.svg" sector="Creative Arts" openPositionCounts="22"/>
                    <careerSectorCard vectorSource="../public/education.svg" sector="Education" openPositionCounts="11"/>
                    <careerSectorCard vectorSource="../public/hospitality.svg" sector="Hospitality" openPositionCounts="12"/>
                    <careerSectorCard vectorSource="../public/low-and-medium-skilled-work.svg" sector="Low and Medium Skilled Worker" openPositionCounts="19"/>
                    <careerSectorCard vectorSource="../public/transport-and-logistics.svg" sector="Transportation & Logistics" openPositionCounts="28"/>
                    <careerSectorCard vectorSource="../public/engineering.svg" sector="Engineering" openPositionCounts="71"/>
                    <careerSectorCard vectorSource="../public/finance.svg" sector="Finance" openPositionCounts="147"/>
                    <careerSectorCard vectorSource="../public/legal-service.svg" sector="Legal Services" openPositionCounts="6"/>
                    <careerSectorCard vectorSource="../public/ict.svg" sector="ICT" openPositionCounts="35"/>
                    <careerSectorCard vectorSource="../public/health-care.svg" sector="Health Care" openPositionCounts="56"/>
                    <careerSectorCard vectorSource="../public/manufacturing.svg" sector="Manufacturing" openPositionCounts="7"/>
                    <careerSectorCard vectorSource="../public/social-science.svg" sector="Social Science" openPositionCounts="108"/>
                </div>
            </div>
            <div class="flex flex-col space-y-4 mx-[10%]">
                <p class="text-center font-black text-3xl sm:text-5xl text-[#444f60] dark:text-white pt-12">Services</p>
                <p class="text-center self-center font-semibold text-[#566a88] dark:text-prime-lighter xl:w-[1000px] text-sm sm:text-lg">HaHuJobs offers digital career profiling, job application and subscription based relevant vacancy announcement notifications to job seekers that sign up on its primary service deployment.</p>
                <div class="flex flex-wrap justify-center">
                    <serviceCard serviceVector="../public/build_career_profile.svg" service="Build Career Profile" serviceDescription="Compose your career profile with context standards and identifiers to showcase your assessed competencies in the sector of your expertise.HaHuJobs offers you a simple, clear an..."/>
                    <serviceCard serviceVector="../public/job_application.svg" service="Job Application" serviceDescription="Apply for jobs with just a few clicks, and track the progress of your applications through notifications on multiple platforms. Revolutionize your job applications with pre-prepared application..."/>
                    <serviceCard serviceVector="../public/vacancy_notification.svg" service="Vacancy Notification" serviceDescription="Take advantage of every job opportunity using our multi-platform vacancy notification services for jobseekers. Subscribe to a sector of your choice with various specific notification specifications to..."/>
                </div>
            </div>
            <div id="about" class="flex flex-wrap items-center justify-center gap-16 mx-[10%] mt-[6rem]">
                <NuxtImg class="2xl:order-last w-[600px] hover:scale-[110%] duration-500" src="hahu_robot.svg"/>
                <div class="flex flex-col w-[100%] 2xl:w-[50%] space-y-4">
                    <p class="font-black text-3xl sm:text-5xl xl:w-[600px] text-[#444f60] dark:text-white">What is unique about HaHuJobs</p>
                    <p class="font-semibold text-[#566a88] dark:text-prime-lighter text-sm sm:text-lg sm:leading-loose">HaHuJobs Primary services are deployments targeting the needs of the Ethiopian jobseeker, with both online and assisted models the platform is tool intended to assist the process of looking for a job at all levels of employment. It features vacancy aggregation and posting from various sources as well as enterprises, builds career profiles, apply for jobs, and subscribe to customized alerts for each user via a channel of their choice. HaHuJobs primary also offers standardized classification of all vacancies both sourced from HaHuJobs enterprise services and other manual and digital vacancy platforms.</p>
                    <p class="pt-[22px] font-semibold text-[#566a88 dark:text-prime-lighter] text-sm sm:text-lg sm:leading-loose">Our vacancy classification follows a combination of ILOs ISCO 8 and the O*Net occupation classification with modifications to the Ethiopian labor market trend. Each vacancy will be given a four-digit occupation taxonomy identification code to determine it's overall standard requirements in terms of skill, knowledge, ability, and expected activities.</p>
                    <p class="pt-[22px] font-semibold text-[#566a88] dark:text-prime-lighter text-sm sm:text-lg">Get Social with us !</p>
                    <div class="flex">
                        <bigButton buttonName="Explore More">
                            <svg data-slot="icon" fill="currentColor" class="size-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"></path>
                            </svg>
                        </bigButton>
                    </div>
                    <div class="flex space-x-9 pt-4">
                        <NuxtImg class="hover:scale-[110%] duration-200 size-[25px]" src="telegram.svg"/>
                        <NuxtImg class="hover:scale-[110%] duration-200 size-[25px]" src="facebook-circular.svg"/>
                        <NuxtImg class="hover:scale-[110%] duration-200 size-[25px]" src="x.svg"/>
                        <NuxtImg class="hover:scale-[110%] duration-200 size-[25px]" src="linkedin_color.svg"/>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap justify-center gap-16 items-center mx-[10%] mt-[6rem]">
                <NuxtImg class="w-[600px]  hover:scale-[110%] duration-500" src="keyboard.svg"/>
                <div class="flex flex-col w-[100%] 2xl:w-[50%] space-y-2">
                    <p class="font-black text-3xl sm:text-5xl xl:w-[600px] text-[#444f60] dark:text-white">Why choose us</p>
                    <p class="text-xl sm:text-3xl text-[#009688] pt-[12px] font-bold">Convenience</p>
                    <p class="text-sm sm:text-lg text-[#009688] pt-[4px] font-bold">You no longer look for jobs, jobs look for you</p>
                    <p class="pt-[4px] font-semibold text-[#566a88] dark:text-prime-lighter text-sm sm:text-lg sm:leading-loose">We offer aggregated, standardized and quality assure vacancy and career-related information from various digital as well as manual sources to set them into one searchable database.</p>
                    <p class="text-xl sm:text-3xl text-[#009688] pt-[12px] font-bold">Accessibility</p>
                    <p class="text-sm sm:text-lg text-[#009688] pt-[4px] font-bold">Reachable across multiple channels and platforms</p>
                    <p class="pt-[4px] font-semibold text-[#566a88] dark:text-prime-lighter text-sm sm:text-lg sm:leading-loose">Use your mobile, tablet, or desktop to access our website, mobile app, Telegram, or Facebook bots and also get personalized job alerts via your designated medium.</p>
                    <p class="text-xl sm:text-3xl text-[#009688] pt-[12px] font-bold">Ease of use</p>
                    <p class="text-sm sm:text-lg text-[#009688] pt-[4px] font-bold">Both online and offline service options.</p>
                    <p class="pt-[4px] font-semibold text-[#566a88] dark:text-prime-lighter text-sm sm:text-lg sm:leading-loose">HaHuJobs offers both in-person as well as virtual models for all its career-related service components through its employment offices across the nation and capital Addis Ababa.</p>
                </div>
            </div>
            <div id="postVacancy" class="flex flex-col items-center space-y-4 pt-24">
                <p class="text-center mx-[10%] font-black text-3xl sm:text-5xl text-[#444f60] dark:text-white">Post vacancy</p>
                <p class="text-center mx-[10%] lg:w-[800px] pt-[4px] font-semibold text-[#566a88] dark:text-prime-lighter text-sm sm:text-lg sm:leading-loose">HaHuJobs offers dedicated enterprise cloud services for a full human resource management platform with an affordable price package. Posting vacancy is completely free, and only requires to follow the below listed steps.</p>
                <div class="flex flex-wrap mx-[10%] xl:mx-2 justify-center gap-10 py-12 text-sm sm:text-base">
                    <div class="flex flex-col sm:w-[450px] items-center space-y-4">
                        <div class="size-[50px] rounded-[100%] bg-[#80cbc4] content-center text-center text-white font-semibold">1</div>
                        <p class="text-center text-[#444f60] dark:text-white font-bold">Receive</p>
                        <p class="text-[#444f60] dark:text-prime-lighter text-center font-thin">You contact us through one of our outlets with the details of your vacancy. You can click the button below to review ways to share your vacancy and review the required information we need to publish your vacancy on all our outlets.</p>
                    </div>
                    <div class="flex flex-col sm:w-[450px] items-center space-y-4">
                        <div class="size-[50px] rounded-[100%] bg-[#80cbc4] content-center text-center text-white font-semibold">2</div>
                        <p class="text-center text-[#444f60] dark:text-white font-bold">Validate</p>
                        <p class="text-[#444f60] dark:text-prime-lighter text-center font-thin">Our service officers will receive the details from your organization via the channel you communicated it in. They will review the details provided to validate all required information is available and build validate the legitimacy of the vacancy.</p>
                    </div>
                    <div class="flex flex-col sm:w-[450px] items-center space-y-4">
                        <div class="size-[50px] rounded-[100%] bg-[#80cbc4] content-center text-center text-white font-semibold">3</div>
                        <p class="text-center text-[#444f60] dark:text-white font-bold">Publish</p>
                        <p class="text-[#444f60] dark:text-prime-lighter text-center font-thin">All vacancy details will then go through our standardized categorization process for taxonomy identification and reorganization of information if required so it fits the publishing structure of our outlets, then will be approved for publishing.</p>
                    </div>
                </div>
                <bigButton buttonName="Post vacancy"/>
                <div class="flex mx-[10%] gap-8 md:gap-[50%] justify-center py-12">
                    <div class="flex flex-col space-y-2 items-center">
                        <p class="text-3xl sm:text-5xl text-[#009688] font-black text-center">446</p>
                        <p class="text-center text-black dark:text-prime-lighter font-black text-[12px] sm:text-[18px]">Enterprises</p>
                    </div>
                    <div class="flex flex-col space-y-2 items-center">
                        <p class="text-3xl sm:text-5xl text-[#009688] font-black text-center">10.1k</p>
                        <p class="text-center text-black dark:text-prime-lighter font-black text-[12px] sm:text-[18px]">Users</p>
                    </div>
                    <div class="flex flex-col space-y-2 items-center">
                        <p class="text-3xl sm:text-5xl text-[#009688] font-black text-center">43</p>
                        <p class="text-center text-black dark:text-prime-lighter font-black text-[12px] sm:text-[18px]">Opportunities</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col space-y-5 mx-[10%] mt-12">
                <p class="text-center font-black text-5xl text-[#444f60] dark:text-white">News & Events</p>
                <div class="flex flex-wrap gap-6 justify-center">
                    <!-- <newsCard newsPoster="/vacancy_post_ps61tz.jpg" name="Guide" date="16 September 2022" title="How can you post a vacancy on..." description="As of mind September 2022, we have offered an open vacancy post-request submission portal that allows employers to publish vacancies on all HaHuJobs outlets."/> -->
                    <newsCard newsPoster="/vacancy_post_ps61tz.jpg" name="Guide" date="16 September 2022" title="How can you post a vacancy on..." description="As of mind September 2022, we have offered an open vacancy post-request submission portal that allows employers to publish vacancies on all HaHuJobs outlets."/>
                    <newsCard newsPoster="/new_year_gift_thumbnail_d2cv9c.jpg" name="New Features" date="10 September 2022" title="Our new year's gift, new features..." description="Happy Ethiopian New year!! Our development teams have worked hard to provide our users with new features to offer much-needed insights and automation."/>
                    <newsCard newsPoster="/scholarship_1_mftyda_g4jvkt.jpg" name="Scholarship" date="1 September 2022" title="KAS SUR-PLACE Scholarship..." description="The KAS sur-place scholarship is a local scholarship offered by the KAS Office Ethiopia/AU in the form of financial support to Ethiopians who are enrolled in and are pursuin"/>
                </div>
                <div class="flex justify-center">
                    <bigButton buttonName="More blogs">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </bigButton>
                </div>
            </div>
        </div>
        <pageFooter/>
    </div>
</template>

<script setup>
</script>

<style>
.dots {
    @apply w-full h-[324px] bg-[url('../public/bg_dots.png')] dark:bg-[url('../public/bg_dots_dark.png')] bg-contain bg-no-repeat
}
/* width */
::-webkit-scrollbar {
  width: 2px;
  background: white;
} 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #009688; 
  border-radius: 1px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #80cbc4; 
}
</style>