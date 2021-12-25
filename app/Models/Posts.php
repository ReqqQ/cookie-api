<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    protected $table = 'posts';

    public const COLUMN_ID = 'id';
    public const COLUMN_TITLE = 'title';
    public const COLUMN_CATEGORY = 'category';
    public const COLUMN_CREATED_AT = 'created_at';
    public const COLUMN_CREATED_BY = 'created_by';

}
