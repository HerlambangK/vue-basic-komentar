Vue.component("Komentar", {
  template: "#komentar-template",
  props: ["comment"],
  data: function () {
    return {
      plus: false,
      minus: false,
    };
  },
  methods: {
    tambah: function () {
      this.plus = !this.plus;
      this.minus = false;
    },
    kurang: function () {
      this.minus = !this.minus;
      this.plus = false;
    },
  },

  computed: {
    score: function () {
      if (this.plus) {
        return this.comment.score + 1;
      } else if (this.minus) {
        return this.comment.score - 1;
      } else {
        return this.comment.score;
      }
    },
  },
});

let vm = new Vue({
  el: "#app",
  data: {
    comments: [
      {
        body: "komentar 1 komentar 1 komentar 1",
        time: "01-01-2021",
        score: 0,
      },
      {
        body: "komentar 2 komentar 2 komentar 2",
        time: "01-01-2021",
        score: 5,
      },
      {
        body: "komentar 3 komentar 3 komentar 3",
        time: "01-01-2021",
        score: 3,
      },
    ],
    kolom_komentar: "",
  },

  methods: {
    PostComment: function () {
      //   console.log("cek");
      this.comments.push({
        body: this.kolom_komentar,
        time: "01-01-2021",
        score: 0,
      });
      this.kolom_komentar = "";
    },
  },
});
