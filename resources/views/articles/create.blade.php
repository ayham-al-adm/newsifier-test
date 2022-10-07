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
                        <form id="create-form" method="POST" action="{{ route('articles.store') }}">
                            @csrf
                            <label for="title" class="form-label">Title:</label>
                            <input name="title" type="text" class="form-control" required>

                            <label for="description" class="form-label mt-2">Description:</label>
                            <div id="editorjs" name="description"></div>
                            <div class="text-end">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                            <textarea id="output" name="pure_description" hidden></textarea>
                        </form>
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

            const output = document.getElementById('output');

            document.getElementById('create-form').onsubmit = async function() {
                const savedData = await editor.save();
                output.innerHTML = JSON.stringify(savedData, null, 4);
            }
        });
    </script>
@endsection
