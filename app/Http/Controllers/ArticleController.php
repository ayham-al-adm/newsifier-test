<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Show article page.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function show($slug)
    {
        $article = Article::where('slug', $slug)->firstOrFail();
        return view('articles.show', ['article' => $article]);
    }

    /**
     * Show create article form.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function create()
    {
        return view('articles.create');
    }

    public function store(Request $request)
    {
        $request->merge([
            'description'   => $this->extractHtmlFromEditorBlock($request->pure_description),
        ]);

        Article::create($request->all());
        return redirect()->back()->with('success', 'Item created successfully!');
    }

    private function extractHtmlFromEditorBlock($desc)
    {
        $desc = json_decode($desc, true);
        $blocks = $desc['blocks'];
        $html = "";

        foreach ($blocks as $block) {
            if ($block['type'] == 'image') {
                $html .= '<img width="100%" src="' . $block['data']['url'] . '">';
            } else {
                $html .= '<p>' . $block['data']['text'] . '</p>';
            }
        }
        return $html;
    }
}
