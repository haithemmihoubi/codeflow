<div class="card mb-4">
    <div class="card-header">
        <i class="fas fa-table me-1"></i>
        Posts to validate
    </div>
    <div class="card-body">
        <table id="datatablesSimple">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Image</th>
                    <th>URL</th>
                    <th>PDF</th>
                    <th>Coupon</th>
                    <th>Category</th>
                    <th>Created at</th>
                    <th>Updated at</th>
                </tr>
            </thead>
            <tbody>
            @foreach ($posts as $post)
            <tr>
                <td>{{$post->title}}</td>
                <td>{{$post->body}}</td>
                <td>{{$post->image}}</td>
                <td><a href="{{$post->url}}">GOTO LINK</a></td>
                <td>{{$post->pdf}}</td>
                <td><a href="{{$post->coupon}}">{{$post->coupon}}</a></td>
                <td>{{$post->category->name}}</td>
                <td>{{$post->created_at}}</td>
                <td>{{$post->updated_at}}</td>
            </tr>    
            @endforeach
            </tbody>
        </table>
    </div>
</div>