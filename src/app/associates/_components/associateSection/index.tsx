"use client";
import React, { useEffect, useState, useRef } from "react";
import style from "./style.module.css";
import Container from "@/components/container";
import { ServerFetch } from "@/actions/server-fetch";
import { useLoadScript, StandaloneSearchBox } from "@react-google-maps/api";
import Image from "next/image";
import Link from "next/link";

export interface BannerBottomSection {
  data: {
    form_heading: string;
    form_small_text: string;
  };
}

export interface Associate {
  id: number;
  name: string;
  city: string;
  state: string;
  state_code: string;
  distance: number;
  formatted_distance: string;
  slug: string | null;
}

export interface AssociateApiResponse {
  associates: Associate[];
  count: number;
  hasDistanceCalculation: boolean;
  zipCode: string;
}

const libraries: ("places")[] = ["places"];

const AssociateSection: React.FC<BannerBottomSection> = ({ data }) => {
  const [zip, setZip] = useState("");
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [results, setResults] = useState<Associate[]>([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [types, setTypes] = useState<string[]>([]); // ✅ Now supports multiple dealer types
  const [error, setError] = useState("");

  const GOOGLE_MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_KEY,
    libraries,
  });

  const searchBoxRef = useRef<google.maps.places.SearchBox | null>(null);

  const extractPostalCode = (place: google.maps.places.PlaceResult): string => {
    const postalCode = place.address_components?.find((component) =>
      component.types.includes("postal_code")
    );
    return postalCode ? postalCode.long_name : "";
  };

  const onPlacesChanged = () => {
    const places = searchBoxRef.current?.getPlaces();
    if (places && places.length > 0) {
      const place = places[0];
      const postal = extractPostalCode(place);
      if (postal) setZip(postal);
      if (place.geometry?.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        setCoords({ lat, lng });
      }
    }
  };

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (!/^\d*$/.test(value)) {
      setError("Please enter digits only (no letters allowed)");
      setZip(value);
      setResults([]);
      setCount(0);
      return;
    }
    setError("");
    setZip(value);
  };

  // ✅ FIXED: Now sends dealer_type as array
  const handleSearch = async (
    zipCode: string,
    dealerTypes: string[],
    latitude?: number,
    longitude?: number
  ) => {
    try {
      setLoading(true);
      const payload = {
        dealer_type: dealerTypes, 
        zip_code: zipCode || "",
        latitude_code: latitude?.toString() || "",
        longitude_code: longitude?.toString() || "",
      };
      const query = new URLSearchParams();
      Object.entries(payload).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => query.append(`${key}[]`, v));
        } else if (value !== undefined && value !== null) {
          query.append(key, value.toString());
        }
      });
      
      const res: AssociateApiResponse = await ServerFetch(
        `/search-associates?${query.toString()}`,
        { method: "POST", cache: "no-store" }
      );

      if (res && Array.isArray(res.associates)) {
        setResults(res.associates);
        setCount(res.count || res.associates.length);
      } else {
        setResults([]);
        setCount(0);
      }
    } catch (err) {
      console.error("❌ Search error:", err);
      setResults([]);
      setCount(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (!error && zip && zip.length >= 4) {
        handleSearch(zip, types, coords?.lat, coords?.lng);
      } else {
        setResults([]);
        setCount(0);
      }
    }, 600);
    return () => clearTimeout(delayDebounce);
  }, [zip, types, coords]);

  // ✅ MULTI SELECT FIX: toggle type selection
  const handleTypeSelect = (selectedType: string) => {
    setTypes((prev) =>
      prev.includes(selectedType)
        ? prev.filter((t) => t !== selectedType)
        : [...prev, selectedType]
    );
  };

  const dealerTypes = [
    { label: "Repairs", value: "repairs" },
    { label: "Commercial", value: "commercial" },
    { label: "Dealers", value: "dealer" },
    { label: "RV", value: "rv" },
  ];

  if (!data) {
    return (
      <section className="w-full py-20 text-center text-gray-500">
        Loading section...
      </section>
    );
  }

  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row w-full">
        {/* LEFT SECTION */}
        <div
          className={`${style.leftSection} lg:w-[65%] lg:pt-[108px] lg:pb-[76px] text-center lg:text-left`}
        >
          <div className={`${style.yellowContainer} px-6 sm:px-10 md:px-14`}>
            <h2>{data?.form_heading || "Find Associates Near You"}</h2>
            <p>
              {data?.form_small_text ||
                "Enter at least 4 digits of your zip code to find nearby associates."}
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div
          className={`${style.rightSection} w-full lg:w-[35%] pt-[60px] lg:pt-[108px] lg:pb-[76px] flex-col items-center`}
        >
          {isLoaded && !error ? (
            <StandaloneSearchBox
              onLoad={(ref) => (searchBoxRef.current = ref)}
              onPlacesChanged={onPlacesChanged}
            >
              <input
                type="text"
                placeholder="Enter ZIP code"
                className={`${style.zipInput}`}
                value={zip}
                onChange={handleZipChange}
              />
            </StandaloneSearchBox>
          ) : (
            <input
              type="text"
              placeholder="Enter ZIP code"
              className={`${style.zipInput}`}
              value={zip}
              onChange={handleZipChange}
            />
          )}

          {error && (
            <p className="text-red-800 text-sm mt-1 font-medium">{error}</p>
          )}

          {/* ✅ MULTI SELECT CHECKBOXES */}
          <div className="flex flex-row justify-between mt-[15px]">
            {[dealerTypes.slice(0, 2), dealerTypes.slice(2, 4)].map(
              (group, i) => (
                <div key={i} className={i === 1 ? "ml-[30px]" : ""}>
                  {group.map(({ label, value }, j) => (
                    <label
                      key={value}
                      className={`flex items-center space-x-2 text-white cursor-pointer ${
                        j === 1 ? "mt-3" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={types.includes(value)} // ✅ multiple selection check
                        onChange={() => handleTypeSelect(value)}
                        className={style.checkboxInput}
                      />
                      <span className={style.checklabel}>{label}</span>
                    </label>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* RESULTS SECTION */}
      <div className="bg-[#FFFFFF]">
        <Container className={`${style.financeCard}`}>
          <div className="flex justify-center items-center">
            <h3 className={`${style.financeTitle}`}>
              {loading
                ? "Loading associates..."
                : count > 0
                ? `Found ${count} Associates near ZIP ${zip}`
                : zip.length >= 4 && !error
                ? "No associates found"
                : "Search Associates by ZIP Code"}
            </h3>
          </div>

          {!loading && results.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-6 sm:px-8 lg:px-0">
              {results.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white border border-gray-200 rounded-lg px-[20px] py-[clamp(20px,4vw,40px)] hover:shadow-md transition-all duration-300"
                >
                  <Link href={"/financing/abid"}>
                    <div className="flex flex-row">
                      <Image
                        src="/images/finance/financeName.png"
                        alt="Finance Company"
                        height={18}
                        width={19}
                        className="object-cover"
                      />
                      <h4 className={`${style.Financercom}`}>{partner.name}</h4>
                    </div>

                    <div className="flex flex-row mt-[18px]">
                      <Image
                        src="/images/finance/location.png"
                        alt="Finance Company"
                        height={18}
                        width={13}
                        className="object-cover"
                      />
                      <p className={`${style.location}`}>
                        {partner.city}, {partner.state}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </Container>
      </div>
    </section>
  );
};

export default AssociateSection;
