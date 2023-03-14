<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      'first_name' => $this->faker->firstName,
      'last_name' => $this->faker->lastName,
      'username' => $this->faker->unique()->userName,
      'email' => $this->faker->unique()->safeEmail,
      'phone' => $this->faker->unique()->phoneNumber,
      'password' => bcrypt('password'),
      'user_image' => $this->faker->imageUrl(640, 480, 'people'),
      'status' => $this->faker->numberBetween(0, 1),
      'receive_email' => $this->faker->boolean,
      'remember_token' => Str::random(10),
      'created_at' => now(),
      'updated_at' => now(),
    ];
  }

  public function configure(): UserFactory
  {
    return $this->afterCreating(
      function ($user) {
        $user->assignRole('user');
        $user->update(['email_verified_at' => now()]);
      }
    );
  }

  /**
   * Indicate that the model's email address should be unverified.
   */
  public function unverified(): static
  {
    return $this->state(
      function (array $attributes): array {
        return [
          'email_verified_at' => null,
        ];
      }
    );
  }
}