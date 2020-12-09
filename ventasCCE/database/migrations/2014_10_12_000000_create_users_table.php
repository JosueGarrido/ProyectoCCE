<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('name');
            $table->text('last_name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('identity')->unique();
            $table->dateTime('birthday');
            $table->integer('phone');
            $table->string('profile_picture')->nullable();
            $table->string('country');
            $table->string('province')->nullable();
            $table->string('city')->nullable();
            $table->string('town')->nullable();
            $table->string('culture');
            $table->boolean('disability');
            $table->integer('disability_porcentage')->nullable();
            $table->string('stage_name')->nullable();
            $table->string('field_cultural');
            $table->string('secondary_activity');
            $table->string('education_level');
            $table->string('career_name');
            $table->string('studies_institution');
            $table->string('social_networks');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
