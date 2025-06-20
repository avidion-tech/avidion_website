'use client'
import { useRouter } from "next/navigation"
import { FaArrowLeft } from "react-icons/fa6"

export default function BackButton({label}:{label:string}) {
    const router=useRouter()
    return(
        <>
         <div
          onClick={() => router.back()}
          className="flex cursor-pointer flex-row items-center gap-2 rounded-[4px] border border-[#535353] px-[11px] py-2 text-xs text-[#EDEDED] md:px-[25px] md:py-[9px] md:text-sm"
        >
          <FaArrowLeft size={18} color="#C0C0C0" strokeWidth={0.1} />
          Back To {label}
        </div>
        </>
    )
}

