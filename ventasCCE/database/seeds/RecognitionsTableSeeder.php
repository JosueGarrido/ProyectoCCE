<?php

use App\Recognition;
use Illuminate\Database\Seeder;

class RecognitionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Vaciar la tabla.
        Recognition::truncate();

        $faker = \Faker\Factory::create();
        // Crear artículos ficticios en la tabla
        for($i = 0; $i < 50; $i++) {
            Recognition::create([

                'reco_name' => $faker->word,
                'reco_description' => $faker->sentence,
                'reco_type' => $faker->word,
                'reco_place' => $faker->word,

            ]);
        }
    }
}
