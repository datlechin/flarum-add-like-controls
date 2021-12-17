import { extend } from 'flarum/common/extend';
import DiscussionControls from 'flarum/forum/utils/DiscussionControls';
import DiscussionPage from 'flarum/forum/components/DiscussionPage';
import Button from 'flarum/common/components/Button';

export default function addLikeControls() {
  extend(DiscussionControls, 'userControls', function (items, discussion, context) {
    if (app.session.user && !(context instanceof DiscussionPage)) {
      let currentRoute = app.current.get('routeName');

      if (currentRoute === 'index' || currentRoute === 'following') {
        const post = discussion.firstPost();

        if (!post || post.isHidden() || !('flarum-likes' in flarum.extensions)) return;

        const likes = post.likes();

        let isLiked = app.session.user && likes && likes.some((user) => user === app.session.user);

        items.add(
          'like',
          Button.component(
            {
              icon: isLiked ? 'fas fa-thumbs-up' : 'far fa-thumbs-up',
              onclick: () => {
                isLiked = !isLiked;

                post.save({ isLiked });
              },
            },
            app.translator.trans(isLiked ? 'flarum-likes.forum.post.unlike_link' : 'flarum-likes.forum.post.like_link')
          )
        );
      }
    }
  });
}
