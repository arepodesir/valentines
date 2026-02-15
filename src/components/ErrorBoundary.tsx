import { type Component, ErrorBoundary as ParentErrorBoundary } from 'solid-js';

export const ErrorBoundary: Component<{ children: any }> = (props) => (
  <ParentErrorBoundary fallback={(err) => (
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black text-white p-8">
      <div class="text-center">
        <h1 class="text-2xl font-bold text-red-500 mb-4">Something went wrong</h1>
        <pre class="bg-red-900/20 p-4 rounded text-left text-xs overflow-auto max-w-lg">
          {err.toString()}
        </pre>
        <button onClick={() => window.location.reload()} class="mt-6 px-4 py-2 bg-white text-black rounded hover:bg-gray-200">
          Reload
        </button>
      </div>
    </div>
  )}>
    {props.children}
  </ParentErrorBoundary>
);
