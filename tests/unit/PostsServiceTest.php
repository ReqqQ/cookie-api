<?php

namespace Tests\unit;

use Codeception\Test\Unit;
use CookieApi\Services\Posts\PostsDbRepository;
use CookieApi\Services\Posts\PostsService;
use CookieApi\Services\Posts\TransformService;
use UnitTester;

class PostsServiceTest extends Unit
{
    /**
     * @var UnitTester
     */
    protected UnitTester $tester;

    // tests
    public function testPostsProperType(): void
    {
        $dbRepository = $this->createMock(PostsDbRepository::class);
        $dbRepository->method('getPosts')->willReturn([]);
        $transformedService = $this->createMock(TransformService::class);
        $postsService = new PostsService($dbRepository, $transformedService);

        $this->tester->assertIsArray($postsService->getPosts(''));
        $this->tester->assertIsArray($postsService->getPosts('data'));

    }
}
