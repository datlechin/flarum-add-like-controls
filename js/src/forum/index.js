import addIgnoreControls from './addIgnoreControls';
import addLikeControls from './addLikeControls';
import addMarkAsReadControls from './addMarkasReadControls';

app.initializers.add('datlechin/flarum-add-like-controls', () => {
  addMarkAsReadControls();
  addLikeControls();
  addIgnoreControls();
});
