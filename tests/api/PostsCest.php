<?php

namespace Tests\api;

use ApiTester;

class PostsCest
{
    private const POSTS_JSON_RESPONSE_NAMES = ['id', 'title', 'category', 'created_at', 'created_by'];

    public function testGetPostFromDb(ApiTester $I): void
    {
        $I->haveInDatabase('posts', [
            'title' => 'Lorem Ipsum is simply dummy text',
            'category' => 'main',
            'created_at' => 1634761889,
            'created_by' => 'admin'
        ]);
        $I->seeInDatabase('posts', [
            'title' => 'Lorem Ipsum is simply dummy text',
            'category' => 'main',
            'created_at' => 1634761889,
            'created_by' => 'admin'
        ]);
    }

    public function testGetPostsFromApiByCategory(ApiTester $I): void
    {
        $I->haveInDatabase('posts', [
            'title' => 'Lorem Ipsum is simply dummy text',
            'category' => 'main',
            'created_at' => 1634761889,
            'created_by' => 'admin'
        ]);

        $I->sendGet('/posts?categoryPosts=main');
        $this->getPostsAfter($I, 'main');
    }

    public function testGetPostsFromApiAll(ApiTester $I): void
    {
        $I->sendGet('/posts');
        $this->getPostsAfter($I);
    }

    private function getPostsAfter(ApiTester $I, string $categoryType = ''): void
    {
        $I->dontSeeHttpHeader('Content-Type', 'application/x-www-form-urlencoded');
        $I->seeHttpHeader('Content-Type', 'application/json');
        $I->seeResponseCodeIsSuccessful();
        $I->seeResponseIsJson();

        foreach (self::POSTS_JSON_RESPONSE_NAMES as $jsonIndexName) {
            $I->seeResponseJsonMatchesJsonPath("$.data.$categoryType.[*]." . $jsonIndexName);
        }
    }
}
