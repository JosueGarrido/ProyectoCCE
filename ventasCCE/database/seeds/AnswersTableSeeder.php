<?php

use App\Answers;
use Illuminate\Database\Seeder;
use Tymon\JWTAuth\Facades\JWTAuth;

class AnswersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Vaciar la tabla.
        Answers::truncate();

        $faker = \Faker\Factory::create();
        // Obtenemos la lista de todos los usuarios creados e
        // iteramos sobre cada uno y simulamos un inicio de
        // sesión con cada uno para crear productos en su nombre

        $users = App\User::all();
        $questions = App\Questions::all();
        foreach ($users as $user) {
            // iniciamos sesión con este usuario
            JWTAuth::attempt(['email' => $user->email, 'password' => '123456']);
            // Y ahora con este usuario creamos algunass respuestas

            foreach ($questions as $question) {
                Answers::create([

                    'answer' => $faker->sentence,
                    'question_id' => $question->id,
                ]);
            }
        }
    }
}
