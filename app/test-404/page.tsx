import { Metadata } from "next";
import { AlchemyCrucible404 } from "@/components/error/alchemy-crucible-404";

export const metadata: Metadata = {
  title: "404 Preview - Piece Melted Down | Niraj Jewellers London",
  description:
    "The jewellery piece or atelier archive you are seeking has been melted down for re-casting at our Hayes workshop.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Test404Page() {
  return <AlchemyCrucible404 />;
}
