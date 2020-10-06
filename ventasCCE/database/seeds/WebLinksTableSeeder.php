<?php

use App\Web_Links;
use Illuminate\Database\Seeder;

class WebLinksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Vaciar la tabla.
        Web_Links::truncate();

        $faker = \Faker\Factory::create();
        // Crear artículos ficticios en la tabla
        for($i = 0; $i < 50; $i++) {
            Web_Links::create([

                'link_type' => $faker->sentence,
                'link_description' => $faker->sentence,

            ]);
        }
    }
}
