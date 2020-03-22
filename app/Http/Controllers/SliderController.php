<?php

namespace App\Http\Controllers;

use App\models\Slider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class SliderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Slider::skip(1)->take(7)->get();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\models\Slider  $slider
     * @return \Illuminate\Http\Response
     */
    public function show(Slider $slider)
    {
        return Slider::first();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\models\Slider  $slider
     * @return \Illuminate\Http\Response
     */
    public function destroy(Slider $slider)
    {
        //
    }
}
