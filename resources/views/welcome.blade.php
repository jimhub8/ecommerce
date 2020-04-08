@extends('layouts.temp')
@section('content')
@if(Auth::check() || Auth::guard('seller')->check())
<v-app>
<my-nav :user="{{ json_encode($auth_user) }}"></my-nav>
<transition name="fade">
    <router-view :user="{{ json_encode($auth_user) }}"></router-view>
</transition>
</v-app>
@else
<v-app>
    <my-nav></my-nav>
<transition name="fade">
    <router-view></router-view>
</transition>
</v-app>
@endif
<v-app>
    <my-footer></my-footer>
</v-app>
@endsection
