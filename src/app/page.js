import Cards from "@/components/Cards";
import PlacesCards from "@/components/places/Cards";

export default function Home() {
  return (
    <main>
      <div className="bgimage flex justify-center items-center min-h-screen text-white">
        <h3 className="text-4xl font-signature ml-2">WinGone Village</h3>
      </div>
      <div className="flex justify-center p-5 mb-6">
        <Cards />
      </div>
      <h1 className="p-5 text-3xl font-bold font-signature ml-2 mb-6">Places</h1>
      <div className="flex justify-center">
        <PlacesCards />
      </div>
    </main>
  );
}
