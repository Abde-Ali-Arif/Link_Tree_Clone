import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const handle = (await params).handle
    const client = await clientPromise;
    const db = client.db("bittree")
    const collection = db.collection("links")

    const item = await collection.findOne({ handle: handle })
    if (!item) {
        return notFound()
    }

    return (
        <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10 px-4 sm:px-0">
            {item && (
                <div className="photo flex justify-center flex-col items-center gap-4">

                    {/* IMAGE */}
                    <img
                        src={item.pic}
                        alt=""
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover"
                    />

                    {/* HANDLE */}
                    <span className="font-bold text-xl text-center">
                        @{item.handle}
                    </span>

                    {/* DESCRIPTION */}
                    <span className="desc w-80 sm:w-96 text-center">
                        {item.desc}
                    </span>

                    {/* LINKS */}
                    <div className="links w-full flex flex-col items-center">
                        {item.links.map((item, index) => {
                            return (
                                <Link target="blank" key={index} href={item.link}>
                                    <div
                                        className="bg-purple-100 py-4 shadow-lg px-2 
                                                   w-72 sm:min-w-96
                                                   flex justify-center 
                                                   rounded-md my-3 text-center"
                                    >
                                        {item.linktext}
                                    </div>
                                </Link>
                            )
                        })}
                    </div>

                </div>
            )}
        </div>
    )
}
