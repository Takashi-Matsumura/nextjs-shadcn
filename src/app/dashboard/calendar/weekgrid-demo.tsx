import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type DayOfWeek = "月" | "火" | "水" | "木" | "金" | "土" | "日";

const daysOfWeek: DayOfWeek[] = ["月", "火", "水", "木", "金", "土", "日"];

const sampleData: Record<DayOfWeek, string> = {
  月: "ヘルパー休み",
  火: "ヘルパー休み",
  水: "ヘルパー休み",
  木: "ヘルパー休み",
  金: "ヘルパー休み",
  土: "ヘルパー休み",
  日: "ヘルパー休み",
};

export function GridDemo() {
  return (
    <div className="h-screen flex flex-col">
      <div className="sticky top-0 grid grid-cols-7 gap-0 z-10 bg-gray-200">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="border border-gray-300 p-4">
            {day}
          </div>
        ))}
      </div>
      <div className="sticky top-14 grid grid-cols-7 gap-0 z-10 bg-gray-200">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="border border-gray-300 p-4">
            {sampleData[day]}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0 mt-4">
        {/* Your cards here */}
        <div style={{ gridColumn: 1, gridRow: 3 }}>
          <Card>
            <CardHeader>
              <CardTitle>利用者A</CardTitle>
              <CardDescription>10:00-11:00</CardDescription>
            </CardHeader>
            <CardContent>
              ヘルパー1
              <br />
              ヘルパー2
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>利用者B</CardTitle>
              <CardDescription>13:00-15:00</CardDescription>
            </CardHeader>
            <CardContent>
              ヘルパー3
              <br />
              ヘルパー4
              <br />
              ヘルパー5
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>利用者C</CardTitle>
              <CardDescription>15:00-16:00</CardDescription>
            </CardHeader>
            <CardContent>ヘルパー6</CardContent>
            <CardFooter>
              <p>社用車</p>
            </CardFooter>
          </Card>
        </div>
        <div style={{ gridColumn: 2, gridRow: 3 }}>
          <Card>
            <CardHeader>
              <CardTitle>利用者B</CardTitle>
              <CardDescription>13:00-15:00</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-1">
              <Avatar>
                <AvatarFallback className="bg-pink-300">板</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback className="bg-blue-300">澤</AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>
          <Card className="bg-red-100">
            <CardHeader>
              <CardTitle>利用者D</CardTitle>
              <CardDescription>
                <div className="flex gap-2">
                  <p>11:00-12:00</p>
                  <Badge className="bg-red-500">cancel</Badge>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex gap-1">
              <Avatar>
                <AvatarFallback className="bg-yellow-300">平</AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
