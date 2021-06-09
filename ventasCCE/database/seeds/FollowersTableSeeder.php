<?php


use Illuminate\Database\Seeder;
use App\Follower;

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
        $users = App\User::all();


        Follower::truncate();
        $faker = \Faker\Factory::create();
        // Obtenemos la lista de todos los usuarios creados e
        // iteramos sobre cada uno y simulamos un inicio de
        // sesión con cada uno para crear seguidores en su nombre
        $users = App\User::all();

        foreach ($users as $user) {
            // iniciamos sesión con cada uno
            JWTAuth::attempt(['email' => $user->email, 'password' => '123456']);

            // Creamos un comentario para cada artículo con este usuario
            foreach ($users as $user) {

                Follower::create([
                    'user_id_2' => $user->id,
                ]);
            }
        }
    }
}
