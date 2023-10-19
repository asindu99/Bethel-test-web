<template>
    <div class="">
        <Page1Nav class="z-[10]"/>
        <Page2Sidebar class="h-full z-[100]"/>
        <!-- <page3Dashboard/>  -->
        <!-- <Page4Wallet/> -->
    </div>
</template>

<script>
import Page1Nav from '@/components/Page1Nav.vue';
import Page2Sidebar from '@/components/Page2Sidebar.vue';
import Page3Dashboard from '@/components/Page3Dashboard.vue';
import Page4Wallet from '@/components/Page4Wallet.vue';


export default {
    name : 'MainContent',
    components :{
        Page1Nav,
        Page2Sidebar,
        Page3Dashboard,
        Page4Wallet,
        
    }
}
</script>
