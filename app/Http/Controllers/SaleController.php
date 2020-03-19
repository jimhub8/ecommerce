<?php

namespace App\Http\Controllers;

use App\models\AutoGenerate;
use App\models\Drawer;
use App\models\ProductSale;
use App\models\Sale;
use App\models\Sku;
use Illuminate\Http\Request;
use Cart;
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
            $sale->discount = ($sale->discount != null) ? $sale->discount : 0;
            $total = 0;
            foreach ($sale->products as $product) {
                $total += $product->price;
            }
            $sale->sub_total = $sale->sub_total;
            $sale->total = $sale->sub_total - $sale->discount;
            $sale->client_name = $sale->client->name;
            $sale->user_name = $sale->user->name;
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
    public function sale($carts)
    {
        $client_id = Auth::id();
        $total_price = $this->cart_total();
        $sub_total_price = $this->cart_total();
        $sale = new Sale;
        $sale->total_price = $total_price;
        $sale->sub_total = $sub_total_price;
        // $sale->discount = $discount;
        $sale->user_id = Auth::id();
        $sale->client_id = $client_id;
        $order_no = new AutoGenerate;
        $sale->order_no = $order_no->order_no();
        $sale->save();
        foreach ($carts as $cart) {
            // dd($cart);
            $sku_id = Sku::where('sku_no', $cart->name['sku_no'])->first('id');
            $sku_id = $sku_id->id;
            $product_sale = new ProductSale;
            $product_sale->sale_id = $sale->id;
            $product_sale->product_id = $cart->name['id'];
            $product_sale->vendor_id = 1;
            $product_sale->sku_id = $sku_id;
            $product_sale->sku_no =  $cart->name['sku_no'];
            $product_sale->price = $cart->name['price'];
            $product_sale->quantity = $cart->quantity;
            $product_sale->total_price = $cart->name['price'] * $cart->quantity;
            $product_sale->save();
        }
        return $sale;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\models\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return  Sale::find($id);
    }

    public function cart_total()
    {
        return $cart = Cart::getTotal();
        return str_replace(',', '', $cart);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\models\Sale  $sale
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Sale::find($id)->delete();
    }
}
