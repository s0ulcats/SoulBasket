import MainPage from "@/components/features/main/MainPage";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/common/Skeleton";

export default async function HomePage() {
  return (
    <div className="space-y-10">
      <Suspense fallback={
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="w-[250px] h-[350px] rounded-3xl bg-primary p-4 shadow-lg text-white relative flex flex-col justify-between">
              <Skeleton className="w-full h-40 rounded-lg" />
              <div className="text-center mt-4">
                <Skeleton className="w-3/4 h-6 mx-auto" />
                <Skeleton className="w-1/2 h-4 mx-auto mt-2" />
              </div>
              <Skeleton className="w-full h-10 rounded-full mt-4" />
            </div>
          ))}
        </div>
      }>
        <MainPage />
      </Suspense>
    </div>
  );
}
