import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import { Calculator, MapPin, Ruler, TrendingUp, FileText } from "lucide-react";

// Indian states and cities data (simplified)
const states = [
  "Delhi",
  "Haryana",
  "Uttar Pradesh",
  "Punjab",
  "Rajasthan",
  "Maharashtra",
  "Gujarat",
  "Karnataka",
  "Tamil Nadu",
  "West Bengal",
  "Bihar",
  "Madhya Pradesh",
  "Andhra Pradesh",
  "Telangana",
  "Kerala",
  "Odisha",
  "Jharkhand",
  "Assam",
  "Chhattisgarh",
  "Uttarakhand",
];

const cities: Record<string, string[]> = {
  "Delhi": ["New Delhi", "Delhi NCR"],
  "Haryana": ["Gurgaon", "Faridabad", "Panipat", "Karnal"],
  "Uttar Pradesh": ["Noida", "Ghaziabad", "Lucknow", "Kanpur"],
  "Punjab": ["Chandigarh", "Ludhiana", "Amritsar", "Patiala"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Aurangabad"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem"],
};

// Cost per sq ft by quality (in INR)
const costPerSqFt = {
  basic: 1200,
  medium: 1800,
  premium: 2500,
};

// Phase-wise cost breakdown percentages
const phaseBreakdown = [
  { phase: "Foundation", percentage: 15, color: "#FFD447" },
  { phase: "Structure", percentage: 25, color: "#1A73E8" },
  { phase: "Plumbing", percentage: 8, color: "#FF9B4A" },
  { phase: "Electrical", percentage: 10, color: "#3A3A3A" },
  { phase: "Flooring", percentage: 12, color: "#1C1C1C" },
  { phase: "Painting", percentage: 6, color: "#F5F7FA" },
  { phase: "Doors & Windows", percentage: 8, color: "#FFD447" },
  { phase: "Roofing", percentage: 5, color: "#1A73E8" },
  { phase: "Miscellaneous", percentage: 11, color: "#FF9B4A" },
];

// Resource allocation breakdown
const resourceBreakdown = [
  { resource: "Material", percentage: 60, color: "#FFD447" },
  { resource: "Labor", percentage: 25, color: "#1A73E8" },
  { resource: "Equipment", percentage: 10, color: "#FF9B4A" },
  { resource: "Overhead", percentage: 5, color: "#3A3A3A" },
];

const CostCalculator = () => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [unit, setUnit] = useState<"sqft" | "sqm">("sqft");
  const [quality, setQuality] = useState<"basic" | "medium" | "premium">("medium");
  const [calculated, setCalculated] = useState(false);

  const availableCities = state ? cities[state] || [] : [];

  const calculateCost = () => {
    if (!state || !city || !area || parseFloat(area) <= 0) {
      return;
    }

    const areaValue = parseFloat(area);
    const areaInSqFt = unit === "sqm" ? areaValue * 10.764 : areaValue;
    const costPerSqFtValue = costPerSqFt[quality];
    const totalCost = areaInSqFt * costPerSqFtValue;

    return {
      areaInSqFt,
      costPerSqFtValue,
      totalCost,
    };
  };

  const handleCalculate = () => {
    if (calculateCost()) {
      setCalculated(true);
    }
  };

  const handleReset = () => {
    setState("");
    setCity("");
    setArea("");
    setUnit("sqft");
    setQuality("medium");
    setCalculated(false);
  };

  const calculation = calculateCost();

  const phaseData = calculation
    ? phaseBreakdown.map((phase) => ({
        name: phase.phase,
        value: Math.round((calculation.totalCost * phase.percentage) / 100),
        percentage: phase.percentage,
        fill: phase.color,
      }))
    : [];

  const resourceData = calculation
    ? resourceBreakdown.map((resource) => ({
        name: resource.resource,
        value: Math.round((calculation.totalCost * resource.percentage) / 100),
        percentage: resource.percentage,
        fill: resource.color,
      }))
    : [];

  const COLORS = phaseBreakdown.map((p) => p.color);

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-construction-blue to-construction-blue/80 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-background mb-4">Construction Cost Calculator</h1>
          <p className="text-lg text-background/90 max-w-3xl mx-auto font-medium">
            Calculate the estimated cost of your construction project with detailed phase-wise and resource-wise breakdown
          </p>
        </div>
      </div>

      {/* Calculator Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Form */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-xl anime-shadow p-6 border-2 border-construction-dark/10 sticky top-24"
              >
                <h2 className="text-2xl font-black text-construction-dark mb-6 flex items-center gap-2">
                  <Calculator className="text-primary" size={28} />
                  Project Details
                </h2>

                <div className="space-y-4">
                  {/* State Selection */}
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">
                      <MapPin className="inline mr-1" size={16} />
                      Select State
                    </label>
                    <select
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                        setCity("");
                      }}
                      className="w-full px-4 py-2 border-2 border-construction-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                    >
                      <option value="">Select State</option>
                      {states.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* City Selection */}
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">
                      <MapPin className="inline mr-1" size={16} />
                      Select City
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      disabled={!state}
                      className="w-full px-4 py-2 border-2 border-construction-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Select City</option>
                      {availableCities.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Area Input */}
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">
                      <Ruler className="inline mr-1" size={16} />
                      Area
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        placeholder="Enter area"
                        min="0"
                        step="0.01"
                        className="flex-1 px-4 py-2 border-2 border-construction-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                      />
                      <select
                        value={unit}
                        onChange={(e) => setUnit(e.target.value as "sqft" | "sqm")}
                        className="px-4 py-2 border-2 border-construction-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                      >
                        <option value="sqft">Sq. Ft</option>
                        <option value="sqm">Sq. Meter</option>
                      </select>
                    </div>
                  </div>

                  {/* Quality Selection */}
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">
                      <TrendingUp className="inline mr-1" size={16} />
                      Quality
                    </label>
                    <div className="flex gap-2">
                      {(["basic", "medium", "premium"] as const).map((q) => (
                        <button
                          key={q}
                          onClick={() => setQuality(q)}
                          className={`flex-1 px-4 py-2 rounded-lg font-bold transition-all border-2 ${
                            quality === q
                              ? "bg-primary text-primary-foreground border-construction-dark anime-shadow"
                              : "bg-muted text-foreground border-construction-dark/20 hover:border-primary"
                          }`}
                        >
                          {q.charAt(0).toUpperCase() + q.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={handleCalculate}
                      disabled={!state || !city || !area || parseFloat(area) <= 0}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105 anime-shadow border-2 border-construction-dark disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      Calculate
                    </button>
                    <button
                      onClick={handleReset}
                      className="px-6 py-3 bg-muted hover:bg-muted/80 text-foreground rounded-xl font-bold transition-all border-2 border-construction-dark/20"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Results Section */}
            <div className="lg:col-span-2 space-y-8">
              {calculated && calculation ? (
                <>
                  {/* Total Cost Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-primary to-construction-orange rounded-xl anime-shadow p-8 border-2 border-construction-dark"
                  >
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-construction-dark mb-4">Cost per sq.ft of House Construction</h3>
                      <div className="text-4xl font-black text-construction-dark mb-6">
                        ₹{calculation.costPerSqFtValue.toLocaleString("en-IN")} / sq.ft
                      </div>
                      <h3 className="text-2xl font-black text-construction-dark mb-2">Total Estimated Cost of Construction</h3>
                      <div className="text-5xl md:text-6xl font-black text-construction-dark">
                        ₹{calculation.totalCost.toLocaleString("en-IN")}
                      </div>
                      <p className="text-sm text-construction-dark/80 mt-4 font-medium">
                        Based on {calculation.areaInSqFt.toLocaleString("en-IN")} sq.ft area in {city}, {state}
                      </p>
                    </div>
                  </motion.div>

                  {/* Phase-wise Breakdown Chart */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-card rounded-xl anime-shadow p-6 border-2 border-construction-dark/10"
                  >
                    <h3 className="text-2xl font-black text-construction-dark mb-6 flex items-center gap-2">
                      <FileText className="text-primary" size={24} />
                      Timeline Tracking: Cost Per Phase (INR %)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <ChartContainer
                          config={{
                            foundation: { label: "Foundation", color: "#FFD447" },
                            structure: { label: "Structure", color: "#1A73E8" },
                            plumbing: { label: "Plumbing", color: "#FF9B4A" },
                            electrical: { label: "Electrical", color: "#3A3A3A" },
                            flooring: { label: "Flooring", color: "#1C1C1C" },
                            painting: { label: "Painting", color: "#F5F7FA" },
                            doors: { label: "Doors & Windows", color: "#FFD447" },
                            roofing: { label: "Roofing", color: "#1A73E8" },
                            miscellaneous: { label: "Miscellaneous", color: "#FF9B4A" },
                          }}
                          className="h-[300px]"
                        >
                          <PieChart>
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Pie
                              data={phaseData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={({ name, percentage }) => `${name}: ${percentage}%`}
                              outerRadius={100}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {phaseData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                          </PieChart>
                        </ChartContainer>
                      </div>
                      <div className="space-y-2">
                        {phaseBreakdown.map((phase, index) => {
                          const cost = Math.round((calculation.totalCost * phase.percentage) / 100);
                          return (
                            <div key={phase.phase} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                              <div className="flex items-center gap-3">
                                <div
                                  className="w-4 h-4 rounded"
                                  style={{ backgroundColor: phase.color }}
                                />
                                <span className="font-bold text-foreground">{phase.phase}</span>
                              </div>
                              <div className="text-right">
                                <div className="font-black text-construction-dark">₹{cost.toLocaleString("en-IN")}</div>
                                <div className="text-sm text-muted-foreground">{phase.percentage}%</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>

                  {/* Resource Allocation Chart */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-card rounded-xl anime-shadow p-6 border-2 border-construction-dark/10"
                  >
                    <h3 className="text-2xl font-black text-construction-dark mb-6">Cost by Resource Allocation</h3>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={resourceData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                          <XAxis dataKey="name" stroke="#1C1C1C" />
                          <YAxis stroke="#1C1C1C" />
                          <ChartTooltip
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                const data = payload[0].payload;
                                return (
                                  <div className="bg-card border-2 border-construction-dark/20 rounded-lg p-3 anime-shadow">
                                    <p className="font-bold text-foreground">{data.name}</p>
                                    <p className="text-primary font-black">
                                      ₹{data.value.toLocaleString("en-IN")}
                                    </p>
                                    <p className="text-sm text-muted-foreground">{data.percentage}%</p>
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                            {resourceData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </motion.div>

                  {/* Disclaimer */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-muted/50 rounded-xl p-6 border-2 border-construction-dark/10"
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">Disclaimer:</strong> The costs indicated are approximate costs for each resource. Actual cost estimates may vary for your city. Please check with your contractor or visit our nearest store for a custom cost estimate as per your requirement. This amount is an approximate amount for construction area & it does not include compound wall area. The default quality is set to medium. You can change this by clicking the quality buttons above.
                    </p>
                  </motion.div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-card rounded-xl anime-shadow p-12 border-2 border-construction-dark/10 text-center"
                >
                  <Calculator className="mx-auto mb-4 text-primary" size={64} />
                  <h3 className="text-2xl font-black text-construction-dark mb-2">Ready to Calculate?</h3>
                  <p className="text-muted-foreground font-medium">
                    Fill in the project details on the left to get an estimated cost breakdown for your construction project.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CostCalculator;

