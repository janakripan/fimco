import TransitionLink from "./components/shared/TransitionLink";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-primary flex flex-col items-center justify-center px-6 text-center select-none">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-montserrat font-black text-white/5 tracking-tighter">
          404
        </div>
      </div>

      <div className="relative z-10">
        <span className="text-accent font-montserrat uppercase tracking-[0.4em] text-xs md:text-sm font-bold block mb-6 px-4 py-1 border border-accent/30 w-fit mx-auto rounded-full">
          Error 404
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-8 leading-tight tracking-tight">
          Lost in <span className="text-accent italic font-light">Elegance.</span>
        </h1>
        
        <p className="text-white/50 font-montserrat text-base md:text-lg max-w-md mx-auto mb-12 leading-relaxed">
          The page you are looking for has been moved or retired from our elite collection. Let us guide you back home.
        </p>

        <TransitionLink href="/">
          <button className="group relative px-10 py-5 bg-accent text-primary font-montserrat text-[11px] uppercase tracking-[0.3em] font-bold rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,106,0.3)]">
            <span className="relative z-10">Return to Foundation</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]" />
          </button>
        </TransitionLink>
      </div>
      
      {/* Bottom info */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6">
        <span className="text-white/20 font-montserrat text-[9px] uppercase tracking-widest">Fimco Real Estate</span>
        <div className="w-8 h-px bg-white/10" />
        <span className="text-white/20 font-montserrat text-[9px] uppercase tracking-widest">Dubai, UAE</span>
      </div>
    </div>
  );
}
