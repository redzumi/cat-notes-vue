import { State as NotesState } from './modules/notes';

export interface RootState {
  notes: NotesState;
}
