@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Article show</div>

                    <div class="card-body">
                        <div class="h3">{{ $article->title }}</div>
                        <div class="p">{!! $article->description !!}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
