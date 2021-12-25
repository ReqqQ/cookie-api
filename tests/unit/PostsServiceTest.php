<?php

namespace Tests\unit;

use Codeception\Test\Unit;
use CookieApi\Services\Posts\PostsDbRepository;
use CookieApi\Services\Posts\PostsService;
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
        $dbRepository->expects($this->once())->method('getPosts')->willReturn([]);
        $postsService = new PostsService($dbRepository);

        $this->tester->assertIsArray($postsService->getPosts());
    }
}
