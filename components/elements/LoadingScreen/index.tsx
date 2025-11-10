import { Loader } from "lucide-react";

const LoadingScreen = () => {
  return (
    <main className="bg-light-black flex min-h-screen items-center justify-center font-jakarta-sans text-s4 gap-3 text-center">
      <Loader className="animate-spin duration-600" /> Memuat...
    </main>
  );
};

export default LoadingScreen;
