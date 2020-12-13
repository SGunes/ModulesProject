<?php
namespace App\Http\Helpers;

use App\Models\Theme;

class ThemeHelper{

    /**
     * returns active theme information
     * @return mixed
     */
    public static function getActiveTheme()
    {
        $theme = Theme::where('isActive',1)->first();
        return $theme;
    }

    /**
     * returns the folder name of the currently active theme
     * @return string|null
     */
    public static function getActiveThemeFolderName()
    {
        $theme = self::getActiveTheme();
        return isset($theme) ? $theme->folder_name : null;
    }
}