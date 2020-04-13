<!DOCTYPE html>
<html lang="en">

<head>
    <title>{{ config('app.name', 'Laravel') }}</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="/storage/icons/favicon.png" />

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="{{ asset('js/jquery.js') }}"></script>
    <script src="{{ asset('js/bootstrap.min.js') }}"></script>

    <link href="{{ asset('css/all.css') }}" rel="stylesheet">
    {{--  <link rel="stylesheet" href="https://d29u17ylf1ylz9.cloudfront.net/bege-v2/css/ionicons.min.css">  --}}
    {{--  <link rel="stylesheet" href="https://d29u17ylf1ylz9.cloudfront.net/bege-v2/css/css-plugins-call.css">  --}}
    {{--  <link rel="stylesheet" href="https://d29u17ylf1ylz9.cloudfront.net/bege-v2/css/bundle.css">  --}}
    {{--  <link rel="stylesheet" href="https://d29u17ylf1ylz9.cloudfront.net/bege-v2/css/main.css">  --}}
    {{--  <link rel="stylesheet" href="https://d29u17ylf1ylz9.cloudfront.net/bege-v2/css/responsive.css">  --}}
    {{--  <link rel="stylesheet" href="https://d29u17ylf1ylz9.cloudfront.net/bege-v2/css/colors.css">  --}}
</head>

<body>
    <div id="app">
        <main class="py-4">
            @yield('content')
        </main>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
    {{-- <script src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script> --}}
    {{--  <script type="text/javascript" src="{{ asset('vendor/jquery/jquery-3.2.1.min.js') }}"></script> --}}
    <script type="text/javascript" src="{{ asset('vendor/animsition/js/animsition.min.js') }}"></script>
    <script src="{{ asset('js/main.min.js') }}"></script>
    <!-- WhatsHelp.io widget -->
    <!-- /WhatsHelp.io widget -->
    {{-- <script type="text/javascript">
        window.$crisp=[];window.CRISP_WEBSITE_ID="0f76d712-616b-4b79-b6cb-26db4575b205";(function(){ d=document;s=d.createElement("script"); s.src="https://client.crisp.chat/l.js"; s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
    </script> --}}

</body>

</html>
