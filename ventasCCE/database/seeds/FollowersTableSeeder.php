<?php

use Illuminate\Database\Seeder;
use App\Follower;
use Tymon\JWTAuth\Facades\JWTAuth;

class FollowersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Follower::truncate();
        $faker = \Faker\Factory::create();
        $faker = \Faker\Factory::creat();
        $users = App\User::all();
        foreach ($users as $user) {
            // iniciamos sesión con cada uno
            JWTAuth::attempt(['email' => $user->email, 'password' => '123456']);

            // Creamos un comentario para cada artículo con este usuario
            foreach ($users as $user) {
                Reputation::create([
                    'user_id_2' => $user->id,
                ]);
            }
        }
    }
}
