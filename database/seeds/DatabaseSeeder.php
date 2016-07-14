<?php

use Illuminate\Database\Seeder;
use database\seeds\GroupTableSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	Eloquent::unguard();
        DB::table('groups')->insert([
            'group_name' => 'admin',
        ]);

        DB::table('groups')->insert([
            'group_name' => 'user',
        ]);
        $this->call(UserTableSeeder::class);
        Eloquent::reguard();
    }
}
