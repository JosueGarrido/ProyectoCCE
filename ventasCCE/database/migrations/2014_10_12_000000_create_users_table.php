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
            $table->char('identity');
            $table->date('birthday');
            $table->integer('phone');
            $table->char('profile_picture');
            $table->char('location');
            $table->char('culture');
            $table->boolean('disability');
            $table->text('stage_name');
            $table->char('field_cultural');
            $table->char('main_activity');
            $table->char('secondary_activity');
            $table->char('education_level');
            $table->text('career_name');
            $table->char('studies_institution');
            $table->char('social_networks');
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
