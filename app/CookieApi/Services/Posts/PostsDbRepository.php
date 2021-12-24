<?php

namespace CookieApi\Services\Posts;

use App\Models\Posts;
use Illuminate\Database\Eloquent\Collection;


class PostsDbRepository
{
    private Posts $postsModel;

    public function __construct(Posts $postsModel)
    {
        $this->postsModel = $postsModel;
    }

    public function getPosts(): Collection|array
    {
        return $this->postsModel::query()->select('*')->groupBy()->get();
    }
}
