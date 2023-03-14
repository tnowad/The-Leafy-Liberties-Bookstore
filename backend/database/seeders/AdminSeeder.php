<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $user = User::factory()->create([
      'first_name' => 'first_name',
      'last_name' => 'last_name',
      'username' => 'admin',
      'password' => bcrypt('password'),
    ]);
    $user->assignRole('admin');
  }
}