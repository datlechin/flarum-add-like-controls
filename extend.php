<?php

/*
 * This file is part of datlechin/flarum-add-like-controls.
 *
 * Copyright (c) 2021 Ngo Quoc Dat.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Datlechin\AddLikeControls;

use Flarum\Discussion\Event\Saving;
use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js'),

    new Extend\Locales(__DIR__ . '/locale'),

    (new Extend\Event())
        ->listen(Saving::class, Listeners\MarkUnread::class),
];
