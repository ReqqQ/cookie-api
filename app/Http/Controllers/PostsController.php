<?php

namespace App\Http\Controllers;

use CookieApi\Services\Posts\PostsService;
use Illuminate\Http\JsonResponse;

class PostsController extends Controller
{
    private PostsService $postsService;

    public function __construct(PostsService $postsService)
    {
        $this->postsService = $postsService;
    }

    public function posts(): JsonResponse
    {
        $posts = $this->postsService->getPosts();

        return response()->json(['data' => $posts]);
    }
}
