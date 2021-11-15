<?php

namespace Database\Seeders;

use App\Models\Rating;
use Illuminate\Database\Seeder;

class RatingSeeder extends Seeder
{
    /**
     * Run the rating seeds.
     *
     * @return void
     */
    public function run()
    {
        Rating::factory()
        ->count(100)
        ->create();
    }
}
