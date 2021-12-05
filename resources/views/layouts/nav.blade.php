<nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
  <!-- Navbar Brand-->
  <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!" style="text-decoration: none; "> <a class="navbar-brand ps-2" href="{{ url('/') }}">{{ config('app.app_name') }} | Admin Dashboard </a></button>
  <!-- Navbar-->
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
    <i class="fas fa-bars"></i>
  </button>
  <ul class="navbar-nav ms-auto">
      <!-- Authentication Links -->
        @guest
            @if (Route::has('login'))
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                </li>
            @endif

            @if (Route::has('register'))
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                </li>
            @endif
            @else
                <li class="nav-item">
                    <div class="dropdown">
                        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="{{asset('images/'.Auth::user()->image)}}}" alt="" width="32" height="32" class="rounded-circle me-2">
                        <strong>{{ Auth::user()->name }}</strong>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><a class="dropdown-item" href="#">New project...</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Sign out</a></li>
                            <li>
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                onclick="event.preventDefault();
                                document.getElementById('logout-form').submit();">
                                {{ __('Logout') }}
                                </a>
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                @csrf
                                </form>
                            </li>
                        </ul>
                    </div>
                    </a>
                </li>
        @endguest
  </ul>
</nav>