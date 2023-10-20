import {defineStore} from 'pinia';

export default defineStore('modal' , {
    state : () => ({
        isOpen : false,
        showSideBar : 'min-[320px]:hidden md:hidden',
        onBlur : '',
        dropMenuOC : false,
        
    })
});