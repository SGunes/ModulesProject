<?php

namespace Database\Seeders;

use App\Models\Theme;
use Illuminate\Database\Seeder;

class ThemeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // resources\themes directory folder name

        Theme::firstOrCreate([
            "folder_name" => "a1",
            "title" => "Tema 1",
            "isActive" => true
        ]);

        Theme::firstOrCreate([
            "folder_name" => "a2",
            "title" => "Tema 2"
        ]);

        Theme::firstOrCreate([
            "folder_name" => "a3",
            "title" => "Tema 3"
        ]);
    }
}
