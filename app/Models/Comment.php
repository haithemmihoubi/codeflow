<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    // Match  between the post table and the comment
    // Here the actual COMMENT belongs to post
    public function post()
    {
        return $this->belongsTo(Post::class);
    }

    // Match  between the post table and the comment
    // Here the actual COMMENT belongs to post
    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
