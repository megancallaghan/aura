"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { ChevronRight, Github, Sun, Moon, Settings, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function AuraHome() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [theme, setTheme] = useState("violet")
  const [date, setDate] = useState<Date | undefined>(new Date(2024, 9, 29))

  // Mouse animation effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated gradient background that follows mouse */}
      <div
        className="pointer-events-none fixed inset-0 opacity-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(125, 46, 255, 0.2), transparent 40%)`,
        }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4">
          <div className="mr-8 flex">
            <a className="flex items-center space-x-2" href="/">
              <span className="font-bold text-lg">AURA</span>
            </a>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-foreground hover:text-foreground/80">
                Docs <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Getting Started</DropdownMenuItem>
                <DropdownMenuItem>API Reference</DropdownMenuItem>
                <DropdownMenuItem>Examples</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-foreground hover:text-foreground/80">
                UI Library <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Components</DropdownMenuItem>
                <DropdownMenuItem>Themes</DropdownMenuItem>
                <DropdownMenuItem>Templates</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-foreground hover:text-foreground/80">
                Reference <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Token System</DropdownMenuItem>
                <DropdownMenuItem>Guidelines</DropdownMenuItem>
                <DropdownMenuItem>Best Practices</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-foreground hover:text-foreground/80">
                Support <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Community</DropdownMenuItem>
                <DropdownMenuItem>Help Center</DropdownMenuItem>
                <DropdownMenuItem>Contact</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Github className="h-[1.2rem] w-[1.2rem]" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Settings className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container relative flex flex-col items-center justify-center gap-4 py-16 text-center md:py-20">
        <Badge variant="secondary" className="mb-2">
          v1.0.0 Release Notes <ChevronRight className="ml-1 h-3 w-3" />
        </Badge>
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">Welcome to AURA</h1>
        <p className="max-w-[42rem] text-lg leading-relaxed text-muted-foreground">
          An Automated UI and Reusable library.
        </p>
        <div className="flex gap-3 mt-2">
          <Button size="default">Get Started</Button>
          <Button size="default" variant="outline">
            View Components
          </Button>
        </div>
      </section>

      {/* Examples Section */}
      <section className="container pb-16 px-4">
        <div className="flex items-center justify-between mb-6">
          <Tabs defaultValue="examples" className="w-auto">
            <TabsList className="bg-muted/50">
              <TabsTrigger value="examples">Examples</TabsTrigger>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="tasks">Tasks</TabsTrigger>
              <TabsTrigger value="playground">Playground</TabsTrigger>
              <TabsTrigger value="governance">Governance</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Theme:</span>
            <Select value={theme} onValueChange={setTheme}>
              <SelectTrigger className="w-[130px] h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="violet">Violet</SelectItem>
                <SelectItem value="blue">Blue</SelectItem>
                <SelectItem value="green">Green</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Component Grid */}
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {/* Stats Card */}
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardDescription className="text-xs">Subscriptions</CardDescription>
              <CardTitle className="text-3xl font-bold">+2,350</CardTitle>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="text-xs text-muted-foreground">+180.1% from last month</div>
            </CardContent>
            <CardFooter className="pt-3">
              <Button className="w-full" variant="secondary" size="sm">
                View More
              </Button>
            </CardFooter>
          </Card>

          {/* Violet Aura Card */}
          <Card className="border-border/50 bg-gradient-to-br from-primary/20 to-primary/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl font-bold">Violet Aura</CardTitle>
              <CardDescription className="text-sm leading-relaxed mt-2">
                Violet in a aura represents wisdom, inspiration, and vision.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Team Invite Card */}
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Upgrade your subscription</CardTitle>
              <CardDescription className="text-xs">You have not invited any team members yet.</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-2 pb-3">
              <Badge variant="outline" className="rounded-sm">
                MC
              </Badge>
              <Badge variant="outline" className="rounded-sm">
                CB
              </Badge>
              <Badge variant="outline" className="rounded-sm">
                KS
              </Badge>
            </CardContent>
            <CardFooter className="pt-3">
              <Button className="w-full" size="sm">
                <span className="mr-1.5">✨</span> Invite Members
              </Button>
            </CardFooter>
          </Card>

          {/* Profile Verification */}
          <Card className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium">Your profile has been verified.</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </CardHeader>
          </Card>

          {/* Compute Environment */}
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Compute Environment</CardTitle>
              <CardDescription className="text-xs">Select your compute environment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 pb-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm">Kubernetes</span>
              </div>
              <div className="flex items-center gap-2 pl-4">
                <span className="text-sm text-muted-foreground">Virtual Machine</span>
              </div>
            </CardContent>
          </Card>

          {/* How did you hear */}
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-center">How did you hear about us?</CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <Select>
                <SelectTrigger className="h-9">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="social">Social Media</SelectItem>
                  <SelectItem value="search">Search Engine</SelectItem>
                  <SelectItem value="friend">Friend</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Team Members */}
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Team Members</CardTitle>
              <CardDescription className="text-xs">Invite your team members to collaborate.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pb-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">MC</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-0.5">
                  <p className="text-sm font-medium leading-none">Megan Callaghan</p>
                  <p className="text-xs text-muted-foreground">m@allan@aura...</p>
                </div>
                <Select defaultValue="owner">
                  <SelectTrigger className="w-[90px] h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="owner">Owner</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="member">Member</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">JY</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-0.5">
                  <p className="text-sm font-medium leading-none">Jessica Yochim</p>
                  <p className="text-xs text-muted-foreground">jessica@exam...</p>
                </div>
                <Select defaultValue="design">
                  <SelectTrigger className="w-[90px] h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="dev">Developer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">BT</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-0.5">
                  <p className="text-sm font-medium leading-none">Brad Triana</p>
                  <p className="text-xs text-muted-foreground">btriana@exam...</p>
                </div>
                <Select defaultValue="develop">
                  <SelectTrigger className="w-[90px] h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="develop">Develop</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Processing */}
          <Card className="border-border/50 flex items-center justify-center min-h-[180px]">
            <CardContent className="text-center space-y-3 pt-6">
              <div className="h-10 w-10 mx-auto rounded-full border-3 border-primary border-t-transparent animate-spin" />
              <div>
                <CardTitle className="text-base mb-1">Processing your request</CardTitle>
                <CardDescription className="text-xs">This may take a few moments...</CardDescription>
              </div>
            </CardContent>
          </Card>

          {/* Subscription Form */}
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Upgrade your subscription</CardTitle>
              <CardDescription className="text-xs">
                You are currently on the free plan. Upgrade to get access to all features.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pb-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs">
                    Name
                  </Label>
                  <Input id="name" placeholder="First Last" className="h-8 text-sm" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs">
                    Email
                  </Label>
                  <Input id="email" placeholder="m@example.com" className="h-8 text-sm" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="card" className="text-xs">
                  Card Number
                </Label>
                <Input id="card" placeholder="4242 4242 4242 4242" className="h-8 text-sm" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="expiry" className="text-xs">
                    MM/YY
                  </Label>
                  <Input id="expiry" placeholder="MM/YY" className="h-8 text-sm" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="cvc" className="text-xs">
                    CVC
                  </Label>
                  <Input id="cvc" placeholder="CVC" className="h-8 text-sm" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Plan</Label>
                <Select defaultValue="starter">
                  <SelectTrigger className="h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="starter">Starter Plan</SelectItem>
                    <SelectItem value="pro">Pro Plan</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="terms" />
                <Label htmlFor="terms" className="text-xs leading-tight">
                  I agree to the terms and conditions
                </Label>
              </div>
              <div className="text-xs text-muted-foreground">Allow users to send you emails</div>
            </CardContent>
            <CardFooter className="flex justify-between pt-3">
              <Button variant="outline" size="sm">
                Cancel
              </Button>
              <Button size="sm">Upgrade Plan</Button>
            </CardFooter>
          </Card>

          {/* Terms Agreement */}
          <Card className="border-primary/50 border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">I agree to the terms and conditions</CardTitle>
              <CardDescription className="text-xs leading-relaxed mt-2">
                By checking this box, you agree to our Terms of Service and Privacy Policy.
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Price Range */}
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Price Range</CardTitle>
              <CardDescription className="text-xs">Set your budget range</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pb-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <Progress value={33} className="flex-1" />
                </div>
                <div className="flex items-center justify-between text-sm px-3">
                  <span className="text-muted-foreground">$0</span>
                  <span className="font-medium">$1000</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="rounded-sm gap-1">
                  💜 <span className="text-xs">Synergy</span>
                </Badge>
                <Badge variant="outline" className="rounded-sm gap-1">
                  ⚡ <span className="text-xs">Uploading</span>
                </Badge>
                <Badge variant="outline" className="rounded-sm gap-1">
                  ⏳ <span className="text-xs">Loading</span>
                </Badge>
              </div>
              <Input placeholder="Type your message..." className="h-8 text-sm" />
            </CardContent>
          </Card>

          {/* Calendar */}
          <Card className="border-border/50">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <ChevronRight className="h-4 w-4 rotate-180" />
                </Button>
                <CardTitle className="text-sm font-medium">October 2024</CardTitle>
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pb-3">
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border-0 p-0" />
            </CardContent>
          </Card>

          {/* Account Creation */}
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Create an account</CardTitle>
              <CardDescription className="text-xs">Enter your email below to create your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pb-4">
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" className="w-full bg-transparent h-8">
                  <Github className="mr-1.5 h-3.5 w-3.5" />
                  <span className="text-xs">Github</span>
                </Button>
                <Button variant="outline" size="sm" className="w-full bg-transparent h-8">
                  <svg className="mr-1.5 h-3.5 w-3.5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="text-xs">Google</span>
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">OR CONTINUE WITH</span>
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Email</Label>
                <Input placeholder="m@example.com" className="h-8 text-sm" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Password</Label>
                <Input type="password" className="h-8 text-sm" />
              </div>
              <Button className="w-full" size="sm">
                Create account
              </Button>
            </CardContent>
          </Card>

          {/* Goal Setting */}
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Move Goal</CardTitle>
              <CardDescription className="text-xs">Set your daily activity goal:</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pb-4">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Button variant="ghost" size="icon" className="absolute -left-12 top-1/2 -translate-y-1/2 h-8 w-8">
                    −
                  </Button>
                  <div className="text-center">
                    <div className="text-4xl font-bold">90</div>
                    <div className="text-xs text-muted-foreground">minutes/day</div>
                  </div>
                  <Button variant="ghost" size="icon" className="absolute -right-12 top-1/2 -translate-y-1/2 h-8 w-8">
                    +
                  </Button>
                </div>
              </div>
              <Button className="w-full" size="sm">
                Set Goal
              </Button>
            </CardContent>
          </Card>

          {/* Chat Interface */}
          <Card className="border-border/50 lg:col-span-1">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs bg-primary/20">AM</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-sm">Amanda Maderic</CardTitle>
                  <CardDescription className="text-xs">AM@amana.com</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2 pb-3">
              <div className="rounded-lg bg-muted/50 p-2.5">
                <p className="text-xs">Hi, how can I help you today?</p>
              </div>
              <div className="rounded-lg bg-primary/20 p-2.5 ml-6">
                <p className="text-xs">Hey, I'm having trouble with my account.</p>
              </div>
              <div className="rounded-lg bg-muted/50 p-2.5">
                <p className="text-xs">What seems to be the problem?</p>
              </div>
              <div className="rounded-lg bg-primary/20 p-2.5 ml-6">
                <p className="text-xs">I can't log in.</p>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <Switch id="terms-chat" />
                  <Label htmlFor="terms-chat" className="text-xs">
                    I agree to the terms and conditions
                  </Label>
                </div>
                <div className="text-xs text-muted-foreground">Allow users to send you emails</div>
              </div>
              <div className="relative">
                <Input placeholder="Type your message..." className="h-8 pr-8 text-sm" />
                <Button size="icon" className="absolute right-1 top-1 h-6 w-6">
                  <ChevronRight className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Share Document */}
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Share this document</CardTitle>
              <CardDescription className="text-xs">Anyone with the link can view this document.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 pb-3">
              <div className="flex items-center gap-2">
                <Input value="https://example.com/link/u..." readOnly className="h-8 text-xs" />
                <Button size="sm" className="flex-shrink-0">
                  Copy link
                </Button>
              </div>
              <Separator />
              <div className="space-y-2">
                <p className="text-xs font-medium">People with access</p>
                {[
                  { name: "Mackenzie Solis", email: "m@kenzie@example.com", role: "Can edit", initials: "MS" },
                  { name: "Nick Taylor", email: "nicktaylor@example.com", role: "Can edit", initials: "NT" },
                  { name: "Sam Carbaallo", email: "sarahcarballo@example.com", role: "Can edit", initials: "SC" },
                  { name: "Chelsea Thompson", email: "ctthompson@example.com", role: "Can edit", initials: "CT" },
                ].map((person, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-[10px]">{person.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{person.name}</p>
                        <p className="text-muted-foreground">{person.email}</p>
                      </div>
                    </div>
                    <span className="text-muted-foreground">{person.role}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Volumes Table */}
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Volumes</CardTitle>
              <CardDescription className="text-xs">Manage your volumes.</CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="space-y-2">
                <div className="grid grid-cols-[80px_1fr_80px] gap-2 text-xs font-medium text-muted-foreground">
                  <div>Status</div>
                  <div>Name</div>
                  <div className="text-right">Size</div>
                </div>
                {[
                  { status: "In use", name: "porta_+_new", size: "2577 kB", statusColor: "bg-green-500" },
                  { status: "In use", name: "porta_...data", size: "134.2 kB", statusColor: "bg-green-500" },
                  { status: "error", name: "porta_...data", size: "0 kB", statusColor: "bg-red-500" },
                  { status: "Not in use", name: "porta_...nope", size: "12.6 kB", statusColor: "bg-muted-foreground" },
                ].map((volume, i) => (
                  <div key={i} className="grid grid-cols-[80px_1fr_80px] gap-2 text-xs items-center">
                    <div className="flex items-center gap-1.5">
                      <div className={`h-1.5 w-1.5 rounded-full ${volume.statusColor}`} />
                      <span>{volume.status}</span>
                    </div>
                    <div className="font-mono">{volume.name}</div>
                    <div className="text-right">{volume.size}</div>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-muted-foreground">4 of 4</span>
                  <div className="flex gap-1">
                    <Button variant="outline" size="sm" className="h-7 text-xs bg-transparent">
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="h-7 text-xs bg-transparent">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookie Settings */}
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Cookie Settings</CardTitle>
              <CardDescription className="text-xs">Manage your cookie settings here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pb-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-medium">Strictly Necessary</Label>
                    <p className="text-xs text-muted-foreground">
                      These cookies are essential in order to use the website and use its features.
                    </p>
                  </div>
                  <Switch checked disabled />
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-medium">Functional Cookies</Label>
                    <p className="text-xs text-muted-foreground">
                      These cookies allow the website to provide personalized functionality.
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
              <Button className="w-full" size="sm">
                Save preferences
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
