import Vue from 'vue'
import TextQuestion from '@/components/TextQuestion'

describe('TextQuestion.vue', () => {
  it('copy failed', () => {
    const Constructor = Vue.extend(TextQuestion)
    const vm = new Constructor().$mount()
    expect(vm.$data.question)
      .to.equal(vm.$data.backUpQuestion)
  })
})
