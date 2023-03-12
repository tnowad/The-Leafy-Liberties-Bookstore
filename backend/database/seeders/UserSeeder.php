<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run(): void
  {
    $user = User::factory()->create([
      'first_name' => 'first_name',
      'last_name' => 'last_name',
      'username' => 'username',
      'password' => bcrypt('password'),
    ]);
  }
}