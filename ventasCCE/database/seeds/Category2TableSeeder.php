<?php

use App\CategoryLevel2;
use Illuminate\Database\Seeder;

class Category2TableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Vaciar la tabla.
        CategoryLevel2::truncate();

        $faker = \Faker\Factory::create();
        // Crear categorías ficticias en la tabla
        for($i = 0; $i < 20; $i++) {
            CategoryLevel2::create([

                'name' => $faker->word,

            ]);
        }

    }
}
