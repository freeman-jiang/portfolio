export const Gradients = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-0 md:opacity-50 lg:opacity-60">
      <div className="absolute top-0 -left-4 h-[70vh] w-[18vw] animate-blob rounded-full bg-emerald-200 mix-blend-multiply blur-3xl filter"></div>
      <div className="animation-delay-2000 absolute top-0 -right-4 h-[60vh] w-[18vw] animate-blob rounded-full bg-indigo-200 mix-blend-multiply blur-3xl filter"></div>
      <div className="animation-delay-4000 absolute -bottom-8 left-20 h-[60vh] w-[18vw] animate-blob rounded-full bg-pink-200 mix-blend-multiply blur-3xl filter"></div>
      <div className="animation-delay-6000 absolute -bottom-8 right-20 h-[60vh] w-[18vw] animate-blob rounded-full bg-sky-200 mix-blend-multiply blur-3xl filter"></div>
    </div>
  );
};

export const ContactGradients = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="opacity-0 lg:opacity-85">
        <div className="absolute top-0 -left-4 h-[70vh] w-[18vw] animate-blob rounded-full bg-indigo-200 mix-blend-multiply blur-[100px] filter"></div>
        <div className="animation-delay-2000 absolute top-0 -right-4 h-[60vh] w-[18vw] animate-blob rounded-full bg-pink-200 mix-blend-multiply blur-[100px] filter"></div>
        <div className="animation-delay-4000 absolute -bottom-8 left-20 h-[60vh] w-[18vw] animate-blob rounded-full bg-emerald-200 mix-blend-multiply blur-[100px] filter"></div>
        <div className="animation-delay-6000 absolute -bottom-8 right-20 h-[60vh] w-[18vw] animate-blob rounded-full bg-purple-200 mix-blend-multiply blur-[100px] filter"></div>
      </div>
      <div className="hidden">
        <div className="-left-10 absolute h-24 w-24 animate-blob rounded-full bg-emerald-300 mix-blend-multiply blur-2xl filter" />
        <div className="absolute -right-10 h-24 w-24 animate-blob rounded-full bg-sky-300 mix-blend-multiply blur-2xl filter" />
        <div className="-left-10 -bottom-10 absolute h-14 w-44 animate-blob rounded-full bg-indigo-300 mix-blend-multiply blur-3xl filter" />
        <div className="absolute -bottom-10 -right-10 h-14 w-44 animate-blob rounded-full bg-purple-300 mix-blend-multiply blur-3xl filter" />
      </div>
    </div>
  );
};
