<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->word(),
            'body' => $this->faker->paragraph(),
            'image' => $this->faker->url(),
            'url' => $this->faker->url(),
            'pdf' => $this->faker->url(),
            'coupon' => $this->faker->url(),
            'category_id' => Category::get('id')->random(),
            'created_at' => now(),
            'updated_at' => now()
        ];
    }
}
