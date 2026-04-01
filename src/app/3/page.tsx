import Link from "next/link";

export default function Semester3() {
    return (
      <>
        <div className="h-screen grid grid-cols-2 gap-8 items-place-center p-14 md:p-48 text-center">
          <Link
            href="https://www.notion.so/Antenna-Sessional-3348f9f9b287809c922cf0c2341a04bb?source=copy_link"
            className="px-20 py-16 bg-green-400 rounded-2xl text-black text-2xl"
          >
            <button>Analog Code</button>
          </Link>

          <Link
            href="https://www.notion.so/Antenna-Sessional-3348f9f9b287809c922cf0c2341a04bb?source=copy_link"
            className="px-20 py-16 bg-green-400 rounded-2xl text-black text-2xl"
          >
            <button>OOP Code</button>
          </Link>

          <Link
            href="https://www.notion.so/Antenna-Sessional-3348f9f9b287809c922cf0c2341a04bb?source=copy_link"
            className="px-20 py-16 bg-green-400 rounded-2xl text-black text-2xl"
          >
            <button>TNT Sessional</button>
          </Link>

          <Link
            href="https://www.notion.so/Antenna-Sessional-3348f9f9b287809c922cf0c2341a04bb?source=copy_link"
            className="px-20 py-16 bg-green-400 rounded-2xl text-black text-2xl"
          >
            <button>Mathematics Code</button>
          </Link>
        </div>
      </>
    );
}