<?php

<<<<<<< HEAD
use Illuminate\Database\Seeder;
use App\Follower;
=======
use App\Follower;
use Illuminate\Database\Seeder;
>>>>>>> eb87115ea829e16b60c128cc370590daf262d276
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
<<<<<<< HEAD
        Follower::truncate();
        $faker = \Faker\Factory::create();
        $faker = \Faker\Factory::creat();
        $users = App\User::all();
=======

        Follower::truncate();
        $faker = \Faker\Factory::create();
        // Obtenemos la lista de todos los usuarios creados e
        // iteramos sobre cada uno y simulamos un inicio de
        // sesión con cada uno para crear seguidores en su nombre
        $users = App\User::all();

>>>>>>> eb87115ea829e16b60c128cc370590daf262d276
        foreach ($users as $user) {
            // iniciamos sesión con cada uno
            JWTAuth::attempt(['email' => $user->email, 'password' => '123456']);

            // Creamos un comentario para cada artículo con este usuario
            foreach ($users as $user) {
<<<<<<< HEAD
                Reputation::create([
=======
                Follower::create([
>>>>>>> eb87115ea829e16b60c128cc370590daf262d276
                    'user_id_2' => $user->id,
                ]);
            }
        }
<<<<<<< HEAD
=======

>>>>>>> eb87115ea829e16b60c128cc370590daf262d276
    }
}
