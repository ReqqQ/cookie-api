<?php

namespace App\Http\Controllers;

use CookieApi\Services\Posts\PostsService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    private PostsService $postsService;

    public function __construct(PostsService $postsService)
    {
        $this->postsService = $postsService;
    }

    public function posts(Request $request): JsonResponse
    {
        $posts = $this->postsService->getPosts($request->has('categoryPosts') ? $request->get('categoryPosts') : '');

        return response()->json(['data' => $posts]);
    }
}
