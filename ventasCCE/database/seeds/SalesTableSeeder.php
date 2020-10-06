<?php

use App\Sale;
use Illuminate\Database\Seeder;

class SalesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Vaciar la tabla.
        Sale::truncate();

        $faker = \Faker\Factory::create();
        // Crear artículos ficticios en la tabla
        for($i = 0; $i < 50; $i++) {
            Sale::create([

                'date_buy_sale' => $faker->date("Y-m-d"),
                'description_buy_sale' => $faker->paragraph,
                'total_buy_sale' => $faker->numberBetween(2,999),
                'quantity_buy_sale' => $faker->numberBetween(0,5),

            ]);
        }
    }
}
