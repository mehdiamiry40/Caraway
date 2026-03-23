import { MapPin } from "lucide-react";

const areas = [
  // Inner Brisbane
  "Brisbane CBD", "Fortitude Valley", "South Brisbane", "West End", "Paddington",
  "Kelvin Grove", "Newstead", "Teneriffe", "New Farm", "Kangaroo Point",
  // North
  "Chermside", "Aspley", "Stafford", "Kedron", "Nundah", "Clayfield",
  "Sandgate", "Brighton", "Bracken Ridge", "North Lakes", "Kallangur",
  "Redcliffe", "Petrie", "Strathpine", "Warner",
  // South
  "Mount Gravatt", "Holland Park", "Sunnybank", "Calamvale", "Runcorn",
  "Springwood", "Loganholme", "Logan Central", "Beenleigh", "Browns Plains",
  // East
  "Carindale", "Tingalpa", "Wynnum", "Manly", "Cleveland",
  "Redland Bay", "Victoria Point", "Capalaba",
  // West
  "Ipswich", "Toowoomba", "Inala", "Forest Lake", "Richlands",
  "Oxley", "Darra", "Wacol", "Goodna", "Springfield",
];

export function ServiceAreas() {
  return (
    <section className="py-24 bg-white" aria-label="Cash for cars service areas Brisbane">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-sm font-semibold text-accent tracking-widest uppercase mb-3">Service Areas</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground">
            Cash for Cars Across Greater Brisbane
          </h3>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer free car removal and instant cash for cars throughout Brisbane, Ipswich, Logan, Redland Bay, Moreton Bay, and all surrounding suburbs. If you're not sure if we cover your area — just call us.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {areas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm text-foreground/70 border border-border/50 hover:border-primary/30 hover:text-primary transition-colors"
            >
              <MapPin className="w-3 h-3 shrink-0" />
              {area}
            </span>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-10 text-center max-w-2xl mx-auto">
          <p className="text-foreground font-medium text-lg">
            Not in the list? <strong>We likely still service your area.</strong>
          </p>
          <p className="text-muted-foreground mt-2 text-sm">
            Call <a href="tel:1800227293" className="text-primary font-semibold hover:underline">1800 CAR AWAY (1800 227 293)</a> to confirm same-day availability at your location.
          </p>
        </div>
      </div>
    </section>
  );
}
