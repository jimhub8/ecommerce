@extends('layouts.temp')
@section('content') {{--  @auth('client')
<my-nav :user="{{ json_encode($auth_user) }}"></my-nav>
<transition name="fade">
    <router-view :user="{{ json_encode($auth_user) }}"></router-view>
</transition>
@endauth
@guest
<my-nav></my-nav>
<transition name="fade">
    <router-view></router-view>
</transition>

@endguest  --}}

@if(Auth::check())
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
{{-- <my-footer></my-footer> --}}
@endsection
