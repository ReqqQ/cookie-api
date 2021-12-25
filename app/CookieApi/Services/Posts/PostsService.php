<?php

namespace CookieApi\Services\Posts;

use Illuminate\Database\Eloquent\Collection;

class PostsService
{
    private PostsDbRepository $postsDbRepository;
    private TransformService $transformService;

    public function __construct(PostsDbRepository $postsDbRepository, TransformService $transformService)
    {
        $this->postsDbRepository = $postsDbRepository;
        $this->transformService = $transformService;
    }

    public function getPosts(string $categoryPosts): array
    {
        $postsData = $this->postsDbRepository->getPosts();
        $this->transformService->setPostsData($postsData);

        if ($categoryPosts != '') {
            $this->transformService->setCategories($categoryPosts)->transform();
        }

        return $this->transformService->getPosts();
    }

}
