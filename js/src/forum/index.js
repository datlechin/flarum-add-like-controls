import addIgnoreControls from './addIgnoreControls';
import addLikeControls from './addLikeControls';

app.initializers.add('datlechin/flarum-add-like-controls', () => {
  addLikeControls();
  addIgnoreControls();
});
