<template>
  <div>
    <h1>Scan Page Loaded</h1>
    <QrScanner />
  </div>
</template>

<script>
import QrScanner from '~/components/QrScanner.vue'

export default {
  components: {
    QrScanner
  }
}
</script>