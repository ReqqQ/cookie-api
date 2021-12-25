<?php

namespace CookieApi\Services\Posts;

use App\Models\Posts;


class PostsDbRepository
{
    private Posts $postsModel;

    public function __construct(Posts $postsModel)
    {
        $this->postsModel = $postsModel;
    }

    public function getPosts(): array
    {
        return $this->postsModel::query()->select('*')->get()->toArray();
    }

}
