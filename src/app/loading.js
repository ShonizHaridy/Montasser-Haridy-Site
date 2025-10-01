export default function Loading() {
  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 premium-gradient rounded-lg flex items-center justify-center mx-auto mb-6">
          <span className="text-white font-bold text-2xl">MH</span>
        </div>
        <div className="w-12 h-12 border-4 border-gold-500/30 border-t-gold-500 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white text-lg">Loading...</p>
      </div>
    </div>
  );
}