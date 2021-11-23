<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;
    /* Match between the rating and the post
    *
    * */
    public function post()
    {
        return $this->belongsTo(Post::class);
    } /* Match between the rating and the post
     *
     * */
    public function user()
    {
        return $this->belongsTo(Post::class);
    }
}
