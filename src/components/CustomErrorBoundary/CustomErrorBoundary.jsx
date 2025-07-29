import { ErrorBoundary } from "react-error-boundary";

function CustomErrorBoundaryUI({ error, resetErrorBoundary }) {
  return (
    <div className="h-[100vh] flex justify-center items-center px-4">
      <div className="h-[100vh] flex justify-center items-center px-4">
        <div role="alert" className="alert alert-error">
          <p>Something went wrong:</p>
          <pre>{error?.message}</pre>
          <button
            onClick={resetErrorBoundary}
            className="font-bold cursor-pointer border rounded-md p-2 text-green-900"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CustomErrorBoundary({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={CustomErrorBoundaryUI}
      onReset={() => window.location.reload()}
    >
      {children}
    </ErrorBoundary>
  );
}
