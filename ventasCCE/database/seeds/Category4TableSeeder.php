<?php

use App\CategoryLevel4;
use Illuminate\Database\Seeder;

class Category4TableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Vaciar la tabla.
        CategoryLevel4::truncate();


        CategoryLevel4::create([
            'name'=> 'Abstracto',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Arte conceptual',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Arte en la calle',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Arte espiritual',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Arte Naif',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Arte oriental',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Arte outsider',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Arte pop',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Arte tribal',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Caligrafía',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Clasicismo',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Cubismo',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Expresionismo',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Fauvismo',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Figurativo',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Geométrico',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Hiperrealismo',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Ilustración',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Impresionismo',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Land Art',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Minimalismo',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Simbolismo',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Surrealismo',
            'category1_id'=> '1',
        ]);
        CategoryLevel4::create([
            'name'=> 'Otros',
            'category1_id'=> '1',
        ]);

    /*    $faker = \Faker\Factory::create();
        // Crear categorías ficticias en la tabla
        for($i = 0; $i < 50; $i++) {
            CategoryLevel4::create([

                'name' => $faker->word,

            ]);
        }  */

    }
}
