<?php

use App\CategoryLevel3;
use Illuminate\Database\Seeder;

class Category3TableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Vaciar la tabla.
        CategoryLevel3::truncate();

        CategoryLevel3::create([
            'name'=> 'Fieltro',
            'category2_id'=> '6',
        ]);
        CategoryLevel3::create([
            'name'=> 'Otros',
            'category2_id'=> '6',
        ]);

      /*  $faker = \Faker\Factory::create();
        // Crear categorías ficticias en la tabla
        for($i = 0; $i < 100; $i++) {
            CategoryLevel3::create([

                'name' => $faker->word,

            ]);
        }   */

    }
}

