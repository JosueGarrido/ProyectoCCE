<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArtistsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('artists', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('culture');
            $table->boolean('disability');
            $table->text('stage_name');
            $table->string('field_cultural');
            $table->string('main_activity');
            $table->string('secondary_activity');
            $table->string('education_level');
            $table->string('career_name');
            $table->string('studies_institution');
            $table->string('live')->nullable();
            $table->string('instagram',255);
            $table->string('facebook',255);
            $table->string('whatsapp',255);
            $table->string('picture')->nullable();


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('artists');
    }
}
