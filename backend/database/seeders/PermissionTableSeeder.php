<?php

namespace Database\Seeders;

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
    // Remove all cached permissions and roles
    app()[PermissionRegistrar::class]->forgetCachedPermissions();


    $permissions = [
      'address_access',
      'address_create',
      'address_delete',
      'address_edit',
      'address_show',
      'cart_access',
      'cart_create',
      'cart_delete',
      'cart_edit',
      'cart_show',
      'category_access',
      'category_create',
      'category_delete',
      'category_edit',
      'category_show',
      'contact_access',
      'contact_create',
      'contact_delete',
      'contact_edit',
      'contact_show',
      'coupon_access',
      'coupon_create',
      'coupon_delete',
      'coupon_edit',
      'coupon_show',
      'dashboard_access',
      'order_access',
      'order_create',
      'order_delete',
      'order_edit',
      'order_show',
      'page_access',
      'page_create',
      'page_delete',
      'page_edit',
      'page_show',
      'payment_method_access',
      'payment_method_create',
      'payment_method_delete',
      'payment_method_edit',
      'payment_method_show',
      'permission_access',
      'permission_create',
      'permission_delete',
      'permission_edit',
      'permission_show',
      'product_access',
      'product_create',
      'product_delete',
      'product_edit',
      'product_show',
      'review_access',
      'review_show',
      'review_create',
      'review_delete',
      'review_edit',
      'review_show',
      'role_access',
      'role_create',
      'role_delete',
      'role_edit',
      'role_show',
      'setting_access',
      'setting_create',
      'setting_delete',
      'setting_edit',
      'setting_show',
      'shipping_method_access',
      'shipping_method_create',
      'shipping_method_delete',
      'shipping_method_edit',
      'shipping_method_show',
      'slider_access',
      'slider_create',
      'slider_delete',
      'slider_edit',
      'slider_show',
      'user_access',
      'user_create',
      'user_delete',
      'user_edit',
      'user_show',
      'wishlist_access',
      'wishlist_create',
      'wishlist_delete',
      'wishlist_edit',
      'wishlist_show',
    ];

    foreach ($permissions as $permission) {
      try {

        Permission::create(['name' => $permission]);
      } catch (\Exception $e) {

      }
    }

    $role = Role::create(['name' => 'admin']);
    $role->givePermissionTo(Permission::all());

    $role = Role::create(['name' => 'user'])
      ->givePermissionTo([
        'user_show',
        'user_edit',
        'user_delete',
        'category_access',
        'category_show',
        'product_access',
        'product_show',
        'review_access',
        'review_show',
        'setting_access',
        'setting_show',
        'page_access',
        'page_show',
        'order_access',
        'order_show',
        'contact_access',
        'contact_show',
        'address_access',
        'address_show',
        'payment_method_access',
        'payment_method_show',
        'shipping_method_access',
        'shipping_method_show',
        'slider_access',
        'slider_show',
        'wishlist_access',
        'wishlist_show',
        'cart_access',
        'cart_show',
      ]);

    $role = Role::create(['name' => 'guest']);
  }
}