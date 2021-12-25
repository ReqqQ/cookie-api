<?php

namespace CookieApi\Services\Posts;

use App\Models\Posts;

class TransformService
{
    private const DEFAULT_SEPARATOR_FOR_STRING_CATEGORIES = ',';
    private const DATE_FORMAT = 'd-m-Y';

    private array $postsData = [];
    private array $transformedArray = [];
    private array $categoriesType = [];

    public function setPostsData(array $postsData): static
    {
        $this->postsData = $postsData;

        return $this;
    }

    public function setCategories(string $categoriesType): static
    {
        $this->categoriesType = $this->getExplodedCategories($categoriesType);

        return $this;
    }

    public function getPosts(): array
    {
        return $this->transformedArray === [] ? $this->postsData : $this->transformedArray;
    }

    public function transform(): static
    {
        foreach ($this->postsData as $post) {
            $postCategory = $post[Posts::COLUMN_CATEGORY];
            if ($this->hasCategoryType($postCategory)) {
                $post[Posts::COLUMN_CREATED_AT] = $this->getDate($post[Posts::COLUMN_CREATED_AT]);
                $this->transformedArray[$postCategory][] = $post;
            }
        }

        return $this;
    }

    private function getDate(string $postDate): string
    {
        return date(self::DATE_FORMAT, strtotime($postDate));
    }

    private function hasCategoryType(string $categoryType): bool
    {
        return in_array($categoryType, $this->categoriesType);
    }

    private function getExplodedCategories(string $categoryTypes): array
    {
        return explode(self::DEFAULT_SEPARATOR_FOR_STRING_CATEGORIES, $categoryTypes);
    }
}
