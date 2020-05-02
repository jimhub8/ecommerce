<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\models\Sale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SaleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sales = Sale::paginate(500);
        $sales->transform(function ($sale) {
            // $sale->discount = ($sale->discount != null) ? $sale->discount : 0;
            // $total = 0;
            // foreach ($sale->products as $product) {
            //     $total += $product->price;
            // }
            $sale->sub_total = $sale->sub_total;
            $sale->image = 'http://192.168.43.81:82/assets/default.jpg';
            $sale->total = $sale->sub_total - $sale->discount;
            // $sale->client_name = $sale->client->name;
            // $sale->user = Auth::user();
            return $sale;
        });
        return $sales;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\models\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function show(Sale $sale)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\models\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sale $sale)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\models\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sale $sale)
    {
        //
    }
}
