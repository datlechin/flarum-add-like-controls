import { extend } from 'flarum/common/extend';
import DiscussionControls from 'flarum/forum/utils/DiscussionControls';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import Button from 'flarum/common/components/Button';

export default function addIgnoreControls() {
  extend(DiscussionControls, 'userControls', function (items, discussion, context) {
    if (app.session.user && !(context instanceof DiscussionPage)) {
      let currentRoute = app.current.get('routeName');

      if (currentRoute === 'index' || currentRoute === 'following') {
        if (discussion.isHidden()) return;

        const subscription = discussion.subscription();

        items.add('ignore',
          Button.component({
            icon: subscription === 'ignore' ? 'fas fa-eye' : 'far fa-eye-slash',
            onclick: () => {
              discussion.save({
                subscription: subscription === 'ignore' ? null : 'ignore',
              });
            },
          },
          app.translator.trans(
            subscription === 'ignore'
              ? 'flarum-subscriptions.forum.discussion_controls.unignore_button'
              : 'datlechin-flarum-add-like-controls.forum.ignore'
          ))
        );
      }
    }
  });
}
