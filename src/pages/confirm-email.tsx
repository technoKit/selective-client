import { EnvelopeIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <div className="bg-slate-100 h-[70vh]">
      <div className="flex justify-center items-center h-full text-3xl text-slate-500">
        We have sent you a confirmation email
        <EnvelopeIcon className="h-10 ml-3" />
      </div>
    </div>
  );
}
