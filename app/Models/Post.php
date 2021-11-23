<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    /*
    *  Match  between the post table and the comment
    *  Here the actual post has many comments
*/
    protected $fillable = [
        'title',
        "body",
        'image',
        "url",
        "pdf",
        "coupon",
        "category_id"
    ];


    /*
    *  Match  between the post table and the comment
    *  Here the actual post has many comments
*/

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }


    /* Match between the POSt and the Category
    *
    * */

    public function ratings()
    {
        return $this->hasMany(Rating::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
