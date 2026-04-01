import Link from "next/link";

export default function Semester2() {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4">
        <Link
          href="/"
          className="px-20 py-16 bg-[#70a2f8] rounded-2xl text-black text-2xl"
        >
          <button>Content update soon</button>
        </Link>
      </div>
    );
}