<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('staff', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');    // user associated with the enrolement
            $table->foreignId('office_id')->nullable()->constrained()->onDelete('cascade');     // offfice he is enrolled in
            $table->foreignId('role_id')->constrained()->onDelete('restrict');      // what specific role he has
            $table->unsignedBigInteger('shift_id');
            // $table->foreignId('shift_id')->nullable()->onDelete('restrict');     // work shifts
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('staff');
    }
};
