<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Role;
use App\Models\RolePrivilege;
use App\Models\Privilege;
use App\Models\Staff;



// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $superAdmin = User::factory()
            ->create([
                'first_name' => 'admin',
                'last_name' => 'admin',
                'gender' => 'MALE',
                'username' => 'admin@biro',
                'password' => bcrypt('adminadmin'),
                'email' => 'haftish.tsegay@gmail.com'
            ]);

        $superAdminRole = Role::factory()
            ->create([
                'name' => 'super admin',
                'slug' => 'super-admin',
                'description' => 'this role has the highest level of authority',
                'level' => 0
            ]);

        $privilegeNames = [
            'create_company_type',
            'create_privilege',
            'create_role',
            'create_company',
            'create_user',
            'create_staff',
            'create_office',
            'create_country',
            'create_state',
            'create_city',
        ];

        //give the admin all the above roles
        foreach ($privilegeNames as $privilegeName) {
            $privilege = Privilege::factory()->create(['name' => $privilegeName, 'description' => null]);
            RolePrivilege::factory()->create(['role_id' => 1, 'privilege_id' => $privilege->id]);
        }

        Staff::factory()
            ->create(
                [
                    'user_id' => $superAdmin->id,
                    'role_id' => $superAdminRole->id,
                ]
            );
    }
}
