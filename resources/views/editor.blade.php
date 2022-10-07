@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Dashboard') }}</div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif

                        <div id="editorjs"></div>
                        <button id="save-button">Save</button>
                        <pre id="output"></pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        window.addEventListener("load", function() {
            const editor = new window.EditorJS({
                holder: 'editorjs',
                tools: {
                    header: window.EditorJSTools.Header,
                    image: window.EditorJSTools.GifPlugin,
                }
            });


            const saveButton = document.getElementById('save-button');
            const output = document.getElementById('output');

            saveButton.addEventListener('click', () => {
                editor.save().then(savedData => {
                    output.innerHTML = JSON.stringify(savedData, null, 4);
                })
            })
        });
    </script>
@endsection
