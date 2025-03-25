
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Bitcoin's Price Volatility",
      description: "An in-depth analysis of the factors that contribute to Bitcoin's price fluctuations.",
      date: "June 15, 2023",
      readTime: "8 min read",
      category: "Market Analysis"
    },
    {
      id: 2,
      title: "Machine Learning Models for Cryptocurrency Prediction",
      description: "How advanced ML algorithms are revolutionizing crypto price forecasting.",
      date: "July 22, 2023",
      readTime: "12 min read",
      category: "Technology"
    },
    {
      id: 3,
      title: "The Impact of Institutional Investment on Bitcoin",
      description: "Examining how corporate adoption is changing the Bitcoin landscape.",
      date: "August 5, 2023",
      readTime: "10 min read",
      category: "Investment"
    },
    {
      id: 4,
      title: "Regulatory Developments and Their Effect on Crypto Markets",
      description: "A summary of recent regulatory changes and their market implications.",
      date: "September 14, 2023",
      readTime: "7 min read",
      category: "Regulation"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-block rounded-full px-3 py-1 border border-border bg-secondary/50 mb-4">
              <p className="text-xs font-medium">Bitcoin Insights</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              BitPredict Blog
            </h1>
            <p className="text-muted-foreground text-lg">
              The latest insights, analyses, and predictions from our team of Bitcoin experts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map(post => (
              <Card key={post.id} className="overflow-hidden hover:shadow-medium transition-shadow">
                <div className="bg-secondary/30 h-48"></div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium bg-secondary px-2 py-1 rounded">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{post.readTime}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">Read Article</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
