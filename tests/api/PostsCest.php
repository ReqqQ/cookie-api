<?php

namespace Tests\api;

use ApiTester;

class PostsCest
{
    private const POSTS_JSON_RESPONSE_NAMES = ['id', 'title', 'category', 'created_at', 'created_by'];

    public function testGetPosts(ApiTester $I): void
    {
        $I->sendGet('/posts');
        $I->dontSeeHttpHeader('Content-Type', 'application/x-www-form-urlencoded');
        $I->seeHttpHeader('Content-Type', 'application/json');
        $I->seeResponseCodeIsSuccessful();
        $I->seeResponseIsJson();
        $this->checkJsonResponse($I);
    }

    private function checkJsonResponse(ApiTester $I): void
    {
        foreach (self::POSTS_JSON_RESPONSE_NAMES as $jsonIndexName) {
            $I->seeResponseJsonMatchesJsonPath('$.data[*].' . $jsonIndexName);
        }
    }
}
