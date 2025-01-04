import { MoonLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <MoonLoader color="#374151" />
    </div>
  );
}
