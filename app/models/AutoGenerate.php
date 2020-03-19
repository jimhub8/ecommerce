<?php

namespace App\models;

class AutoGenerate
{
    public function order_no()
    {
        $order_number = Sale::withTrashed()->select('id')->orderBy('id', 'Desc')->first();
        // dd($order_number);
        if ($order_number) {
            $inv_arr = explode('ORD_', $order_number->order_no);
            // dd($order_number);
            // $id = ''.str_pad($product->id + 1, 8, "0", STR_PAD_LEFT);
            $order_no = ($inv_arr) ? str_pad($order_number->id + 1, 8, "0", STR_PAD_LEFT) : str_pad(1, 8, "0", STR_PAD_LEFT);
            $validator = \Validator::make(['order_no' => $order_no], ['order_no' => 'unique:sales,order_no']);
            if ($validator->fails()) {
                $in_ar = (int) $inv_arr[1];
                for ($i = 1; $i < 50; $i++) {
                    $order_no = ($order_number) ? str_pad($in_ar + $i, 8, "0", STR_PAD_LEFT) : str_pad(1, 8, "0", STR_PAD_LEFT);
                    $validator = \Validator::make(['order_no' => $order_no], ['order_no' => 'unique:sales,order_no']);
                    if (!$validator->fails()) {
                        return 'ORD_' .  $order_no;
                    }
                }
            } else {
                return 'ORD_' .  $order_no;
            }
        } else {
            return 'ORD_' .  str_pad(1, 8, "0", STR_PAD_LEFT);
        }
    }

}
