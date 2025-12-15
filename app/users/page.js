import Link from "next/link";
import clientPromise from "@/lib/mongodb";

export default async function UsersPage() {
  const client = await clientPromise;
  const db = client.db("bittree");
  const collection = db.collection("links");

  // Fetch all users
  const users = await collection.find({}).toArray();

  return (
    <div className="min-h-screen bg-purple-400 flex justify-center px-4 sm:px-6 py-10">
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl">
        
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white">
          Registered Users
        </h1>

        <div className="flex flex-col gap-4">
          {users.map((user) => (
            <Link
              key={user._id.toString()}
              href={`/${user.handle}`}
              className="block"
            >
              <div className="bg-purple-100 p-3 sm:p-4 rounded-xl shadow-md 
                              flex items-center gap-3 sm:gap-4
                              transition-transform hover:scale-[1.02]">

                <img
                  src={user.pic}
                  alt={user.handle}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
                />

                <div className="overflow-hidden">
                  <p className="font-bold text-base sm:text-lg truncate">
                    @{user.handle}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {user.desc}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
