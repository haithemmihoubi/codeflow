<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the post seeds.
     *
     * @return void
     */
    public function run()
    {
        Post::factory()
        ->count(100)
        ->create();
    }
}
