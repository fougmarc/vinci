<template lang="pug">
  .root
    transition(appear @enter='enter')
      .inner
     
        p.subtitle.description-fade-in
        //-  | 情報科学研究科 乾・岡崎研究室(2012-2014)
        p.item.description-fade-in
          | Etape 1 : Adherer aux statuts et reglements de l'association
        p.item.description-fade-in
          | Etape 2 : Contacter les ressources Humaines 
        p.item.description-fade-in
          | Etape 3 : Passer l'entretient de recrutement 
        p.item.description-fade-in
          | Etape 4 : Apres validation, s'acquitter de son droit d'adhesion
        p.item.description-fade-in
          | Etape 5 : Remplir la fiche d'inscription et joindre les documents demandés 
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
  letter-spacing 3px
  text-align left

.inner
  padding 0 20px
  position relative
  +pc-only()
    padding 0 15%

.title
  font-size 18px
  line-height 0.6em
  position relative
  +pc-only()
    font-size 24px

span.underline
  text-decoration: none;
  border-bottom: 1px solid
  padding-bottom: 9px;
  padding-right -10px

.subtitle
  font-size 12px
  padding-bottom 2em
  padding-top 5px

.item
  font-size 12px
  line-height 2em
  position relative
  +pc-only()
    font-size 15px

.description-fade-in
  opacity 0
</style>
