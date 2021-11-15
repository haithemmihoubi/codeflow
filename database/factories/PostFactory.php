<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * Generating random posts.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->word(),
            'body' => $this->faker->paragraph(),
            'image' => $this->faker->imageUrl(),
            'url' => $this->faker->url(),
            'pdf' => $this->faker->url(),
            'coupon' => $this->faker->url(),
            'validated' => $this->faker->boolean(),
            'category_id' => Category::get('id')->random(),
            'created_at' => now(),
            'updated_at' => now()
        ];
    }
}
