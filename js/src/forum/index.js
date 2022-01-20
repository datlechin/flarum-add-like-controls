import app from 'flarum/forum/app';
import addIgnoreControls from './addIgnoreControls';
import addLikeControls from './addLikeControls';
import addMarkAsReadControls from './addMarkAsReadControls';

app.initializers.add('datlechin/flarum-add-like-controls', () => {
  addMarkAsReadControls();
  addLikeControls();
  addIgnoreControls();
});
