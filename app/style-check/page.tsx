export default function StyleCheckPage() {
  return (
    <div className="p-6 space-y-4 min-h-screen bg-zinc-950">
      <h1 className="text-3xl font-bold text-white">Style Check</h1>
      <p className="text-green-600">If this is green, Tailwind loaded.</p>
      <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors">
        Hover me
      </button>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-violet-400 mb-2">Color Test</h2>
          <div className="space-y-2">
            <div className="w-full h-4 bg-red-500 rounded"></div>
            <div className="w-full h-4 bg-green-500 rounded"></div>
            <div className="w-full h-4 bg-blue-500 rounded"></div>
            <div className="w-full h-4 bg-violet-500 rounded"></div>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-violet-400 mb-2">Layout Test</h2>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Flexbox works</span>
            <span className="text-green-400">✓</span>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <div className="h-8 bg-gray-600 rounded"></div>
            <div className="h-8 bg-gray-600 rounded"></div>
            <div className="h-8 bg-gray-600 rounded"></div>
          </div>
        </div>
      </div>
      <div className="mt-8 p-4 border border-gray-700 rounded-lg">
        <h2 className="text-xl font-semibold text-violet-400 mb-2">Dynamic Classes Test</h2>
        <p className="text-gray-300 mb-4">Testing the dynamic classes found in your codebase:</p>
        <div className="relative w-32 h-32 bg-gray-800 rounded-lg mx-auto">
          <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-8 h-8 bg-violet-500 rounded-full"></div>
          <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-8 h-8 bg-blue-500 rounded-full"></div>
        </div>
        <p className="text-center text-gray-400 mt-2">Purple and blue circles should be positioned correctly</p>
      </div>
    </div>
  );
}
