<?php

use App\Product;
use Illuminate\Database\Seeder;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Vaciar la tabla.
        Product::truncate();

        $faker = \Faker\Factory::create();
        // Crear productos ficticios en la tabla
        for($i = 0; $i < 20; $i++) {
            Product::create([
                'name' => $faker->domainWord,
                'description' => $faker->sentence,
                'price' => $faker->randomFloat(2,1,10000),
                'stock' => $faker->numberBetween(1,25),
                'image' => $faker->word,
                'location' => $faker->country,
                'score' => $faker->numberBetween(1,10),
            ]);
        }

    }
}
