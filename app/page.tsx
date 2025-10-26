"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Target, TrendingUp, Calendar, Zap, Moon, CheckCircle, Star } from 'lucide-react'
import CherryBlossomCountdown from "@/components/cherry-blossom-countdown"
import WorkLifeBalanceSchedule from "@/components/work-life-balance-schedule"

export default function HomePage() {
  const [dashboardVisited, setDashboardVisited] = useState(false)

  useEffect(() => {
    // Check if user has visited dashboard from planner/tracker
    const visited = localStorage.getItem("dashboardVisited")
    if (visited === "true") {
      setDashboardVisited(true)
    }
  }, [])

  const scrollToWellnessDashboard = () => {
    const element = document.getElementById("wellness-dashboard")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F1E8] to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="flex justify-center mb-6">
                <img
                  src="/images/logo.png"
                  alt="Make Time For More Logo"
                  width={104}
                  height={104}
                  className="rounded-full shadow-lg"
                />
              </div>

              <div className="space-y-6">
                <h1 className="text-3xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  Make Time For More<sup className="text-lg">™</sup> Monthly
                  <br />
                  Success Hub
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Take The Audit, Set Your 28-Day Intention, and access Cherry Blossom your AI Powered Work-Life Balance
                  Co-Guide. Experience non-negotiable co-working, community connections, wellness tracking, personalized
                  guidance and more -- all in one{" "}
                  <button
                    onClick={scrollToWellnessDashboard}
                    className={`font-bold underline transition-colors ${
                      dashboardVisited
                        ? "text-[#7FB069] hover:text-[#6FA055] cursor-pointer"
                        : "text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!dashboardVisited}
                  >
                    Dashboard
                  </button>
                  .
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero-women-tea-cherry-blossoms-new.png"
                  alt="Diverse women enjoying tea together in cherry blossom garden"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Onboarding Section - Complete Onboarding */}
      <div className="bg-gradient-to-br from-[#F5F1E8] to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Step 1 Badge and Header */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <img
              src="/images/logo.png"
              alt="Make Time For More Logo"
              width={80}
              height={80}
              className="rounded-full shadow-lg"
            />
            <Badge variant="secondary" className="bg-gradient-to-r from-[#7FB069] to-[#E26C73] text-white border-0">
              Step 1
            </Badge>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#7FB069] mb-4">
              Complete Onboarding: Your First 3-Steps to Balance, Freedom & Success...
            </h2>
            <p className="text-lg text-gray-600">
              Complete these three essential steps to prepare for your transformation journey
            </p>
          </div>

          {/* Three Steps Grid */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Step 1.1 - Audit Card */}
            <Card className="bg-[#7FB069] border-0 text-white overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/images/logo.png"
                    alt="Make Time For More Logo"
                    width={48}
                    height={48}
                    className="rounded-full shadow-lg"
                  />
                  <Badge variant="secondary" className="bg-white/20 text-white border-0 text-sm">
                    Step 1.1
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-white">Take The Work-Life Balance Audit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/90 leading-relaxed">
                  Discover exactly where you stand across 15 key life areas with our comprehensive assessment. Get
                  personalized insights and identify your biggest opportunities for growth.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-white/90 text-sm">15-question comprehensive assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-white/90 text-sm">Instant personalized results</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-white/90 text-sm">AI-powered insights from Cherry Blossom</span>
                  </div>
                </div>

                <div className="mt-6 mb-4">
                  <a
                    href="https://join.butter.us/make-time-for-more/audit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-white hover:bg-gray-50 text-[#7FB069] border-2 border-white font-semibold">
                      Join The Work-Life Balance Audit
                    </Button>
                  </a>
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="/audit" className="block">
                    <Button size="lg" className="w-full bg-white text-[#7FB069] hover:bg-gray-50 font-semibold">
                      Take The Work-Life Balance Audit
                    </Button>
                  </Link>
                  <a
                    href="https://chatgpt.com/g/g-68d2da76c4d881919bf0ff4131ac8ca8-your-work-life-balance-audit-review-2-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-white text-white hover:bg-white hover:text-[#7FB069] bg-transparent"
                    >
                      Review Your Audit with Cherry Blossom
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Step 1.2 - Intention Setting Card */}
            <Card className="bg-[#E26C73] border-0 text-white overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/images/logo.png"
                    alt="Make Time For More Logo"
                    width={48}
                    height={48}
                    className="rounded-full shadow-lg"
                  />
                  <Badge variant="secondary" className="bg-white/20 text-white border-0 text-sm">
                    Step 1.2
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-white">
                  Set Your 28-Day Desired Work-LifeStyle Intention
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/90 leading-relaxed">
                  Transform your audit insights into powerful, actionable intentions. Choose 1-3 focus areas and let
                  Cherry Blossom guide you through creating your personalized 28-day transformation plan.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-white/90 text-sm">Select 1-3 focus areas for maximum impact</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-white/90 text-sm">AI-guided intention crafting with Cherry Blossom</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-white/90 text-sm">Personalized daily practices & action plan</span>
                  </div>
                </div>

                <div className="mt-6 mb-4">
                  <a
                    href="https://join.butter.us/make-time-for-more/onboarding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-white hover:bg-gray-50 text-[#E26C73] border-2 border-white font-semibold">
                      Join The Intention Setting Circle
                    </Button>
                  </a>
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="/focus-areas" className="block">
                    <Button size="lg" className="w-full bg-white text-[#E26C73] hover:bg-gray-50 font-semibold">
                      Choose Your 1-3 Priority Focus Areas
                    </Button>
                  </Link>
                  <a
                    href="https://chatgpt.com/g/g-67ec80061e1c819192bc80c37a7ee320-set-your-desired-work-lifestyle-intention"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-white text-white hover:bg-white hover:text-[#E26C73] bg-transparent"
                    >
                      Set Your 28-Day Intention
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Step 1.3 - Preparation Checklist Card */}
            <Card className="bg-gradient-to-br from-[#7FB069] to-[#E26C73] border-0 text-white overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/images/logo.png"
                    alt="Make Time For More Logo"
                    width={48}
                    height={48}
                    className="rounded-full shadow-lg"
                  />
                  <Badge variant="secondary" className="bg-white/20 text-white border-0 text-sm">
                    Step 1.3
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-white">
                  Prepare For The Experience: Download Your Preparation Checklist
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/90 leading-relaxed">
                  Get ready for your transformation with our comprehensive preparation checklist. Complete these steps
                  to create the optimal environment for your work-life balance journey.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-white/90 text-sm">Clear your physical space</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-white/90 text-sm">Block off your calendar</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-white/90 text-sm">Notify your family & team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-white/90 text-sm">Delegate or delay tasks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                    <span className="text-white/90 text-sm">Prepare your spirit</span>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="https://docs.google.com/document/d/1IZ5qefGnMQpYJP8wMgQS3tVY6sj56CHcCpRBkOGpGjU/edit?tab=t.0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-white text-[#7FB069] hover:bg-gray-50 border-2 border-white font-semibold"
                    >
                      Download The Checklist
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Important Note */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#E26C73]">
            <p className="text-xl font-bold text-[#E26C73] text-center">
              Completing Onboarding is Mandatory to Make The Sunday Shift™ and Start Co-Working
            </p>
          </div>
        </div>
      </div>

      {/* Step 2 - Sunday Shift Section */}
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7FB069]/10 to-[#E26C73]/10" />
        <div className="relative max-w-6xl mx-auto px-6">
          {/* Step 2 Badge at Top */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <img
              src="/images/logo.png"
              alt="Make Time For More Logo"
              width={80}
              height={80}
              className="rounded-full shadow-lg"
            />
            <Badge variant="secondary" className="bg-gradient-to-r from-[#7FB069] to-[#E26C73] text-white border-0">
              Step 2
            </Badge>
          </div>

          {/* Header Text Above Image */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-[#7FB069] to-[#E26C73] bg-clip-text text-transparent mb-4">
              Make The Sunday Shift
            </h3>
            <p className="text-xl text-gray-700 font-medium">
              Adopt The Work-Life Balance Business Model & SOP™ -- the "Sustainable" Operating Procedure
            </p>
          </div>

          {/* Cherry Blossom Countdown Component */}
          <div className="text-center mb-12">
            <CherryBlossomCountdown />
          </div>

          {/* Content Grid */}
          <div className="flex justify-center">
            <div className="space-y-4 flex flex-col max-w-4xl w-full">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center justify-center gap-3 text-gray-700 bg-white/80 p-3 rounded-lg shadow-sm">
                  <Clock className="w-5 h-5 text-[#7FB069] flex-shrink-0" />
                  <span className="font-semibold text-lg">Join Us Live: Sunday @ 1:00–2:00 PM ET</span>
                </div>

                <a
                  href="https://join.butter.us/make-time-for-more/sunday-kickoff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="w-full h-full bg-white/80 hover:bg-white p-3 rounded-lg shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2">
                    <span className="text-2xl">🌸</span>
                    <span className="font-semibold text-lg text-[#7FB069]">Click Here to Make The Sunday Shift™</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3 - Co-Working Non-Negotiables Section */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Step 3 Badge at Top */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <img
              src="/images/logo.png"
              alt="Make Time For More Logo"
              width={80}
              height={80}
              className="rounded-full shadow-lg"
            />
            <Badge variant="secondary" className="bg-[#7FB069] text-white border-0">
              Step 3
            </Badge>
          </div>

          {/* Header Text Above Image */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#7FB069] mb-4">
              Break The Hustle Habit — Co-Work Your Non-Negotiables™
            </h3>
          </div>

          {/* New Co-Working Women Image */}
          <div className="text-center mb-8">
            <div className="max-w-6xl mx-auto">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/00000000000001step4-uUx2recPmERxCFDO1uIksPX0CAf4mO.png"
                alt="Diverse professional women in co-working environments with cherry blossoms"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Green Banner */}
          <div className="max-w-6xl mx-auto mb-8 -mt-4">
            <div className="bg-[#7FB069] text-white p-4 rounded-b-2xl shadow-lg text-center">
              <p className="text-lg lg:text-2xl font-medium leading-relaxed">
                You'll Practice, Embody & Live This Schedule with Us — 4 Days a Week
              </p>
            </div>
          </div>

          {/* Interactive Schedule Component */}
          <div className="rounded-2xl overflow-hidden mt-4">
            <WorkLifeBalanceSchedule />
          </div>
        </div>
      </div>

      {/* Cherry Blossom AI Suite */}
      <div className="bg-gradient-to-br from-[#7FB069]/10 to-[#7FB069]/5 pt-20 pb-25">
        <div className="text-center mb-12">
          <div className="max-w-2xl mx-auto mb-6">
            <div className="flex items-center justify-center gap-3 mb-8">
              <img
                src="/images/logo.png"
                alt="Make Time For More Logo"
                width={80}
                height={80}
                className="rounded-full shadow-lg"
              />
            </div>
            <img
              src="/images/cherry-blossom-suite-new.png"
              alt="Cherry Blossom Suite"
              className="w-full h-auto object-contain mx-auto mb-6 rounded-2xl"
            />
            <h2 className="text-2xl font-bold text-[#E26C73] mb-4">
              🌸 World's First AI-Powered Work-Life Balance Planner 🌸
            </h2>
            <p className="text-lg text-gray-900 mb-4">
              6 AI Powered Work-Life Balance Co-Guides to help plan your Experience — Each co-guide provides
              personalized planning, progress insights and transformation strategies.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-7xl mx-auto px-6">
          {/* Card 1 - Morning GIV•EN™ Routine */}
          <Card className="bg-gradient-to-br from-[#E26C73]/10 to-[#E26C73]/5 border-2 border-[#E26C73]/20 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E26C73] to-[#7FB069] flex items-center justify-center shadow-sm">
                  <img
                    src="/images/tea-cup-icon.png"
                    alt="Morning GIV•EN™ Routine"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 mb-3">Morning GIV•EN™ Routine</CardTitle>
              <p className="text-gray-700 text-sm leading-relaxed">
                Your spiritual alignment and morning routine co-guide for starting each day with intention and divine
                connection.
              </p>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="mb-6 rounded-lg overflow-hidden">
                <img
                  src="/images/morning-routine-pink-meditation.webp"
                  alt="Woman meditating in pink attire"
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="space-y-3">
                <a
                  href="https://chatgpt.com/g/g-67edfb8de70c8191926d0d3c6e60404f-plan-your-morning-given-routine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-[#E26C73] hover:bg-[#D55A60] text-white font-semibold">
                    Plan Your Morning Routine
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 - 30-Minute Workday Workout Window */}
          <Card className="bg-gradient-to-br from-[#7FB069]/10 to-[#7FB069]/5 border-2 border-[#7FB069]/20 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7FB069] to-[#E26C73] flex items-center justify-center shadow-sm">
                  <img
                    src="/images/yoga-meditation-icon.png"
                    alt="30-Minute Workday Workout Window"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 mb-3">30-Minute Workday Workout Window</CardTitle>
              <p className="text-gray-700 text-sm leading-relaxed">
                Your movement and energy optimization co-guide for integrating physical wellness into your workday.
              </p>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="mb-6 rounded-lg overflow-hidden">
                <img
                  src="/images/workout-window-screen.webp"
                  alt="Woman viewing virtual workout class"
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="space-y-3">
                <a
                  href="https://chatgpt.com/g/g-67f1a8b481048191965df81cdea2326a-30-minute-workday-workout-window"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-[#7FB069] hover:bg-[#6FA055] text-white font-semibold">
                    Plan Your 30-Minute Workout Window
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Card 3 - Extended Healthy Hybrid Lunch Break */}
          <Card className="bg-gradient-to-br from-[#E26C73]/10 to-[#E26C73]/5 border-2 border-[#E26C73]/20 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E26C73] to-[#7FB069] flex items-center justify-center shadow-sm">
                  <img
                    src="/images/tea-cup-icon.png"
                    alt="Extended Healthy Hybrid Lunch Break"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 mb-3">
                Extended Healthy Hybrid Lunch Break
              </CardTitle>
              <p className="text-gray-700 text-sm leading-relaxed">
                Your nourishment and activity-stacking co-guide for combining social connections, business meetings, and
                healthy eating in beautiful settings.
              </p>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="mb-6 rounded-lg overflow-hidden">
                <img
                  src="/images/hybrid-lunch-outdoor.png"
                  alt="Woman enjoying healthy salad outdoors"
                  className="w-full h-48 object-cover"
                />
              </div>

              <a
                href="https://chatgpt.com/g/g-67eecba908348191b9a9b349bb8c6f08-plan-your-extended-healthy-hybrid-lunch-break"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-[#E26C73] hover:bg-[#D55A60] text-white font-semibold">
                  Plan Your Extended Lunch Break
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Card 4 - 4-Hour Focused CEO Workday */}
          <Card className="bg-gradient-to-br from-[#7FB069]/10 to-[#7FB069]/5 border-2 border-[#7FB069]/20 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7FB069] to-[#E26C73] flex items-center justify-center shadow-sm">
                  <img
                    src="/images/ceo-presentation-cherry-blossom-icon.png"
                    alt="4-Hour Focused CEO Workday"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 mb-3">4-Hour Focused CEO Workday</CardTitle>
              <p className="text-gray-700 text-sm leading-relaxed">
                Your productivity and business alignment co-guide for working ON your business with divine co-creation
                and quantum focus.
              </p>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="mb-6 rounded-lg overflow-hidden">
                <img
                  src="/images/ceo-workday-focused.png"
                  alt="Professional woman working at desk"
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="space-y-3">
                <a
                  href="https://chatgpt.com/g/g-67ef467e4b288191ba2767b54574825c-plan-your-4-hour-focused-ceo-workday"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-[#7FB069] hover:bg-[#6FA055] text-white font-semibold">
                    Plan Your 4-Hour CEO Workday
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Card 5 - Quality of Lifestyle Experiences */}
          <Card className="bg-gradient-to-br from-[#E26C73]/10 to-[#E26C73]/5 border-2 border-[#E26C73]/20 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E26C73] to-[#7FB069] flex items-center justify-center shadow-sm">
                  <img
                    src="/images/family-vacation-icon.png"
                    alt="Quality of Lifestyle Experiences"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 mb-3">Quality of Lifestyle Experiences</CardTitle>
              <p className="text-gray-700 text-sm leading-relaxed">
                Your joy, creativity, and connection co-guide for immersing in the real wealth of life experiences.
              </p>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="mb-6 rounded-lg overflow-hidden">
                <img
                  src="/images/family-lifestyle-experiences.png"
                  alt="Woman enjoying quality time with family"
                  className="w-full h-48 object-cover"
                />
              </div>

              <a
                href="https://chatgpt.com/g/g-67f1b6ff90a48191b608dea34209591f-plan-enjoy-quality-of-lifestyle-experiences"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-[#E26C73] hover:bg-[#D55A60] text-white font-semibold">
                  Plan & Enjoy Quality Lifestyle Experiences
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Card 6 - Power Down & Unplug Digital Detox */}
          <Card className="bg-gradient-to-br from-[#E26C73]/10 to-[#E26C73]/5 border-2 border-[#E26C73]/20 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-
