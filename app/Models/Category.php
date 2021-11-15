<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    /*
   *  Match  between the post table and the comment
   *  Here the actual post has many comments
*/
    public function posts()
    {
        return $this->hasMany(Post::class);
    }

}
