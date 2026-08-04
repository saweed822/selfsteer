import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Tours from "@/pages/Tours";
import Cars from "@/pages/Cars";
import BlogIndex from "@/pages/BlogIndex";
import KashmirBlog from "@/pages/Blog";
import KashmirItineraryBlog from "@/pages/KashmirItineraryBlog";
import KashmirLadakhRentalGuide from "@/pages/KashmirLadakhRentalGuide";
import LadakhBlog from "@/pages/LadakhBlog";
import WhyVisitKashmirBlog from "@/pages/WhyVisitKashmirBlog";
import WhyBookSelfSteerBlog from "@/pages/WhyBookSelfSteerBlog";
import SrinagarLehUltimateGuide from "@/pages/SrinagarLehUltimateGuide";
import SrinagarToGulmargGuide from "@/pages/SrinagarToGulmargGuide";
import SrinagarAirportCarRental from "@/pages/SrinagarAirportCarRental";
import SelfDriveVsTaxi from "@/pages/SelfDriveVsTaxi";
import SrinagarToPahalgamGuide from "@/pages/SrinagarToPahalgamGuide";
import SrinagarToSonamargGuide from "@/pages/SrinagarToSonamargGuide";
import LadakhCars from "@/pages/LadakhCars";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/Seo";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tours" component={Tours} />
      <Route path="/cars" component={Cars} />
      <Route path="/cars/ladakh" component={LadakhCars} />
      <Route path="/blog/kashmir-self-drive-routes" component={KashmirBlog} />
      <Route path="/blog/complete-kashmir-travel-itinerary" component={KashmirItineraryBlog} />
      <Route path="/blog/kashmir-self-drive-car-rental-ladakh-guide" component={KashmirLadakhRentalGuide} />
      <Route path="/blog/kashmir-self-drive-car-rental-ladakh-guide/" component={KashmirLadakhRentalGuide} />
      <Route path="/blog/kashmir-to-ladakh-road-trip-guide" component={LadakhBlog} />
      <Route path="/blog/why-visit-kashmir" component={WhyVisitKashmirBlog} />
      <Route path="/blog/why-book-self-steer-kashmir" component={WhyBookSelfSteerBlog} />
      <Route path="/blog/srinagar-to-leh-self-drive-ultimate-guide" component={SrinagarLehUltimateGuide} />
      <Route path="/blog/srinagar-airport-car-rental" component={SrinagarAirportCarRental} />
      <Route path="/blog/self-drive-vs-taxi" component={SelfDriveVsTaxi} />
      <Route path="/blog/srinagar-to-pahalgam-road-trip-guide" component={SrinagarToPahalgamGuide} />
      <Route path="/blog/srinagar-to-sonamarg-road-trip-guide" component={SrinagarToSonamargGuide} />
      <Route path="/blog/srinagar-to-gulmarg-road-trip-guide" component={SrinagarToGulmargGuide} />
      <Route path="/blog" component={BlogIndex} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <OrganizationJsonLd />
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
