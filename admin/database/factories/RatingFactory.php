<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class RatingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'value' => $this->faker->numberBetween(0,5),
            'post_id' => Post::get('id')->random(),
            'user_id' => User::get('id')->random(),
            'created_at' => now(),
            'updated_at' => now()
        ];
    }
}
