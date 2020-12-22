<template lang="pug">
  .root
    transition(appear @enter='enter')
      .inner
        p.name.description-fade-in
          |Crée en novembre 2020
        p.description-fade-in
          | Le V.I.N.C.I est une association à but non lucratif regroupant regroupant des leaders Ivoiriens de genres et sexes differents oeuvrant pour la promotion de la jeunesse.
        
</template>

<script>
export default {
  methods: {
    async enter (el, done) {
      await this.$delay(800);
      requestAnimationFrame(() => {
        TweenMax.staggerTo('.description-fade-in', 0.8, {
          ease: 'ease',
          startAt: { opacity: 0, y: 20, },
          opacity: 0.9, y: 0,
          onComplete() { done() }
        }, 0.1)
      });
    },
  }
}
</script>

<style lang="stylus" scoped>
.root
  text-align left

p
  font-size 12px
  letter-spacing 3px
  line-height 2em
  padding 0 20px
  position relative
  +pc-only()
    font-size 15px
    padding 0 15%

.name
  font-size 1.2em

.description-fade-in
  opacity 0
</style>
