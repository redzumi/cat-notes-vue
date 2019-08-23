import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      // @ts-ignore
      notes: state => state.notes.list.reverse()
    }),
    ...mapGetters('notes', {
      currentNote: 'currentNote'
    })
  },
  created() {
    // @ts-ignore
    this.$store.dispatch('notes/getNotes');
  },
  methods: {
    ...mapActions('notes', ['showNote']),
    addNewNote() {
      // @ts-ignore
      this.showNote(null);
    }
  }
};
