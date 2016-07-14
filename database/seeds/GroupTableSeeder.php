<?php

use Illuminate\Database\Seeder;
use App\Group;

class GroupTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('groups')->delete();
        Group::create([
            'group_name'=>'admin',
        ]);

        Group::create([
            'group_name'=>'user',
        ]);
    }
}
