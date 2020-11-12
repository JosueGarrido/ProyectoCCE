<?php

use App\Sale;
use Illuminate\Database\Seeder;
use Tymon\JWTAuth\Facades\JWTAuth;

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
        // Obtenemos la lista de todos los usuarios creados e
        // iteramos sobre cada uno y simulamos un inicio de
        // sesión con cada uno para crear productos en su nombre
        $users = App\User::all();
        foreach ($users as $user) {
            // iniciamos sesión con este usuario
            JWTAuth::attempt(['email' => $user->email, 'password' => '123456']);
            // Y ahora con este usuario creamos algunos productos
            $num_cultural_projects = 5;
            for ($j = 0; $j < $num_cultural_projects; $j++) {
                Sale::create([
                    'date_buy_sale' => $faker->date("Y-m-d"),
                    'description_buy_sale' => $faker->sentence,
                    'total_buy_sale' => $faker->numberBetween(2,999),
                    'quantity_buy_sale' => $faker->numberBetween(0,5),
                ]);
            }
        }
    }
}
