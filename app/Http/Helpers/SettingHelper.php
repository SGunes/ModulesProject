<?php
namespace App\Http\Helpers;

use App\Models\Setting;

class SettingHelper{

    /**
     * Returns the value of the desired setting
     * @param $key
     * @return string|null
     */
    public static function getValue($key)
    {
        $setting = Setting::where('key',$key)->first();
        return isset($setting)?$setting->value : null;
    }
    
}