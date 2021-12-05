<div class="row">
    <div class="col">
        <div class="form-group">
            <input type="text" name="title" id="title" class="form-control @error('title') is-invalid @enderror" placeholder="Title goes here" value="{{ $post->title ?? old('title') }}">
        </div>
    </div>  
    <div class="col">
        <div class="form-group">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">Categories</label>
                </div>
                <select class="custom-select" name="category_id" id="category_id">
                  <option selected>Choose...</option>
                    @foreach ($categories as $category)
                        <option value="{{ $category->id ?? old('id') }} ">{{ $category->name }}</option>
                    @endforeach
                </select>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col">
        <div class="form-group">
            <input type="textarea" name="body" id="body" class="form-control @error('body') is-invalid @enderror" placeholder="body goes here" value="{{ $post->body ?? old('body') }}">
        </div>
    </div>
</div>
<div class="row">
    <div class="col">
        <div class="form-group">
            <input type="text" name="url" id="url" class="form-control @error('url') is-invalid @enderror" placeholder="Paste URL here" value="{{ $post->url ?? old('url') }}">
        </div>
    </div>
    <div class="col">
        <div class="form-group">
            <input type="text" name="coupon" id="coupon" class="form-control @error('coupon') is-invalid @enderror" placeholder="Paste COUPON here" value="{{ $post->coupon ?? old('coupon') }}">
        </div>
    </div>
</div>
<div class="row">
    <div class="col">
        <div class="form-group">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">Image</span>
                </div>
                <div class="custom-file">
                  <input type="file" class="custom-file-input @error('image') is-invalid @enderror" id="image" name="image" value="{{ $post->image ?? old('image') }}">
                  <label class="custom-file-label" for="inputGroupFile01">Choose...</label>
                </div>
              </div>
          </div>
    </div>
    <div class="col">
        <div class="form-group">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">PDF</span>
                </div>
                <div class="custom-file">
                  <input type="file" class="custom-file-input @error('pdf') is-invalid @enderror" id="pdf" name="pdf" value="{{ $post->pdf ?? old('pdf') }}">
                  <label class="custom-file-label" for="pdf">Choose...</label>
                </div>
              </div>
          </div>
    </div>
</div>

<div class="row">
    <div class="col"><button type="submit" class="btn btn-block btn-outline-primary"><i class="fas fa-save"></i> Save</button></div>
    <div class="col"><button type="reset" class="btn btn-block btn-outline-secondary"><i class="fas fa-window-close"></i> Cancel</button></div>
</div>