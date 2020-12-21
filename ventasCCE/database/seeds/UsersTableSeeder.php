<?php

use App\User;
use App\Artist;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();

        $faker = \Faker\Factory::create();

        $password = Hash::make('123456');

        User::create([
            'name'=> 'Administrador',
            'last_name' => 'Jaramillo',
            'email'=> 'admin@prueba.com',
            'identity' => '1754488524',
            'birthday' => '1996-10-10',
            'phone' => '993731322',
            'location' => 'Quito-Ecuador',
            'password'=> $password,
            ]);

        for ($i = 0; $i < 5; $i++) {
            $artist = Artist::create([
                'culture' => $faker->word,
                'disability' => $faker->boolean,
                'stage_name' => $faker->word,
                'field_cultural' => $faker->word,
                'main_activity' => $faker->word,
                'secondary_activity'=> $faker->word,
                'education_level' => $faker->word,
                'career_name' => $faker->word,
                'studies_institution' => $faker->word,
                'social_networks' => $faker->sentence,
            ]);

            $artist->user()->create([
                'name' => $faker->firstName,
                'last_name' => $faker->lastName,
                'email' => $faker->email,
                'password' => $password,
                'identity' => $faker->numberBetween(1712654897, 1794879546),
                'birthday' => $faker->date("Y-m-d"),
                'phone' => $faker->numberBetween(911111111, 999999999),
                'location' => $faker->country,



            ]);

        }


        for ($i = 0; $i < 10; $i++) {

            User::create([
                'name' => $faker->firstName,
                'last_name' => $faker->lastName,
                'email' => $faker->email,
                'password' => $password,
                'identity' => $faker->numberBetween(1712654897, 1794879546),
                'birthday' => $faker->date("Y-m-d"),
                'phone' => $faker->numberBetween(911111111, 999999999),
                'location' => $faker->country,


            ]);

        }

    }
}

