export const Gradients = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute top-0 -left-4 h-[70vh] w-[18vw] animate-blob rounded-full bg-green-300 opacity-20 mix-blend-multiply blur-3xl filter"></div>
      <div className="animation-delay-2000 absolute top-0 -right-4 h-[60vh] w-[18vw] animate-blob rounded-full bg-indigo-300 opacity-20 mix-blend-multiply blur-3xl filter"></div>
      <div className="animation-delay-4000 absolute -bottom-8 left-20 h-[60vh] w-[18vw] animate-blob rounded-full bg-pink-300 opacity-20 mix-blend-multiply blur-3xl filter"></div>
      <div className="animation-delay-4000 absolute -bottom-8 right-20 h-[60vh] w-[18vw] animate-blob rounded-full bg-sky-300 opacity-20 mix-blend-multiply blur-3xl filter"></div>
    </div>
  );
};
