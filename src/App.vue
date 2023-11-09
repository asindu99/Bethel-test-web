<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<script >
import {mapStores} from 'pinia'
import {useWalletData} from '@/stores/DataStore'

export default {
  name : 'app',
  mounted(){
    this.walletStore.getBucketNames();
  },
  computed : {
    ...mapStores(useWalletData)
  }
}
</script>
