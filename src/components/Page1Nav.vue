<template>
    <div class="fixed w-full">
        <!-- start of the nav bar -->
        <nav class="flex justify-between lg:py-2 lg:px-10 bg-gray-100 shadow-md
        md:py-2 md:px-10
        sm:py-2 sm:px-10
        min-[320px]:py-2 min-[320px]:px-4 gap-4 ">
            <!-- left side -->
            <div class="flex items-center w-[250px] basis-[20%]">
                <img src="../img/logos/bethellogo.png" alt="" class="w-[30px]">
                <h1 class="font-medium ml-1 text-[18px] text-[#293793]">BETHEL</h1>
            </div>

            <!-- middle side -->
            <div class="lg:flex md:flex items-center justify-start basis-[50%]  sm:hidden min-[320px]:hidden">
                <h2 class="md:ml-10 lg:ml-0">Dashboard</h2>
            </div>
            <!-- end of the middle -->
            <!-- right side -->
            <div class="md:flex lg:flex items-center w-[300px] basis-[42%] gap-2 justify-end sm:hidden min-[320px]:hidden">

                <button class="mr-2 text-[12px] border-[2px] rounded-full p-[7px] px-[18px]
                bg-[#293793] text-white border-[#293793]
                hover:bg-white hover:text-[#293793] transition-all ease-linear">Connect Wallet</button>

                <img src="../img/logos/bethellogo.png" alt="" class="w-[30px]">
                <h3 class="text-[14px]">User's name</h3>
                <div>
                    <span class="material-symbols-outlined mt-[10px]">
                        expand_more
                    </span>
                </div>
            </div>
            <!-- end of the right side -->

            <!-- mobile size nav -->
            <div class="gap-3 sm:flex min-[320px]:flex lg:hidden md:hidden items-center ">
             <h3>Dashborad</h3>
                <span class="material-symbols-outlined">
                    menu
                </span>
            </div>
            <!-- end of the mobile size nav -->

        </nav>
        <!-- end of the nav bar -->
    </div>
</template>

<script>
export default{ 
    name : 'Page1Dashboard'
}
</script>
