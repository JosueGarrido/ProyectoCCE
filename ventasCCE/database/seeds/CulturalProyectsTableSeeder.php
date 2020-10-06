<?php

use App\Cultural_Projects;
use Illuminate\Database\Seeder;

class CulturalProyectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Vaciar la tabla.
        Cultural_Projects::truncate();

        $faker = \Faker\Factory::create();
        // Crear artículos ficticios en la tabla
        for($i = 0; $i < 50; $i++) {
            Cultural_Projects::create([

                'project_name'=> $faker->sentence,
                'project_description'=> $faker->sentence,
                'project_type'=> $faker->word,
                'project_place'=> $faker->locale,

                ]);
        }
    }
}
