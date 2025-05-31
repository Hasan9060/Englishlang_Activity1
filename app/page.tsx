import Quiz from "@/components/Quiz";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24 overflow-hidden">
      {/* Background Image */}
      <img
        src="/background.jpg"
        alt="Background"
       className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Quiz Component */}
      <div className="w-full max-w-4xl mx-auto p-4 sm:p-6">
        <Quiz />
      </div>

      {/* Developer Credits - Responsive */}
      <div className="absolute bottom-5 w-full px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-white text-center sm:text-left font-bold bg-black/30 backdrop-blur-sm">
        <h1 className="text-lg sm:text-xl">Develop by Hasan Rafay</h1>
        <h1 className="text-lg sm:text-xl">Sir Nameer</h1>
      </div>
    </main>
  );
}
