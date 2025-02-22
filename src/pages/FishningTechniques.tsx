import { useState } from "react";

interface Technique {
  name: string;
  description: string;
}

const techniques: Technique[] = [
  {
    name: "Trawling",
    description:
      "Trawling involves pulling a fishing net through the water behind one or more boats. It is commonly used for catching fish near the seabed or in midwater.",
  },
  {
    name: "Longlining",
    description:
      "Longlining uses a long main fishing line with baited hooks attached at intervals. It is effective for catching large fish like tuna and swordfish.",
  },
  {
    name: "Purse Seining",
    description:
      "A technique where a large net is used to encircle a school of fish, then drawn tight at the bottom to prevent escape. This is widely used for catching sardines and tuna.",
  },
  {
    name: "Gillnetting",
    description:
      "Gillnetting uses vertical panels of netting to entangle fish by their gills as they attempt to swim through. It is a common method for harvesting salmon and herring.",
  },
  {
    name: "Pole and Line",
    description:
      "A sustainable fishing technique where individual fish are caught using a fishing rod, line, and bait. This method is popular for catching tuna and other large fish.",
  },
  {
    name: "Drift Netting",
    description:
      "Drift netting involves floating nets with weights at the bottom and buoys at the top to capture passing fish. It is mainly used for catching pelagic species like mackerel and squid.",
  },
  {
    name: "Spearfishing",
    description:
      "Spearfishing is an ancient method that involves using a spear or harpoon to catch fish, often done while diving underwater.",
  },
];

const FishingTechniques = () => {
  const [selectedTechnique, setSelectedTechnique] = useState<Technique | null>(
    null
  );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Fishing Techniques
      </h2>
      <ul className="space-y-2">
        {techniques.map((technique, index) => (
          <li
            key={index}
            className="cursor-pointer p-2 bg-blue-100 rounded-md hover:bg-blue-200"
            onClick={() => setSelectedTechnique(technique)}
          >
            {technique.name}
          </li>
        ))}
      </ul>
      {selectedTechnique && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="text-xl font-semibold text-gray-700">
            {selectedTechnique.name}
          </h3>
          <p className="text-gray-600 mt-2">{selectedTechnique.description}</p>
        </div>
      )}
    </div>
  );
};

export default FishingTechniques;
