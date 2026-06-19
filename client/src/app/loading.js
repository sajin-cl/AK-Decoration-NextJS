export default function Loading() {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#0a0a0a] z-50 select-none font-mono">

            <div className="w-10 h-10 border-4 border-amber-400/20 border-t-amber-400 rounded-full animate-spin mb-4" />

            <p className="text-amber-300 text-sm uppercase tracking-[0.25em] font-mono animate-pulse">
                Welcome to AK Decoration world...
            </p>

        </div>
    );
}
