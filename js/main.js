const whiteCircledNumbers = ['⓪','①','②','③','④','⑤','⑥','⑦','⑧','⑨','⑩','⑪','⑫','⑬','⑭','⑮'];

Vue.component('iv-picker', {
  props: ['value'],
  template: '#iv-picker'
})

let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    attack: 0,
    defense: 0,
    health: 0,
  },

  mounted() {
    new ClipboardJS(this.$refs.copyButton, {
      text: () => this.name
    });
  },

  computed: {
    ivPercentage() {
      let pct = (this.attack+this.defense+this.health) / 45;
      return Math.round(pct * 100);
    },
    name() {
      return [
        this.ivPercentage < 100 ? this.ivPercentage : '!!',
        whiteCircledNumbers[this.attack],
        whiteCircledNumbers[this.defense],
        whiteCircledNumbers[this.health]
      ].join('');
    }
  }
})