<?php

use Illuminate\Database\Seeder;
use App\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();
        for ($x = 0; $x < 10; $x++) {
            User::create([
            'name' => str_random(10),
            'email' => str_random(10).'@gmail.com',
            'password' => bcrypt('secret'),
            'remember_token' => str_random(60),
            'group_id' => 2,
            ]);
        } 

        User::create([
            'name' => 'jimmy xu',
            'email' => 'jimmygns@me.com',
            'password' => bcrypt('123456'),
            'remember_token' => str_random(60),
            'group_id' => 1,
            ]);


        User::create([
            'name' => 'tester1',
            'email' => 'tester1@me.com',
            'password' => bcrypt('123456'),
            'remember_token' => str_random(60),
            'group_id' => 2,
            ]);
    }
}
