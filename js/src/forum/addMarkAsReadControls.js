import { extend } from 'flarum/common/extend';
import DiscussionControls from 'flarum/forum/utils/DiscussionControls';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import Button from 'flarum/common/components/Button';

export default function addMarkAsReadControls() {
  extend(DiscussionControls, 'userControls', function (items, discussion, context) {
    if (app.session.user && !(context instanceof DiscussionPage)) {
      let currentRoute = app.current.get('routeName');
      if (currentRoute === 'index' || currentRoute === 'following') {
        if (discussion.isHidden()) return;

        let isRead = discussion.isRead();

        items.add(
          'markAsRead',
          Button.component(
            {
              icon: isRead ? 'fas fa-check-circle' : 'far fa-check-circle',
              onclick: () => {
                if (isRead) {
                  discussion.save({ lastReadPostNumber: null, unread: true });
                } else {
                  discussion.save({ lastReadPostNumber: discussion.lastPostNumber() });
                }
              },
            },
            app.translator.trans(
              isRead ? 'datlechin-flarum-add-like-controls.forum.mark_unread' : 'datlechin-flarum-add-like-controls.forum.mark_read'
            )
          )
        );
      }
    }
  });
}
