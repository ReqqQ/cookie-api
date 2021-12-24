<?php

namespace CookieApi\Services\Posts;

use Illuminate\Database\Eloquent\Collection;

class PostsService
{
    private PostsDbRepository $postsDbRepository;

    public function __construct(PostsDbRepository $postsDbRepository)
    {
        $this->postsDbRepository = $postsDbRepository;
    }

    public function getPosts(): Collection|array
    {
        return $this->postsDbRepository->getPosts();
    }
}
