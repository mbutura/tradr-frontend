function Header() {
  return (
    <nav
    class="relative flex w-full flex-nowrap items-center justify-between bg-theme-color-655dbb py-4 lg:flex-wrap lg:justify-start"
    data-te-navbar-ref>
    <div class="flex w-full flex-wrap items-center justify-between px-6">
        <div class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto">
            <a class="text-4xl text-white theme-font-lato font-bold" href="#">TradR</a>
        </div>
    </div>
    </nav>
  )
}

export default Header
