<template>
  <h1>{{ textToDisplay }}</h1>
</template>

<script>
export default {
  name: "TypeWriterText",
  props: {
    text: {
      type: String,
      required: true,
      default: "Etienne Dagenais",
    },
    speed: {
      type: Number,
      required: true,
      default: 300,
    },
  },
  data: () => ({
    currentText: "",
    cursor: "_",
    finalText: "",
  }),
  mounted() {
    setTimeout(() => {
      this.currentText = this.cursor;
      this.flashCursorBeforeWriting(0, true);
    }, 200);
  },
  computed: {
    textToDisplay() {
      return this.currentText;
    },
  },
  methods: {
    displayText(target) {
      if (this.text.length > target.length + 1) {
        setTimeout(() => {
          let newCurrent = target + this.text[target.length];
          newCurrent += this.cursor;
          target += this.text[target.length];
          this.currentText = newCurrent;
          this.displayText(target);
        }, this.speed);
      } else {
        this.currentText = this.text + this.cursor;
        this.flashCursorAfterWriting(0, true);
      }
    },
    flashCursorBeforeWriting(nbIter, cursorShown) {
      if (nbIter < 2)
        setTimeout(() => {
          this.currentText = cursorShown ? "" : this.cursor;
          cursorShown = !cursorShown;
          this.flashCursorBeforeWriting(++nbIter, cursorShown);
        }, 500);
      else {
        this.displayText("");
      }
    },
    flashCursorAfterWriting(nbIter, cursorShown) {
      if (nbIter < 9) {
        setTimeout(() => {
          if (cursorShown) this.currentText = this.currentText.slice(0, -1);
          else this.currentText += this.cursor;
          cursorShown = !cursorShown;
          this.flashCursorAfterWriting(++nbIter, cursorShown);
        }, 500);
      }
    },
  },
};
</script>
