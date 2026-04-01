import Link from "next/link";

export default function Semester3() {
    return (
      <>
        <div className="h-screen grid grid-cols-1 md:grid-cols-2 gap-8 items-place-center px-10 py-14 md:p-48 text-center">
          <Link
            href="https://www.notion.so/Analog-Communication-Sessional-3358f9f9b28780eb972acacb662c8f22?source=copy_link"
            className="px-20 py-16 bg-[#F79B72] rounded-2xl text-black text-2xl"
          >
            <button>Analog Code</button>
          </Link>

          <Link
            href="https://www.notion.so/OOPs-3358f9f9b2878062a303d7533ec13909?source=copy_link"
            className="px-20 py-16 bg-[#B7BDF7] rounded-2xl text-black text-2xl"
          >
            <button>OOP Code</button>
          </Link>

          <Link
            href="https://www.notion.so/Digital-Electronics-Sessional-3358f9f9b2878012acc6ead668dd35f3?source=copy_link"
            className="px-20 py-16 bg-[#FDACAC] rounded-2xl text-black text-2xl"
          >
            <button>TNT Sessional</button>
          </Link>

          <Link
            href="https://www.notion.so/Discrete-Mathematics-Sessional-3358f9f9b28780c9a76ec47dda9e6686?source=copy_link"
            className="px-20 py-16 bg-[#BBC863] rounded-2xl text-black text-2xl"
          >
            <button>Mathematics Code</button>
          </Link>
        </div>
      </>
    );
}