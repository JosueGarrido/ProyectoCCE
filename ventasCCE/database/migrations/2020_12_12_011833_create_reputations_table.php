<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReputationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reputations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->tinyInteger('score');
            $table->string('comment');
            $table->timestamps();
        });

        Schema::table('reputations', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('restrict');
        });

        Schema::table('reputations', function (Blueprint $table) {
            $table->unsignedBigInteger('product_id')->nullable();
            $table->foreign('product_id')->references('id')->on('products')->onDelete('restrict');
        });
    }
    public function down(){
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('reputations');
        Schema::table('reputations', function (Blueprint $table) {
            $table->dropForeign('user_id');
        });
        Schema::table('reputations', function (Blueprint $table) {
            $table->dropForeign('product_id');
        });
        Schema::enableForeignKeyConstraints();
    }
}
