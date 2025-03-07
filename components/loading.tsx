import { Skeleton } from '@/components/ui/skeleton';

const LoadingReshults = () => {
  return (
    <div className="flex flex-col gap-4 pb-16 mt-8">

      <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-1">
        {[1, 2, 3, 4, 5, 6,7,8,9,10].map((e) => (
          <div key={e} className="flex flex-col space-y-2 p-4">
            <Skeleton className="h-10 w-full lg:w-64" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingReshults;