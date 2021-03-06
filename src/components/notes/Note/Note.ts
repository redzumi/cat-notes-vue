import { mapActions, mapGetters } from 'vuex';

export default {
  data: () => ({
    title: '',
    body: ''
  }),
  computed: {
    ...mapGetters('notes', {
      current: 'current'
    })
  },
  methods: {
    ...mapActions('notes', ['addNote']),
    submitNote() {
      // @ts-ignore
      this.addNote({
        id: Math.random(),
        // @ts-ignore
        title: this.title,
        // @ts-ignore
        body: this.body
      });
    }
  }
};
