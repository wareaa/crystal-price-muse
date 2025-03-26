
import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';
import { getFiveYearPerformance, getHistoricalPredictionAccuracy } from "@/lib/priceData";

const HistoricalPredictions = () => {
  const [activeView, setActiveView] = useState('chart');
  const fiveYearData = getFiveYearPerformance();
  const accuracyData = getHistoricalPredictionAccuracy();
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };
  
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">5-Year Prediction Performance</h3>
      
      <Tabs value={activeView} onValueChange={setActiveView}>
        <TabsList className="mb-6">
          <TabsTrigger value="chart">Chart View</TabsTrigger>
          <TabsTrigger value="table">Table View</TabsTrigger>
          <TabsTrigger value="accuracy">Accuracy Trends</TabsTrigger>
        </TabsList>
        
        <TabsContent value="chart">
          <div className="rounded-lg border bg-card p-4">
            <h4 className="text-md font-medium mb-4">Bitcoin Price: Predicted vs Actual</h4>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={fiveYearData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis 
                    tickFormatter={(value) => `$${value/1000}k`}
                    domain={[0, 'dataMax + 5000']}
                  />
                  <Tooltip 
                    formatter={(value) => formatCurrency(Number(value))} 
                    labelFormatter={(label) => `Year: ${label}`}
                  />
                  <Legend />
                  <Bar dataKey="prediction" name="Predicted Price" fill="#f7931a" />
                  <Bar dataKey="actual" name="Actual Price" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="table">
          <div className="rounded-lg border bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Year</TableHead>
                  <TableHead>Predicted Price</TableHead>
                  <TableHead>Actual Price</TableHead>
                  <TableHead>Prediction Accuracy</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fiveYearData.map((row) => (
                  <TableRow key={row.year}>
                    <TableCell>{row.year}</TableCell>
                    <TableCell>{formatCurrency(row.prediction)}</TableCell>
                    <TableCell>{formatCurrency(row.actual)}</TableCell>
                    <TableCell>{row.accuracy}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        
        <TabsContent value="accuracy">
          <div className="rounded-lg border bg-card p-4">
            <h4 className="text-md font-medium mb-4">Prediction Accuracy Over Time</h4>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={accuracyData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis 
                    domain={[60, 100]}
                    unit="%"
                  />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="accuracy" name="Prediction Accuracy" stroke="#f7931a" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Note: Our prediction accuracy has consistently improved over the past 5 years as our machine learning models have been refined with more training data.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HistoricalPredictions;
