<?php

namespace Database\Seeders;

use Exception;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class PermissionTableSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    app()[PermissionRegistrar::class]->forgetCachedPermissions();

    $permissions = [
      'user-list',
      'user-create',
      'user-edit',
      'user-delete'
    ];

    foreach ($permissions as $permission) {
      Permission::create(['name' => $permission]);
    }

    Role::create(['name' => 'admin'])
      ->givePermissionTo(Permission::all());

    Role::create(['name' => 'moderator'])
      ->givePermissionTo([
        'user-list',
        'user-create',
        'user-edit',
        'user-delete'
      ]);

    Role::create(['name' => 'user'])
      ->givePermissionTo([]);
  }
}