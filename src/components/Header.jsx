function Header() {
  return (
    <nav class="relative flex w-full flex-nowrap items-center justify-between bg-theme-color-655dbb theme-font-lato py-4 lg:flex-wrap lg:justify-start" data-te-navbar-ref>
        <div class="flex w-full flex-wrap items-center justify-between px-6">
            {/* Grows the left div till 100%, pushing the next to the left */}
            <div class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto">
                <a class="text-4xl text-white font-bold" href="#">TradR</a>
            </div>
            <div class="relative flex items-center">
                <a class="text-3xl text-white font-normal" href="#">login</a>
            </div>
        </div>
    </nav>
  )
}

export default Header
