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
    User::create([
      'first_name' => 'Admin',
      'last_name' => 'Admin',
      'username' => 'admin',
      'email' => 'admin@admin.com',
      'password' => bcrypt('password'),
    ])->assignRole('admin');

    User::create([
      'first_name' => 'Moderator',
      'last_name' => 'Moderator',
      'username' => 'moderator',
      'email' => 'moderator@moderator.com',
      'password' => bcrypt('password'),
    ])->assignRole('moderator');

    User::create([
      'first_name' => 'User',
      'last_name' => 'User',
      'username' => 'user',
      'email' => 'user@user.com',
      'password' => bcrypt('password'),
    ])->assignRole('user');

    User::factory()
      ->count(100)
      ->create()
      ->each(function ($user) {
        $user->assignRole('user');
      });
  }
}