<template>
    <div>
        <Page1Nav class="z-[100]"/>
        <Page2Sidebar/>
        
    </div>
</template>

<script>
import Page1Nav from '@/components/Page1Nav.vue';
import Page2Sidebar from '@/components/Page2Sidebar.vue';


export default {
    name : 'MainContent',
    components :{
        Page1Nav,
        Page2Sidebar,
        
    }
}
</script>
