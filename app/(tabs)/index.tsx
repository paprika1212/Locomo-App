import { View, Text } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <Text className="text-white text-2xl">Welcome to Locomo App!</Text>
    </View>
  );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Battery,
  Calendar,
  ChevronDown,
  Coffee,
  Home,
  MapPin,
  Search,
  Signal,
  User,
  Wifi,
} from "lucide-react";
import React from "react";

const navigationItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Coffee, label: "Food", active: false },
  { icon: Search, label: "", active: true, primary: true },
  { icon: Calendar, label: "Events", active: false },
  { icon: User, label: "Profile", active: false },
];

const locationCards = [
  {
    image: "/placeholder-location.jpg",
    title: "Niladri Reservoir",
    time: "Today, 7:00 PM, 0.5 miles away",
  },
  {
    image: "/placeholder-location.jpg",
    title: "Niladri Reservoir",
    time: "Today, 7:00 PM, 0.5 miles away",
  },
  {
    image: "/placeholder-location.jpg",
    title: "Niladri Reservoir",
    time: "Today, 7:00 PM, 0.5 miles away",
  },
];

export default function MapsDone(): JSX.Element {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-lightwhite-color w-[375px] h-[812px] relative">
        {/* Status Bar */}
        <div className="h-12 px-5 flex items-center justify-between">
          <span className="text-[15px] font-semibold">9:41</span>
          <div className="flex items-center gap-2">
            <Signal className="w-4 h-4" />
            <Wifi className="w-4 h-4" />
            <Battery className="w-6 h-3" />
          </div>
        </div>

        {/* Location Header */}
        <div className="px-4 py-3 flex items-center gap-3">
          <MapPin className="w-6 h-6" />
          <div className="flex items-center justify-between flex-1">
            <span className="text-base text-lightsub-text-color">
              National Institute of Te...
            </span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>

        {/* Map View */}
        <div className="relative h-[510px] mx-4">
          <div className="w-full h-full rounded-[20px] overflow-hidden">
            <img
              src="/placeholder-map.jpg"
              alt="Map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Location Cards */}
        <div className="absolute bottom-24 left-0 w-full px-4 space-y-3">
          {locationCards.map((card, index) => (
            <Card key={index} className="bg-white shadow-sm">
              <CardContent className="p-2 flex items-center gap-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-[53px] h-11 rounded-md object-cover"
                />
                <div>
                  <p className="text-xs text-lightsub-text-color">
                    {card.time}
                  </p>
                  <h3 className="text-base font-medium text-lighttext-color">
                    {card.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 w-full bg-white border-t">
          <div className="flex items-center justify-around py-2">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className={`flex flex-col items-center gap-1 ${
                  item.primary
                    ? "bg-lightprimary-color text-white rounded-full p-3 -mt-6"
                    : ""
                }`}
              >
                <item.icon
                  className={`w-6 h-6 ${item.primary ? "text-white" : ""}`}
                />
                {item.label && (
                  <span
                    className={`text-xs ${item.active ? "text-black" : "text-lighttext-color"}`}
                  >
                    {item.label}
                  </span>
                )}
              </Button>
            ))}
          </div>
          <div className="h-[7px] w-[136px] bg-[#1b1e28] rounded-[100px] mx-auto mb-5" />
        </div>
      </div>
    </div>
  );
}
